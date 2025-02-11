import Link from "next/link";

export type ViewLink = {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
}

export function ViewLinkCard({ viewLink }: { viewLink: ViewLink }) {
    return (
        <Link href={viewLink.link} className="w-full">
            <div className="border border-border p-6 rounded-lg bg-card hover:bg-hover hover:cursor-pointer">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    {viewLink.icon}
                </div>
                <h2 className="text-xl text-gray-900 dark:text-gray-100 font-semibold title-font mb-2">
                    {viewLink.title}
                </h2>
                <p className="leading-relaxed text-base">
                    {viewLink.description}
                </p>
            </div>
        </Link>
    )
}
