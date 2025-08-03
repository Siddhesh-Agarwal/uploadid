"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { DataStoreProvider } from "@/zustand/provider";

export default function Provider({ children }: { children: React.ReactNode }) {
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
