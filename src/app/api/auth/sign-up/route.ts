import db from "@/db";
import { facultyTable } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;
  const confirmPassword = body.confirmPassword;
  if (!email || !password || !confirmPassword) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: "Passwords do not match." },
      { status: 400 }
    );
  }
  const facultySearch = await db
    .select()
    .from(facultyTable)
    .where(eq(facultyTable.email, email));
  if (facultySearch.length === 0) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  const supabase = await createClient();
  const auth = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (auth.error !== null) {
    return NextResponse.json({ error: auth.error.message }, { status: 400 });
  }
  return NextResponse.json({
    instituteID: facultySearch[0].instituteID,
    userID: facultySearch[0].id,
  });
}
