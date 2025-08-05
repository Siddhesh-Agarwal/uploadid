import db from "@/db";
import { facultyTable } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;
  if (!email || !password) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  const facultyRes = await db
    .select()
    .from(facultyTable)
    .where(eq(facultyTable.email, email));
  if (facultyRes.length === 0) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  const supabase = await createClient();
  const auth = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (auth.error) {
    return NextResponse.json({ error: auth.error.message }, { status: 400 });
  }
  return NextResponse.json({
    instituteID: facultyRes[0].instituteID,
    userID: facultyRes[0].id,
  });
}
