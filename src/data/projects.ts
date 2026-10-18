
export type Status = "Active" | "Maintenance" | "Inactive"

export type Project = {
    id: string ,
    name: string,
    status: Status,
    description: string,
    date: string
}

export const projects: Project[] = [
    {
        id: "finance",
        name: "Finance Dashboard",
        status: "Active",
        description: "Personal finance dashboard on Plaid's sandbox API.",
        date: "Oct 13, 2026",
    },
    {
        id: "travel",
        name: "Travel App",
        status: "Active",
        description: "React Native app for planning and saving trips.",
        date: "September 12, 2026",
    },
    {
        id: "logs",
        name: "Log Parser CLI",
        status: "Active",
        description: "Python CLI that groups and counts errors in log files.",
        date: "April 9, 2026",
    },
    {
        id: "jobs",
        name: "Job Alert Bot",
        status: "Active",
        description: "Discord bot that posts new job listings.",
        date: "August 5, 2026",
    },
    {
        id: "resume",
        name: "AI Resume Matcher",
        status: "Maintenance",
        description: "CLI that scores job postings against a bank of resume bullets.",
        date: "Aug 19, 2026",
    },
    {
        id: "patreon",
        name: "Patreon Tier Monitor",
        status: "Inactive",
        description: "Watches a Patreon page for tier availability.",
        date: "June 23, 2026",
    },
]