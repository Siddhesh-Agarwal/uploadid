"use client";

import SignInToView from "@/components/SignInToView";
import GrantForm from "./form";

export default function AddGrantPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <div className="container max-w-xl mx-auto py-10 border rounded-lg shadow-md">
                    <GrantForm />
                </div>
            </main>
        </SignInToView>
    )
}