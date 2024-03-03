"use client";

import { DataTable } from "@/components/ui/data-table"
import { Patent } from "@/types/Patent";
import { columns } from "./columns"
import NotAllowedPage from "@/app/not-allowed";
import { useAppSelector } from "@/app/redux/hooks";

const patents: Patent[] = []

export default function ViewPatentsPage() {
    const data = useAppSelector((state) => state.data.profile);
    if (!data) {
        return <NotAllowedPage />
    }

    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Patents
            </h1>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={patents} />
            </div>
        </main>
    )
}
