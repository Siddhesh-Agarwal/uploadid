import { grantTable } from "@/db/schema";
import db from "@/db";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { validateInstituteID } from "@/lib/api";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const institute = params.get("institute");
  if (!institute) {
    return NextResponse.json(
      { error: "No institute ID provided" },
      { status: 400 }
    );
  }
  const instituteID = parseInt(institute);
  const check = await validateInstituteID(instituteID);
  if (!check) {
    return NextResponse.json(
      { error: "Invalid institute ID" },
      { status: 400 }
    );
  }
  const data = await db
    .select()
    .from(grantTable)
    .where(eq(grantTable.instituteID, instituteID));
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const instituteID = body.instituteID;
    if (!instituteID) {
      return NextResponse.json(
        { error: "No institute ID provided" },
        { status: 400 }
      );
    }
    const check = await validateInstituteID(instituteID);
    if (!check) {
      return NextResponse.json(
        { error: "Invalid institute ID" },
        { status: 400 }
      );
    }
    const data = await db.insert(grantTable).values(body).returning();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
