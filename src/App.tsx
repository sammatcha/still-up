import StatusCard from "./components/StatusCards.tsx"
import {projects} from "./data/projects.ts"
import {patches} from "./data/patches.ts"
import FeedEntry from "./components/FeedEntry.tsx"
import { useState } from "react"

export default function App() {
  const [selectedId, setSelectedId] = useState("all");
  const visiblePatches= selectedId === "all"
? patches : patches.filter((patch) => patch.projectId === selectedId)
  return(
    <main className="mx-auto min-h-svh w-full max-w-6xl bg-paper px-5 py-6">
      <p className="font-mono text-sm text-ink">
        $ still-up
        <span className="ml-0.5 inline-block h-4 w-2 bg-pink cursor-blink align-text-bottom" aria-hidden="true" />
      </p>
      <h1 className="mt-3 text-xl md:text-3xl font-bold tracking-wide text-ink uppercase xl:text-5xl">
        Still Up
      </h1>
      <p className="mt-3 max-w-xl text-base text-muted">
        A changelog of my projects: what I shipped and what I still keep running.
      </p>

      <h2 className="mt-8 mb-5 text-base text-muted uppercase md:text-lg lg:text-xl">Project Status</h2>
      {/* Status Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <StatusCard key={project.id} project={project} /> 
        ))}
      </div>
      <h2 className="text-xl text-muted uppercase mt-8 mb-5">Feed</h2>
      <>
        <div className="flex flex-wrap gap-2 mb-4">
            <button 
            className={`text-muted rounded-full shrink-0 px-2.5 py-0.5 border border-line ${selectedId === "all" ? "bg-pink text-paper" : "bg-transparent hover:bg-transparent hover:text-white"}`} 
            onClick={()=> setSelectedId("all")}
            aria-pressed = {selectedId === "all"}
            >
              All
            </button>
            <div className="flex flex-wrap gap-2">
              {projects.map((project)=> (
                <button key={project.id} onClick={()=> setSelectedId(project.id)} 
                  aria-pressed={selectedId === project.id}
                  className={`rounded-full shrink-0 px-2.5 py-0.5 border border-line text-muted  ${selectedId===project.id ? "border-pink bg-pink text-paper" : "bg-transparent hover:bg-transparent hover:text-white"}`}>
                    {project.name}
                </button>
              ))}
            </div>
        </div>

            {visiblePatches.length === 0 && (
              <p className="text-base text-muted">No updates for this project available anymore</p>
            )}
          <div className = "grid grid-cols-1 gap-4 lg:grid-cols-2">
            
            {visiblePatches.map((patch) => (
              <FeedEntry patch={patch} key={patch.id} />
            ))}
          </div>
      </>
     
    </main>
  )
}