import { db } from "@/db";
import { Course, courseTable } from "@/types/Course";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const data = await db.select().from(courseTable)
        res.status(200).json(data)
    }
    if(req.method === "POST") {
        db.insert(courseTable).values(req.body satisfies Course)
        res.status(200).json({ ok: true })
    }
}