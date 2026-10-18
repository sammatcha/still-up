import StatusCard from "./components/StatusCards.tsx"
import {projects} from "./data/projects.ts"

export default function App() {
  return(
    <main className="mx-auto min-h-svh w-full max-w-6xl bg-paper px-5 py-6">
      <h1 className="text-sm font-bold text-muted uppercase">Server Status</h1>
      {/* Status Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <StatusCard key={project.id} project={project} /> 
        ))}
      </div>
    </main>
  )
}