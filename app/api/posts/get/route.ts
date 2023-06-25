import {NextRequest, NextResponse} from 'next/server'
import { db } from "@/lib/turso";
import { posts, users } from "@/db/schema";
import {eq, sql} from "drizzle-orm";

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const page = pageParam ? parseInt(pageParam) : 1;
    const limit = limitParam ? parseInt(limitParam) : 100;

    const offset = (page - 1) * limit;

    const fetchedPosts = await db.select().from(posts).innerJoin(users, eq(users.id, posts.userId)).limit(limit).offset(offset).orderBy(sql`${posts.createdAt} desc nulls first`).all();

    return NextResponse.json(fetchedPosts)
}
