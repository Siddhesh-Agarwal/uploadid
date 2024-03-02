import { DataTable } from "@/components/ui/data-table";
import { Course, columns } from "./columns";

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

export default function ViewCertificationsPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Certifications
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={courses} columns={columns}/>
            </div>
        </main>
    )
}
