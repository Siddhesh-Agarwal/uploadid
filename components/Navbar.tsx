"use client";

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect } from "react";
import { FaEye, FaIndianRupeeSign, FaMoon, FaPlus, FaRightFromBracket, FaRightToBracket, FaSun } from "react-icons/fa6";
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
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default function Navbar() {
    return (
        <NavigationMenu className="flex w-full py-2 px-3 md:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 justify-between">
            {/* Navbar start */}
            <NavigationMenuList>
                <NavigationMenuItem className="bg-inherit">
                    <Link href="/" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* Show view and add links only when signed in */}
                <SignedIn>
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
                </SignedIn>

                <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref prefetch>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaIndianRupeeSign className="mr-1 font-bold" />
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>

            {/* Navbar end */}
            <NavigationMenuList>
                <SignedIn>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <UserButton userProfileMode="modal" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <SignOutButton>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Button variant={"outline"} size="icon">
                                    <FaRightFromBracket />
                                </Button>
                            </NavigationMenuLink>
                        </SignOutButton>
                    </NavigationMenuItem>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant={"outline"} size="icon">
                            <FaRightToBracket />
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