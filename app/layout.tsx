import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import ReduxProvider from "./redux-provider";
import "./globals.css";


const font = Fira_Sans({
  weight: "400",
  subsets: ["cyrillic", "greek"],
});

export const metadata: Metadata = {
  title: "Uploadid",
  description: "An Application to helps organizations keep track of their employees participations.",
  icons: "./favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
