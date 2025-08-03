"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

export default function Provider({ children }: PropsWithChildren<any>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster richColors />
    </ThemeProvider>
  );
}
