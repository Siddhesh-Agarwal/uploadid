import { db } from "@/db";
import { Grant, grantTable } from "@/types/Grant";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.select().from(grantTable)
    return NextResponse.json({ ok: true, data: res })
}

export async function POST(data: Grant) {
    await db.insert(grantTable).values(data)
    return NextResponse.json({ ok: true })
}