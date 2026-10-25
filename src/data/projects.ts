
export type Status = "Active" | "Maintenance" | "Inactive"

export type Project = {
    id: string
    name: string
    status: Status
    stack: string[]
    date: string
}

export const projects: Project[] = [
    {
        id: "stamps",
        name: "Stamp Calculator",
        status: "Maintenance",
        stack: ["Node", "Express", "Docker", "API", "Observability & Monitoring", "Self-Hosted"],
        date: "Jul 29, 2026",
    },
    {
        id: "tracker",
        name: "Job Application Tracker",
        status: "Active",
        stack: ["React", "TypeScript", "Supabase", "Claude API"],
        date: "Sep 14, 2026",
    },
    {
        id: "blog",
        name: "Content Platform",
        status: "Active",
        stack: ["Next.js", "Payload", "Vercel"],
        date: "Aug 20, 2026",
    },
    {
        id: "shortener",
        name: "URL Shortener",
        status: "Maintenance",
        stack: ["Go", "PostgreSQL", "Docker"],
        date: "Apr 30, 2026",
    },
    {
        id: "monitor",
        name: "Subscription Availability Monitor",
        status: "Inactive",
        stack: ["Playwright", "Python"],
        date: "June 23, 2026",
    },
    {
        id: "travel",
        name: "Travel App",
        status: "Active",
        stack: ["React Native", "Expo", "Firebase"],
        date: "September 12, 2026",
    },
    {
        id: "storefront",
        name: "E-commerce Storefront",
        status: "Active",
        stack: ["Next.js", "Shopify", "E-Commerce", "GraphQL"],
        date: "Aug 28, 2026",
    },
    {
        id: "binder",
        name: "The Binder",
        status: "Maintenance",
        stack: ["Next.js", "TypeScript"],
        date: "Aug 24, 2026",
    },
    {
        id: "finance",
        name: "Personal Finance Dashboard",
        status: "Active",
        stack: ["React", "Express", "Plaid API", "Node.js", "PostgreSQL"],
        date: "Oct 13, 2026",
    },
    {
        id: "logs",
        name: "Log Parser CLI",
        status: "Active",
        stack: ["Python", "Typer"],
        date: "April 9, 2026",
    },
    {
        id: "jobfinder",
        name: "Job Finder Pipeline",
        status: "Active",
        stack: ["Python"],
        date: "August 5, 2026",
    },
    {
        id: "resume",
        name: "AI Resume Matcher",
        status: "Maintenance",
        stack: ["Python", "Claude API"],
        date: "Aug 19, 2026",
    },
    {
        id: "paycheck",
        name: "Paycheck Tracker",
        status: "Active",
        stack: ["React", "Express", "Postgres"],
        date: "Oct 7, 2026",
    },
    {
        id: "stillup",
        name: "Still Up",
        status: "Active",
        stack: ["Vite", "React", "Tailwind"],
        date: "Oct 24, 2026",
    },
]
