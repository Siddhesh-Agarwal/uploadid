"use client";

import { Suspense } from "react";
import { DataTable } from "@/components/ui/data-table"
import SignInToView from "@/components/SignInToView";
import TableSkeleton from "@/components/tableSkeleton";
import { Grant } from "@/types/Grant"
import { columns } from "./columns"


const grants: Grant[] = []

export default function ViewGrantsPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Grants
                </h1>
                <div className="container mx-auto py-10">
                    <Suspense fallback={<TableSkeleton />}>
                        <DataTable data={grants} columns={columns} />
                    </Suspense>
                </div>
            </main>
        </SignInToView>
    )
}
