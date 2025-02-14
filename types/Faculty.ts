import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const departmentTable = pgTable("department", {
    id: integer("id").primaryKey(),
    name: text("department_name").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const designationTable = pgTable("designation", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    description: text("description")
})

export const facultyTable = pgTable("faculties", {
    facultyID: varchar("faculty_id", { length: 10 }).primaryKey(),
    facultyName: text("faculty_name").notNull(),
    department: text("department").notNull().references(() => departmentTable.name),
    designation: text("designation").notNull().references(() => designationTable.name),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const FacultySchema = createInsertSchema(facultyTable, {
    email: z.coerce.string().toLowerCase().email({ message: "Invalid Email" }),
    facultyID: z.coerce.string().toUpperCase(),
})

export type Faculty = z.infer<typeof FacultySchema>
