"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { DataStoreProvider } from "@/zustand/provider";

export default function Provider({ children }: PropsWithChildren<any>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DataStoreProvider>{children}</DataStoreProvider>
      <Toaster richColors />
    </ThemeProvider>
  );
}
