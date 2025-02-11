"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs"
import NotAllowedPage from "./NotAllowedPage"

export default function SignInToView({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SignedIn>
                {children}
            </SignedIn>
            <SignedOut>
                <NotAllowedPage />
            </SignedOut>
        </>
    )
}
