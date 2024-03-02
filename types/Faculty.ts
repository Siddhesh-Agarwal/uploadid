import { z } from "zod"

export const departments: string[] = ["CSE", "IT", "AIDS", "CSBS", "MTech. CSE", "CSE CS", "CSD", "ECE", "EEE", "MECH", "MCT", "CIVIL"]
export const designations: string[] = ["Assistant Professor", "Assosiate Professor", "Professor"]

export const FacultySchema = z.object({
    facultyName: z.coerce.string(),
    department: z.coerce.string(),
    designation: z.coerce.string(),
    email: z.coerce.string().toLowerCase().email({ message: "Invalid Email" }).endsWith("@skcet.ac.in", { message: "Use @skcet.ac.in mail" }),
    facultyID: z.coerce.string().toUpperCase(),
})

export type Faculty = z.infer<typeof FacultySchema>