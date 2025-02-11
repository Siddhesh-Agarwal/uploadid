import SignInToView from "@/components/SignInToView";
import { ViewLink, ViewLinkCard } from "@/components/ViewLinkCard";
import { Handshake, Eye, GraduationCap, HandCoins, NotebookPen, University, ScrollText } from "lucide-react/icons";

const viewLinks: ViewLink[] = [
    {
        title: "Conferences",
        description: "List of conferences attended by Faculty.",
        link: "/manage/conference",
        icon: <Handshake />
    },
    {
        title: "Courses",
        description: "List of course completed by Faculty.",
        link: "/manage/course",
        icon: <GraduationCap />,
    },
    {
        title: "Faculty",
        description: "List of Faculty",
        link: "/manage/faculty",
        icon: <University />,
    },
    {
        title: "Grants",
        description: "List of grants proposed by the Faculty.",
        link: "/manage/grant",
        icon: <HandCoins />,
    },
    {
        title: "Journals",
        description: "List of Faculty contributions to journals.",
        link: "/manage/journal",
        icon: <NotebookPen />,
    },
    {
        title: "Patents",
        description: "List of Patents filed by Faculty.",
        link: "/manage/patent",
        icon: <ScrollText />,
    },
]

export default function ViewPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    <Eye className="mr-4 inline-flex" size={42} />
                    View Records
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mt-8">
                    {
                        viewLinks.map((viewLink: ViewLink, index: number) => (
                            <ViewLinkCard key={index} viewLink={viewLink} />
                        ))
                    }
                </div>
            </main>
        </SignInToView>
    )
}
