import { db } from "@/db";
import { Grant, grantTable } from "@/types/Grant";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await db.select().from(grantTable)
        res.status(200).json(data)
    }
    if (req.method === "POST") {
        db.insert(grantTable).values(req.body satisfies Grant)
        res.status(200).json({ ok: true })
    }
}
