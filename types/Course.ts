import { date, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { facultyTable } from "./Faculty";

export const courseTable = pgTable("courses", {
    id: serial("id").primaryKey(),
    facultyID: varchar("faculty_id", { length: 10 }).notNull().references(() => facultyTable.facultyID),
    courseName: text("course_name").notNull(),
    courseProvider: text("course_provider").notNull(),
    dateOfCompletion: date("date_of_completion").notNull(),
    certificateLink: text("certificate_link").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const CourseSchema = createInsertSchema(courseTable, {
    certificateLink: z.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})
export type Course = z.infer<typeof CourseSchema>
