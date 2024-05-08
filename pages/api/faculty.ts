import { db } from "@/db";
import { Faculty, facultyTable } from "@/types/Faculty";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await db.select().from(facultyTable)
        res.status(200).json(data)
    }
    if (req.method === "POST") {
        db.insert(facultyTable).values(req.body satisfies Faculty)
        res.status(200).json({ ok: true })
    }
}