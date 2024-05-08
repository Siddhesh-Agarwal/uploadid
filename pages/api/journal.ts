import { db } from "@/db";
import { Journal, journalTable } from "@/types/Journal";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await db.select().from(journalTable)
        res.status(200).json(data)
    }
    if (req.method === "POST") {
        db.insert(journalTable).values(req.body satisfies Journal)
        res.status(200).json({ ok: true })
    }
}