import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-around p-8 md:p-12 min-h-[90vh]">
            <div className="min-h-72 w-full max-w-2xl flex flex-col items-center overflow-hidden">
                <div className="w-full pb-5 mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl mb-3 md:mb-5 lg:mb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        <AuroraText>
                            {/* <span className="text-transparent font-sans bg-clip-text font-semibold bg-gradient-to-br from-[#ffd319] via-[#ff2975] to-[#8c1eff]"> */}
                            Streamline Your College Records Management
                            {/* </span> */}
                        </AuroraText>
                    </h2>
                    <p className="text-xl md:text-2xl">
                        Transform how you manage academic records with our intuitive, secure, and efficient platform designed specifically for educational institutions.
                    </p>
                    <div className="mt-6 text-center md:ml-6 flex flex-row justify-center gap-2">
                        <SignedOut>
                            <SignUpButton mode="modal">
                                <Button variant={"outline"} className="bg-foreground font-semibold px-10 py-5 text-lg text-background">
                                    Register
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <Link href={"/manage"}>
                                <Button variant={"outline"} className="bg-foreground font-semibold px-10 py-5  text-lg text-background">
                                    Manage Records
                                </Button>
                            </Link>
                        </SignedIn>

                        <Link href={"/pricing"}>
                            <Button variant={"outline"} className="bg-background font-semibold px-10 py-5 text-lg text-foreground">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
