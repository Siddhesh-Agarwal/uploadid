import { db } from "@/db";
import { Patent, patentTable } from "@/types/Patent";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(patentTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Patent) {
    await db.insert(patentTable).values(data)
    return NextResponse.json({ ok: true })
}
