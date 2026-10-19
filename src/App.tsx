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
      <h1 className="text-xl text-muted uppercase mb-5">Server Status</h1>
      {/* Status Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <StatusCard key={project.id} project={project} /> 
        ))}
      </div>
      <h2 className="text-xl text-muted uppercase mt-8 mb-5">Feed</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {patches.map((patch) => (
          <FeedEntry patch={patch} key={patch.id} />
        ))}
      </div>
         {/* filter chips */}
         <div>
          {visiblePatches.map((patch) => (
            <FeedEntry patch={patch} key={patch.id} />
          ))}
         </div>
    </main>
  )
}