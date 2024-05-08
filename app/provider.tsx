"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./_redux/store";

export default function Provider({ children }: PropsWithChildren<any>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ClerkProvider>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </ClerkProvider>
        </ThemeProvider>
    );
}