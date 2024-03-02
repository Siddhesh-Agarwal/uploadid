import { z } from "zod";

export const JournalPublishers: unknown = [
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
export const JournalNames: unknown = [
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
export const JournalTypes: unknown = [
    "Wos",
    "Scopus",
    "UGC care",
]


export const JournalSchema = z.object({
    facultyID: z.coerce.string(),
    publisher: z.enum(JournalPublishers as const),
    nameOfJournal: z.enum(JournalNames as const),
    journalType: z.array(z.enum(JournalTypes as const)),
    dateOfPublication: z.coerce.date(),
    DOI: z.coerce.string(),
    issueNumber: z.coerce.number(),
    volumeNumber: z.coerce.number(),
    paperLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
    journalLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})

export type Journal = z.infer<typeof JournalSchema>