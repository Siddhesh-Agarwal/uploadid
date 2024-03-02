import Link from "next/link";
import { FaArrowRight, FaBook, FaBookOpen, FaChalkboardUser, FaGraduationCap, FaHandshake, FaMoneyBill, FaMoneyBillTrendUp } from "react-icons/fa6";

type ViewLink = {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
}

const viewLinks: ViewLink[] = [
    {
        title: "Faculty",
        description: "List of Faculty",
        link: "/add/faculty",
        icon: <FaChalkboardUser />,
    },
    {
        title: "Courses",
        description: "List of course completed by Faculty.",
        link: "/add/courses",
        icon: <FaGraduationCap />,
    },
    {
        title: "Journals",
        description: "List of Faculty contributions to journals.",
        link: "/add/journals",
        icon: <FaBook />,
    },
    {
        title: "Conferences",
        description: "List of conferences attended by Faculty.",
        link: "/add/conferences",
        icon: <FaHandshake />
    },
    {
        title: "Patents",
        description: "List of Patents filed by Faculty.",
        link: "/add/patents",
        icon: <FaBookOpen />,
    },
    {
        title: "Grants",
        description: "List of grants proposed by the Faculty.",
        link: "/add/grants",
        icon: <FaMoneyBillTrendUp />,
    },
]

export default function ViewPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Add Records
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mt-8">
                {
                    viewLinks.map((viewLink: ViewLink, index: number) => {
                        return (
                            <Link href={viewLink.link} key={index} className="w-full">
                                <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 hover:bg-blue-200 dark:bg-gray-900 dark:hover:bg-gray-800">
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
                    })
                }
            </div>
        </main >
    )
}