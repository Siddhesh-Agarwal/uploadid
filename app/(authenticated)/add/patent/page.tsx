"use client";

import SignInToView from "@/components/SignInToView";
import PatentForm from "./form";

export default function AddPatentPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <div className="container max-w-xl mx-auto py-10 border rounded-lg shadow-md">
                    <PatentForm />
                </div>
            </main>
        </SignInToView>
    )
}