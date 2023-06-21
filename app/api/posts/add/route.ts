import { NextRequest, NextResponse } from 'next/server'
import { db } from "@/lib/turso";
import { posts, users } from "@/db/schema";

export async function POST(req: NextRequest) {
    const { name, text } = await req.json()

    const newUser = await db.insert(users).values({ name }).returning().get()
    const newPost = await db.insert(posts).values({ text, userId: newUser.id }).returning().get()

    return NextResponse.json(newPost)
}
