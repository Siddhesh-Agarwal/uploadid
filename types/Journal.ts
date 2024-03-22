import { date, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const JournalPublishers: string[] = [
    "ACS Publications",
    "Allen Press",
    "Anvil publishing",
    "Bentham Open",
    "BioMed Central",
    "Edward Elgar publishing",
    "Elsevier",
    "Emerald Group Publishing",
    "Equinox Publishing",
    "IOP Publishing",
    "JMIR Publications",
    "Oxford Academic",
    "Palgrave Macmillan",
    "Sage",
    "Springer",
    "Taylor and Francis",
    "Wiley",
]
export const JournalNames: string[] = [
    "AI Open",
    "ACM Computing Surveys",
    "ACM Transactions on Computational Logic",
    "ACM Transactions on Computer Systems",
    "ACM Transactions on Computer-Human Interaction",
    "ACM Transactions on Computing Education",
    "ACM Transactions on Design Automation of Electronic Systems",
    "ACM Transactions on Embedded Computing Systems",
    "ACM Transactions on Parallel Computing",
    "ACM Transactions on Programming Languages and Systems",
    "ACM Transactions on Quantum Computing ",
    "ACM Transactions on Sensor Networks",
    "IEEE/ACM Transactions on Computational Biology and Bioinformatic",
]
export const JournalTypes: string[] = [
    "Wos",
    "Scopus",
    "UGC care",
]

export const journalTable = pgTable("journals", {
    id: serial("id").primaryKey(),
    facultyID: varchar("faculty_id", { length: 10 }).notNull(),
    publisher: text("publisher").notNull(),
    nameOfJournal: text("name_of_journal").notNull(),
    journalType: text("journal_type").array().notNull(),
    dateOfPublication: date("date_of_publication").notNull(),
    DOI: text("doi").notNull(),
    issueNumber: integer("issue_number").notNull(),
    volumeNumber: integer("volume_number").notNull(),
    paperLink: text("paper_link").notNull(),
    journalLink: text("journal_link").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})

export const JournalSchema = createInsertSchema(journalTable,{
    journalType: z.array(z.coerce.string()).refine((value) => value.some((item) => item), { message: "Select at least one type" }),
    paperLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
    journalLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})

export type Journal = z.infer<typeof JournalSchema>