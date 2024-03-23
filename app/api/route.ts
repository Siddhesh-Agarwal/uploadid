import { NextResponse } from "next/server"
import { db } from "@/db"

export async function GET() {
    return NextResponse.json({ "ok": true, "db": db })
}