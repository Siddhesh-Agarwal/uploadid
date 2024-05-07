"use client";

import { DataTable } from "@/components/ui/data-table";
import { Conference } from "@/types/Conference";
import { useAppSelector } from "@/app/_redux/hooks";
import NotAllowedPage from "@/app/not-allowed";
import { columns } from "./columns";
import { Suspense } from 'react'
import { TableSkeleton } from "@/components/tableSkeleton";


const conferences: Conference[] = []

export default function ViewConferencesPage() {
    const data = useAppSelector((state) => state.data.profile);
    if (!data) {
        return <NotAllowedPage />
    }
    // function getConferences() {
    //     "use server";
    // }

    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Conferences
            </h1>
            <div className="container mx-auto py-10">
                <Suspense fallback={<TableSkeleton />}>
                    <DataTable data={conferences} columns={columns} />
                </Suspense>
            </div>
        </main>
    )
}