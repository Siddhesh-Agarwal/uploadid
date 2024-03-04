import Link from "next/link";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="h-[40rem] w-fullflex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full pb-5 mx-auto text-center">
          <h2 className="text-3xl mb-3 lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Record Management
            <br />
            <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
              straight in your browser
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg text-justify">
            <strong>Uploadid</strong> is a Record Management System that enables the Management of different types of data
            through an easy to understand Web User Interface.
          </p>
          <div className="mt-6 text-center md:ml-6 flex flex-row justify-center">
            <Link href={"/auth/register"} className="bg-black px-4 py-2 text-white border border-white mx-1">
              Register
            </Link>
            <Link href={"/view"} className="bg-white px-4 py-2 text-black border border-black mx-1">
              View Data
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
