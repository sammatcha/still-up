import type {Project} from "../data/projects"

const statusColors = {
    Active: "border-mint text-mint",
    Maintenance: "border-gold text-gold",
    Inactive: "border-faint text-faint",
}

export default function StatusCard({project}: {project: Project}){
    return(
        <article className="rounded-xl border-line border bg-card p-5">
            <div className="flex justify-between gap-3">
                <h2 className="text-lg font-bold text-ink">{project.name}</h2>
                <span className={`shrink-0 flex rounded-full border px-2.5 py-0.5 text-sm tracking-wide uppercase ${statusColors[project.status]}`}>
                {project.status}
                </span>
                
            </div>
            <p className="text-base text-muted mt-2">{project.description}</p>
            <p className="text-sm text-faint mt-4">{project.date}</p>
        </article>
    )
}