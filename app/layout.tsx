import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Provider from "./provider";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const font = Noto_Sans({
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
                <Provider>
                    <Navbar />
                    {children}
                    <Toaster richColors />
                </Provider>
            </body>
        </html>
    );
}
