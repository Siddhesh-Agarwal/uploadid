"use client";

import { Suspense } from "react";
import { DataTable } from "@/components/ui/data-table";
import SignInToView from "@/components/SignInToView";
import TableSkeleton from "@/components/tableSkeleton";
import { Faculty } from "@/types/Faculty";
import { columns } from "./columns";
import { Plus, Sheet } from "lucide-react";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import FacultyForm from "./form";


const faculties: Faculty[] = []

export default function ViewFacultyPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Faculties
                </h1>
                <div className="container mx-auto py-10">
                    <Suspense fallback={<TableSkeleton />}>
                        <DataTable data={faculties} columns={columns} />
                    </Suspense>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='rounded-full bg-green-500/50 hover:bg-green-500 border p-2 w-10 h-10 z-50 absolute bottom-12 right-12'>
                            <Plus />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Add faculty
                            </SheetTitle>
                            <SheetDescription>
                                Add information about faculty
                            </SheetDescription>
                        </SheetHeader>
                        <FacultyForm />
                    </SheetContent>
                </Sheet>
            </main>
        </SignInToView>
    )
}
