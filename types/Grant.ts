import { date, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from 'drizzle-zod';
import { z } from "zod";


export const GrantStatus: readonly string[] = ["Accepted", "Waiting", "Rejected"]

export const grantTable = pgTable("grants", {
    id: serial("id").primaryKey(),
    proposedBy: varchar("faculty_id", { length: 10 }).notNull(),
    title: text("title").notNull(),
    appliedOn: date("applied_on").notNull(),
    grantAmount: integer("grant_amount").notNull(),
    status: text("status", {
        enum: ["Accepted", "Waiting", "Rejected"]
    }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})


export const GrantSchema = createInsertSchema(grantTable)

export type Grant = z.infer<typeof GrantSchema>