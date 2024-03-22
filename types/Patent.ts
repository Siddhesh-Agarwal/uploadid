import { date, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const patentTable = pgTable("patents", {
    id: serial("id").primaryKey(),
    publisher: text("publisher").notNull(),
    title: text("title").notNull(),
    dateOfPublication: date("date_of_publication").notNull(),
    facultyID: varchar("faculty_id", { length: 10 }).notNull(),
    journalLink: text("journal_link").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const PatentSchema = createInsertSchema(patentTable, {
    journalLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." })
})

export type Patent = z.infer<typeof PatentSchema>