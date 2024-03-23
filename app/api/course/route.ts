import { db } from "@/db";
import { Course, courseTable } from "@/types/Course";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(courseTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Course) {
    await db.insert(courseTable).values(data)
    return NextResponse.json({ ok: true })
}