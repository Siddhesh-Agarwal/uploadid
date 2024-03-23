import { db } from "@/db";
import { Journal, journalTable } from "@/types/Journal";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(journalTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Journal) {
    const res = await db.insert(journalTable).values(data)
    return NextResponse.json({ ok: true })
}