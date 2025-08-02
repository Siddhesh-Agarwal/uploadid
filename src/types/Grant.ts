import {
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { z } from "zod";
import { facultyTable } from "./Faculty";

export const grantStatus = pgEnum("grant_status", [
  "Accepted",
  "Waiting",
  "Rejected",
]);

export const grantTable = pgTable("grants", {
  id: serial("id").primaryKey(),
  proposedBy: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.facultyID),
  title: text("title").notNull(),
  appliedOn: date("applied_on").notNull(),
  grantAmount: integer("grant_amount").notNull(),
  status: grantStatus("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const GrantSchema = z.object({
  id: z.number(),
  proposedBy: z.string().max(10),
  title: z.string().min(1),
  appliedOn: z.coerce.date(),
  grantAmount: z.number(),
  status: z.enum(grantTable.status.enumValues),
  createdAt: z.coerce.date(),
});

export type Grant = z.infer<typeof GrantSchema>;
