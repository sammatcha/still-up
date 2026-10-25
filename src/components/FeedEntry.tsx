import { useState } from "react"
import type {Patch} from "../data/patches.ts"
import  {projects} from "../data/projects.ts"

const kindColors = {
    New: "text-mint",
    Update: "text-muted",
    Fix: "text-muted",
    "Known issues": "text-pink",
}
export default function FeedEntry({patch} : {patch: Patch}) {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen(!open)
    }
    const project = projects.find((item) => item.id === patch.projectId)
    return(
        <article className="rounded-xl border-line border bg-card p-5">
            <div className="flex justify-between gap-3">
                <h3 className="text-lg font-bold text-ink">{project?.name}</h3>
                <p className="text-sm text-muted">{patch.date}</p>
            </div>
            <p className="mt-3 text-sm text-muted">{project?.stack.join(" · ")}</p>
            {patch.changes.map((group) => (
                <section key={group.kind}>
                <p className={`mt-4 text-[11px] font-semibold tracking-[0.14em] uppercase ${kindColors[group.kind]}`}>{group.kind}</p>
                <ul className='mt-2 space-y-1 list-disc pl-5'>
                    {group.items.map((item, index) => (
                        <li 
                        key={index}
                        className="text-ink"
                        >{item}</li>
                    ))}
                </ul>
                </section>
            ))}
            <button 
                type="button"
                onClick = {handleToggle} 
                aria-expanded={open}
                className = "mt-4 text-pink border-t border-dashed border-line pt-3 text-left text-[11px] md:text-[13px] tracking-[0.14em] uppercase"
            >
              <span aria-hidden="true"> {open ? "▼" : "▶"}</span> 
               Dev Notes
            </button>
            <p hidden={!open} className="mt-2 text-sm md:text-base lg:text-lg text-body">
                {patch.devNotes}
            </p>
        </article>
    )
}