"use client";

import { DataTable } from "@/components/ui/data-table";
import { Faculty } from "@/types/Faculty";
import { columns } from "./columns";

const faculties: Faculty[] = []

export default function ViewFacultyPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Faculties
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={faculties} columns={columns} />
            </div>
        </main>
    )
}