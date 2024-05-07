import { FaBook, FaBookOpen, FaChalkboardUser, FaGraduationCap, FaHandshake, FaMoneyBillTrendUp, FaPlus } from "react-icons/fa6";
import { ViewLink, ViewLinkCard } from "@/components/ViewLinkCard";

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
        link: "/add/course",
        icon: <FaGraduationCap />,
    },
    {
        title: "Journals",
        description: "List of Faculty contributions to journals.",
        link: "/add/journal",
        icon: <FaBook />,
    },
    {
        title: "Conferences",
        description: "List of conferences attended by Faculty.",
        link: "/add/conference",
        icon: <FaHandshake />
    },
    {
        title: "Patents",
        description: "List of Patents filed by Faculty.",
        link: "/add/patent",
        icon: <FaBookOpen />,
    },
    {
        title: "Grants",
        description: "List of grants proposed by the Faculty.",
        link: "/add/grant",
        icon: <FaMoneyBillTrendUp />,
    },
]

export default function ViewPage() {

    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                <FaPlus className="mr-4 inline-flex" size={42} />
                Add Records
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mt-8">
                {
                    viewLinks.map((viewLink: ViewLink, index: number) => (
                        <ViewLinkCard key={index} viewLink={viewLink} />
                    ))
                }
            </div>
        </main >
    )
}