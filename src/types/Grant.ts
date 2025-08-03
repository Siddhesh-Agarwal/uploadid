import { grantTable } from "@/db/schema";
import { z } from "zod";

export const GrantSchema = z.object({
  proposedBy: z.string().max(10).array(),
  title: z.string().min(1),
  appliedOn: z.date(),
  grantAmount: z.number(),
  status: z.enum(grantTable.status.enumValues),
});

export type Grant = z.infer<typeof GrantSchema>;
