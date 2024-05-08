import { db } from "@/db";
import { Conference, conferenceTable } from "@/types/Conference";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await db.select().from(conferenceTable)
        res.status(200).json(data)
    }
    if (req.method === "POST") {
        db.insert(conferenceTable).values(req.body satisfies Conference)
        res.status(200).json({ ok: true })
    }
}