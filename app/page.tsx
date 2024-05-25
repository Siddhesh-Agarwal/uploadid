import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 h-max">
      <div className="min-h-72 border py-4 px-6 bg-gray-500/5 dark:bg-gray-900/75 w-fullflex flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="w-full pb-5 mx-auto text-center">
          <h2 className="text-3xl mb-3 md:mb-5 lg:mb-6 lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-br from-[#ffd319] via-[#ff2975] to-[#8c1eff]">
              College Data Management
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 md:text-lg text-justify">
            <strong>Uploadid</strong> is a Record Management System that enables the Management of College or University data
            through an easy to understand Web User Interface.
          </p>
          <div className="mt-6 text-center md:ml-6 flex flex-row justify-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant={"outline"} className="bg-black dark:bg-white px-4 py-2 text-white dark:text-black outline outline-black dark:outline-white mx-1">
                  Register
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href={"/add"}>
                <Button variant={"outline"} className="bg-black dark:bg-white px-4 py-2 text-white dark:text-black outline outline-black dark:outline-white mx-1">
                  Add Records
                </Button>
              </Link>
            </SignedIn>

            <Link href={"/pricing"}>
              <Button variant={"outline"} className="bg-white dark:bg-black px-4 py-2 text-black dark:text-white outline outline-white dark:outline-black mx-1">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
