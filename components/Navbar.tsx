"use client";

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect } from "react";
import { Sun, Moon, NotebookPen, ArrowRightFromLine, ArrowRightToLine, Wallet2 } from "lucide-react/icons"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"

function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    useEffect(() => {
        if (systemTheme) {
            setTheme(systemTheme)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [systemTheme])
    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default function Navbar() {
    return (
        <NavigationMenu className="flex max-w-screen w-full py-2 px-3 md:px-6 lg:px-8 border-b justify-between bg-muted/50">
            {/* Navbar start */}
            <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem className="bg-transparent">
                    <Link href="/" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* Show view and add links only when signed in */}
                <SignedIn>
                    <NavigationMenuItem className="bg-inherit">
                        <Link href="/manage" legacyBehavior passHref prefetch>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <NotebookPen className="mr-1 font-bold" />
                                Manage
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </SignedIn>

                <NavigationMenuItem className="bg-inherit">
                    <Link href="/pricing" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Wallet2 className="mr-1 font-bold" />
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>

            {/* Navbar end */}
            <NavigationMenuList className="space-x-2">
                <SignedIn>
                    <UserButton userProfileMode="modal" />
                    <SignOutButton>
                        <Button variant={"outline"} size="icon">
                            <ArrowRightFromLine />
                        </Button>
                    </SignOutButton>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant={"outline"} size="icon">
                            <ArrowRightToLine />
                        </Button>
                    </SignInButton>
                </SignedOut>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}
