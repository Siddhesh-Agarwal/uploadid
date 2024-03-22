import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const departments: string[] = ["CSE", "IT", "AIDS", "CSBS", "MTech. CSE", "CSE CS", "CSD", "ECE", "EEE", "MECH", "MCT", "CIVIL"]
export const designations: string[] = ["Assistant Professor", "Assosiate Professor", "Professor"]

export const facultyTable = pgTable("faculties", {
    facultyID: varchar("faculty_id", { length: 10 }).primaryKey(),
    facultyName: text("faculty_name").notNull(),
    department: text("department").notNull(),
    designation: text("designation").notNull(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const FacultySchema = createInsertSchema(facultyTable, {
    email: z.coerce.string().toLowerCase().email({ message: "Invalid Email" }).endsWith("@skcet.ac.in", { message: "Use @skcet.ac.in mail" }),
    facultyID: z.coerce.string().toUpperCase(),
})

export type Faculty = z.infer<typeof FacultySchema>