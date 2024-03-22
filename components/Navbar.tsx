"use client";

import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect } from "react";
import { FaEye, FaMoon, FaPlus, FaSun } from "react-icons/fa6";

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
                <NavigationMenuItem>
                    <Link href="/view" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaEye className="mr-1 font-bold" />
                            View
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/add" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaPlus className="mr-1 font-bold" />
                            Add
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Login
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Register
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <ModeToggle />
            </NavigationMenuList>
        </NavigationMenu>
    )
}