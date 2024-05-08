import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from "@/db"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ "ok": true, "db": db })
}