"use client";

import SignInToView from "@/components/SignInToView";
import FacultyForm from "./form";

export default function AddFacultyPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <div className="container max-w-xl mx-auto py-10 border rounded-lg shadow-md">
                    <FacultyForm />
                </div>
            </main>
        </SignInToView>
    )
}