import {
  date,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { z } from "zod";
import { facultyTable } from "./Faculty";

export const patentTable = pgTable("patents", {
  id: serial("id").primaryKey(),
  publisher: text("publisher").notNull(),
  title: text("title").notNull(),
  dateOfPublication: date("date_of_publication").notNull(),
  facultyID: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.facultyID),
  journalLink: text("journal_link").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const PatentSchema = z.object({
  id: z.number(),
  publisher: z.string().min(1),
  title: z.string().min(1),
  dateOfPublication: z.coerce.date(),
  facultyID: z.string().max(10),
  journalLink: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
  createdAt: z.coerce.date(),
});

export type Patent = z.infer<typeof PatentSchema>;
