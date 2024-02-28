import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from "next/link"
import { FaLink } from "react-icons/fa6"

type Course = {
    courseName: string;
    courseProvider: string;
    dateOfCompletion: string;
    facultyId: string;
    certificateLink: string;
}

const courses: Course[] = [
    {
        courseName: "Introduction to Data Science",
        courseProvider: "DataCamp",
        dateOfCompletion: "2023-06-15",
        facultyId: "FC101",
        certificateLink: "#",
    },
    {
        courseName: "JavaScript for Beginners",
        courseProvider: "Udemy",
        dateOfCompletion: "2023-03-19",
        facultyId: "FC102",
        certificateLink: "#",
    },
    {
        courseName: "Python Fundamentals",
        courseProvider: "Coursera",
        dateOfCompletion: "2023-09-22",
        facultyId: "FC103",
        certificateLink: "#",
    },
    {
        courseName: "Web Development Masterclass",
        courseProvider: "edX",
        dateOfCompletion: "2023-11-30",
        facultyId: "FC104",
        certificateLink: "#",
    },
    {
        courseName: "Machine Learning Techniques",
        courseProvider: "Udacity",
        dateOfCompletion: "2023-07-10",
        facultyId: "FC105",
        certificateLink: "#",
    },
    {
        courseName: "Introduction to Data Science",
        courseProvider: "DataCamp",
        dateOfCompletion: "2023-06-15",
        facultyId: "FC101",
        certificateLink: "#",
    },
    {
        courseName: "JavaScript for Beginners",
        courseProvider: "Udemy",
        dateOfCompletion: "2023-03-19",
        facultyId: "FC102",
        certificateLink: "#",
    },
    {
        courseName: "Python Fundamentals",
        courseProvider: "Coursera",
        dateOfCompletion: "2023-09-22",
        facultyId: "FC103",
        certificateLink: "#",
    },
    {
        courseName: "Web Development Masterclass",
        courseProvider: "edX",
        dateOfCompletion: "2023-11-30",
        facultyId: "FC104",
        certificateLink: "#",
    },
    {
        courseName: "Machine Learning Techniques",
        courseProvider: "Udacity",
        dateOfCompletion: "2023-07-10",
        facultyId: "FC105",
        certificateLink: "#",
    },
]

export default function Page() {
    return (
        <main className="w-screen px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                View Courses
            </h1>
            <div className="container mx-auto py-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left font-medium">S.No.</TableHead>
                            <TableHead className="font-medium">Course Name</TableHead>
                            <TableHead className="font-medium">Course Provider</TableHead>
                            <TableHead className="text-center font-medium">Date of Completion</TableHead>
                            <TableHead className="text-center font-medium">Faculty ID</TableHead>
                            <TableHead className="text-center font-medium w-12">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            courses.map((course: Course, index: number) => {
                                return (
                                    <TableRow key={index + 1}>
                                        <TableCell className="text-left font-medium">{index + 1}</TableCell>
                                        <TableCell className="text-left font-medium">{course.courseName}</TableCell>
                                        <TableCell className="text-left font-medium">{course.courseProvider}</TableCell>
                                        <TableCell className="text-center font-medium">{course.dateOfCompletion}</TableCell>
                                        <TableCell className="text-center font-medium">{course.facultyId}</TableCell>
                                        <TableCell className="text-center font-medium">
                                            <Link
                                                className="inline-flex hover:underline"
                                                href={course.certificateLink}
                                            >
                                                View
                                                <FaLink className="ml-1" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}
