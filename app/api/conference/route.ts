import { db } from "@/db";
import { Conference, conferenceTable } from "@/types/Conference";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(conferenceTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Conference) {
    await db.insert(conferenceTable).values(data)
    return NextResponse.json({ ok: true })
}