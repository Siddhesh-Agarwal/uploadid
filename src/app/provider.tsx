"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster richColors />
      </ClerkProvider>
    </ThemeProvider>
  );
}
