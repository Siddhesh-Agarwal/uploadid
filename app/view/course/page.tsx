"use client";

import { DataTable } from "@/components/ui/data-table";
import { Course } from "@/types/Course";
import { columns } from "./columns";
import NotAllowedPage from "@/app/not-allowed";
import { useAppSelector } from "@/app/redux/hooks";

const courses: Course[] = []

export default function ViewCertificationsPage() {
    const data = useAppSelector((state) => state.data.profile);
    if (!data) {
        return <NotAllowedPage />
    }

    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Certifications
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={courses} columns={columns} />
            </div>
        </main>
    )
}
