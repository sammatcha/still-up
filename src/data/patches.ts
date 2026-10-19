export type ChangeKind = "New" | "Update" | "Fix" | "Known issues"

export type Patch = {
    id: string
    projectId: string
    date: string
    title: string
    devNotes: string,
    changes: { kind: ChangeKind; items: string[] }[]
}

export const patches: Patch[] = [
    {
        id: "finance-metrics",
        projectId: "finance",
        date: "Oct 13, 2026",
        title: "Eyes on the server",
        devNotes:
            "Plaid sync, latency, and error rate are one scrape. Prometheus reads /metrics on the app host, Grafana charts those three series, and Discord pages only after two failed checks.",
        changes: [
            {
                kind: "New",
                items: [
                    "API now exposes a /metrics endpoint for Prometheus",
                    "Grafana board for latency, error rate and Plaid sync time",
                    "Discord alert when the health check fails twice in a row",
                ],
            },
            {
                kind: "Known issues",
                items: [
                    "Alerts can fire during planned restarts until maintenance mode lands",
                ],
            },
        ],
    },
    {
        id: "travel-offline",
        projectId: "travel",
        date: "September 12, 2026",
        title: "Offline trips",
        devNotes:
            "A saved trip is written on the device before the screen asks the network for tiles. The map reads that cache first and only requests tiles inside the visible region.",
        changes: [
            {
                kind: "New",
                items: [
                    "Trips can be saved for offline use",
                    "The map screen loads faster",
                ],
            },
            {
                kind: "Fix",
                items: [
                    "A saved trip no longer duplicates when the map is opened twice",
                ],
            },
        ],
    },
   
    {
        id: "logs-alerts",
        projectId: "logs",
        date: "April 9, 2026",
        title: "Lower alert threshold",
        devNotes:
            "The command tails a file and groups lines by a normalized message. A Discord webhook fires when a group crosses the threshold. The payload now includes the group and a count.",
        changes: [
            {
                kind: "New",
                items: [
                    "Discord webhook when a group of errors crosses the threshold",
                    "Lower alert threshold",
                ],
            },
            {
                kind: "Update",
                items: [
                    "The webhook payload includes the error group and a count",
                ],
            },
        ],
    },
]
