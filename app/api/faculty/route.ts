import { db } from "@/db";
import { Faculty, facultyTable } from "@/types/Faculty";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(facultyTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Faculty) {
    await db.insert(facultyTable).values(data)
    return NextResponse.json({ ok: true })
}