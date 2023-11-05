import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/turso";
import { posts, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get("page");
  const limitParam = searchParams.get("limit");
  const page = pageParam ? parseInt(pageParam) : 1;
  const limit = limitParam ? parseInt(limitParam) : 100;

  const offset = (page - 1) * limit;

  const fetchedPosts = await db
    .select()
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .limit(limit)
    .offset(offset)
    .orderBy(sql`${posts.createdAt} desc nulls first`)
    .all();

  return NextResponse.json(fetchedPosts);
}

const requestDataSchema = z.object({
  name: z.string().trim().min(1, { message: "Name cannot be empty" }),
  text: z.string().trim().min(1, { message: "Text cannot be empty" }),
});

export async function POST(req: NextRequest) {
  try {
    const { name, text } = requestDataSchema.parse(await req.json());

    const newUser = await db.insert(users).values({ name }).returning().get();
    const newPost = await db
      .insert(posts)
      .values({ text, userId: newUser.id })
      .returning()
      .get();

    return NextResponse.json(newPost);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ errors: error.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
