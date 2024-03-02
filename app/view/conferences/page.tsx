"use client";

import { DataTable } from "@/components/ui/data-table";
import { Conference } from "@/types/Conference";
import { columns } from "./columns";

const conferences: Conference[] = []

export default function ViewConferencesPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Conferences
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={conferences} columns={columns} />
            </div>
        </main>
    )
}