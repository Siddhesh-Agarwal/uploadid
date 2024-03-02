import { DataTable } from "@/components/ui/data-table";
import { Course } from "@/types/Course";
import { columns } from "./columns";

const courses: Course[] = [
    { courseName: "Introduction to Data Science", courseProvider: "DataCamp", dateOfCompletion: new Date("2023-06-15"), facultyID: "FC101", certificateLink: "#" },
    { courseName: "JavaScript for Beginners", courseProvider: "Udemy", dateOfCompletion: new Date("2023-03-19"), facultyID: "FC102", certificateLink: "#" },
    { courseName: "Python Fundamentals", courseProvider: "Coursera", dateOfCompletion: new Date("2023-09-22"), facultyID: "FC103", certificateLink: "#" },
    { courseName: "Web Development Masterclass", courseProvider: "edX", dateOfCompletion: new Date("2023-11-30"), facultyID: "FC104", certificateLink: "#" },
    { courseName: "Machine Learning Techniques", courseProvider: "Udacity", dateOfCompletion: new Date("2023-07-10"), facultyID: "FC105", certificateLink: "#" },
    { courseName: "Introduction to Data Science", courseProvider: "DataCamp", dateOfCompletion: new Date("2023-06-15"), facultyID: "FC101", certificateLink: "#" },
    { courseName: "JavaScript for Beginners", courseProvider: "Udemy", dateOfCompletion: new Date("2023-03-19"), facultyID: "FC102", certificateLink: "#" },
    { courseName: "Python Fundamentals", courseProvider: "Coursera", dateOfCompletion: new Date("2023-09-22"), facultyID: "FC103", certificateLink: "#" },
    { courseName: "Web Development Masterclass", courseProvider: "edX", dateOfCompletion: new Date("2023-11-30"), facultyID: "FC104", certificateLink: "#" },
    { courseName: "Machine Learning Techniques", courseProvider: "Udacity", dateOfCompletion: new Date("2023-07-10"), facultyID: "FC105", certificateLink: "#" },
    { courseName: "Introduction to Data Science", courseProvider: "DataCamp", dateOfCompletion: new Date("2023-06-15"), facultyID: "FC101", certificateLink: "#" },
    { courseName: "JavaScript for Beginners", courseProvider: "Udemy", dateOfCompletion: new Date("2023-03-19"), facultyID: "FC102", certificateLink: "#" },
    { courseName: "Python Fundamentals", courseProvider: "Coursera", dateOfCompletion: new Date("2023-09-22"), facultyID: "FC103", certificateLink: "#" },
    { courseName: "Web Development Masterclass", courseProvider: "edX", dateOfCompletion: new Date("2023-11-30"), facultyID: "FC104", certificateLink: "#" },
    { courseName: "Machine Learning Techniques", courseProvider: "Udacity", dateOfCompletion: new Date("2023-07-10"), facultyID: "FC105", certificateLink: "#" },
    { courseName: "Introduction to Data Science", courseProvider: "DataCamp", dateOfCompletion: new Date("2023-06-15"), facultyID: "FC101", certificateLink: "#" },
    { courseName: "JavaScript for Beginners", courseProvider: "Udemy", dateOfCompletion: new Date("2023-03-19"), facultyID: "FC102", certificateLink: "#" },
    { courseName: "Python Fundamentals", courseProvider: "Coursera", dateOfCompletion: new Date("2023-09-22"), facultyID: "FC103", certificateLink: "#" },
    { courseName: "Web Development Masterclass", courseProvider: "edX", dateOfCompletion: new Date("2023-11-30"), facultyID: "FC104", certificateLink: "#" },
    { courseName: "Machine Learning Techniques", courseProvider: "Udacity", dateOfCompletion: new Date("2023-07-10"), facultyID: "FC105", certificateLink: "#" },
]

export default function ViewCertificationsPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Certifications
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={courses} columns={columns} />
            </div>
        </main>
    )
}
