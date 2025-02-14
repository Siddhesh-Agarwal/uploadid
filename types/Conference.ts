import { date, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from 'drizzle-zod';

import { z } from "zod";

export const conferenceTable = pgTable("conferences", {
    id: serial("id").primaryKey(),
    facultyID: varchar("faculty_id", { length: 10 }).notNull(),
    eventName: text("event_name").notNull(),
    eventVenue: text("event_venue").notNull(),
    dateOfEvent: date("date_of_event").notNull(),
    link: text("event_link").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const ConferenceSchema = createInsertSchema(conferenceTable, {
    link: z.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})

export type Conference = z.infer<typeof ConferenceSchema>
