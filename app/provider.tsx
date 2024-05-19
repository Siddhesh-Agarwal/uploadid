"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs'

export default function Provider({ children }: PropsWithChildren<any>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </ThemeProvider>
    );
}