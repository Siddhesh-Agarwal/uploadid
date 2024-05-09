"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuIndicator } from "./ui/navigation-menu"
import { useTheme } from "next-themes"
import { useEffect } from "react";
import { FaEye, FaMoon, FaPlus, FaRightFromBracket, FaRightToBracket, FaSun } from "react-icons/fa6";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default function Navbar() {
    return (
        <NavigationMenu className="flex w-full py-2 px-3 md:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 justify-between">
            <NavigationMenuList>
                <NavigationMenuItem className="bg-inherit">
                    <Link href="/" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="bg-inherit">
                    <Link href="/view" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaEye className="mr-1 font-bold" />
                            View
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/add" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaPlus className="mr-1 font-bold" />
                            Add
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <SignedIn>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <UserButton userProfileMode="modal" />
                    </NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <SignOutButton />
                    </NavigationMenuLink>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}