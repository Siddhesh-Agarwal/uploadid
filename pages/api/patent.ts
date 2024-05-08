import { db } from "@/db";
import { Patent, patentTable } from "@/types/Patent";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await db.select().from(patentTable)
        res.status(200).json(data)
    }
    if (req.method === "POST") {
        db.insert(patentTable).values(req.body satisfies Patent)
        res.status(200).json({ ok: true })
    }
}