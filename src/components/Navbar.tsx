"use client";

import {
  AuthButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@/components/supabase/auth";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import {
  Sun,
  Moon,
  NotebookPen,
  ArrowRightToLine,
  Wallet2,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Navbar() {
  return (
    <NavigationMenu className="flex max-w-screen w-full py-2 px-3 md:px-6 lg:px-8 border-b justify-between bg-muted/50">
      {/* Navbar start */}
      <NavigationMenuList className="bg-transparent">
        <NavigationMenuItem className="bg-transparent">
          <Link href="/" prefetch>
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          </Link>
        </NavigationMenuItem>
        {/* Show view and add links only when signed in */}
        <SignedIn>
          <NavigationMenuItem className="bg-inherit">
            <Link href="/manage" prefetch>
              <Button>
                <NotebookPen className="mr-1 font-bold" />
                <span className="hidden md:block">Manage</span>
              </Button>
            </Link>
          </NavigationMenuItem>
        </SignedIn>

        <NavigationMenuItem className="bg-inherit">
          <Link href="/pricing" prefetch>
            <Button variant={"ghost"}>
              <Wallet2 className="mr-1 font-bold" />
              <span className="hidden md:block">Pricing</span>
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Navbar end */}
      <NavigationMenuList className="space-x-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <AuthButton>
            <Button variant={"ghost"} size="icon">
              <ArrowRightToLine />
            </Button>
          </AuthButton>
        </SignedOut>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
