import { eq } from "drizzle-orm";
import db from "../db";
import { facultyTable, instituteTable } from "@/db/schema";

export async function validateInstituteID(instituteID: number) {
  const res = await db
    .select()
    .from(instituteTable)
    .where(eq(instituteTable.id, instituteID));
  return res.length > 0;
}

export async function validateUserID(userID: number) {
  const res = await db
    .select()
    .from(facultyTable)
    .where(eq(facultyTable.id, userID));
  return res.length > 0;
}
