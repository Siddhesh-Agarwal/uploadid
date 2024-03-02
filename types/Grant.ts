import { z } from "zod";

export const GrantStatus: string[] = ["Accepted", "Waiting", "Rejected"]

export const GrantSchema = z.object({
    proposedBy: z.coerce.string(),
    title: z.coerce.string(),
    appliedOn: z.coerce.date(),
    grantAmount: z.coerce.number(),
    status: z.enum(["Accepted", "Waiting", "Rejected"]),
})

export type Grant = z.infer<typeof GrantSchema>