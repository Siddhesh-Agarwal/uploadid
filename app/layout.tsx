import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import "./globals.css";


const inter = Noto_Sans({ subsets: ["cyrillic"] });

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
