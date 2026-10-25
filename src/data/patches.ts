export type ChangeKind = "New" | "Update" | "Fix" | "Known issues"

export type Patch = {
    id: string
    projectId: string
    date: string
    devNotes: string,
    changes: { kind: ChangeKind; items: string[] }[]
}

export const patches: Patch[] = [
    {
        id: "stillup-board",
        projectId: "stillup",
        date: "Oct 24, 2026",
        devNotes:
            "The status board and the feed share one project list. A project chip keeps the patches for that project. Dev notes stay collapsed until the entry is opened.",
        changes: [
            {
                kind: "New",
                items: [
                    "Status card for each project I still keep running",
                    "Feed of patch notes, filterable by project",
                ],
            },
        ],
    },
    {
        id: "finance-metrics",
        projectId: "finance",
        date: "Oct 13, 2026",
        devNotes:
            "Plaid sync, latency, and error rate are one scrape. Prometheus reads /metrics on the app host, Grafana charts those three series, and Discord pages only after two failed checks.",
        changes: [
           
            {
                kind: "Known issues",
                items: [
                    "The dashboard will go down because no alerting hooked up to it yet"
                ],
            },
           
           
        ],
    },
    {
        id: "paycheck-split",
        projectId: "paycheck",
        date: "Oct 7, 2026",
        devNotes:
            "Each bucket is a percent of the deposit. Those amounts are summed, and whatever is left is stored as leftover.",
        changes: [
            {
                kind: "New",
                items: [
                    "A paycheck splits across emergency, loan, student loan, travel, and invest",
                    "Each split is saved with the leftover",
                ],
            },
        ],
    },
    {
        id: "job-tracker",
        projectId: "tracker",
        date: "Sep 14, 2026",
        devNotes:
            "A job posting PDF goes to a Supabase function that asks Claude for the application fields. Interview counts come from status history: a month counts when an application’s history includes Interview.",
        changes: [
            {
                kind: "New",
                items: [
                    "Upload a job posting PDF and Claude fills the application fields",
                    "Interview activity by month",
                ],
            },
            {
                kind: "Update",
                items: [
                    "Dashboard shows response, interview, and offer rates",
                ],
            },
        ],
    },
    {
        id: "travel-offline",
        projectId: "travel",
        date: "September 12, 2026",
        devNotes:
            "A saved trip is written on the device before the screen asks the network for tiles. The map reads that cache first and only requests tiles inside the visible region.",
        changes: [
            {
                kind: "Update",
                items: [
                    "Trips are able to be deleted",
                ],
            },
          
        ],
    },
    {
        id: "storefront-cart",
        projectId: "storefront",
        date: "Aug 28, 2026",
        devNotes:
            "Product pages read the catalog through the Shopify Storefront API.",
        changes: [
            {
                kind: "New",
                items: [
                    "Product catalog and detail pages from the Shopify Storefront API",
                    "Cart checkout flow",
                ],
            },
        ],
    },
    {
        id: "binder-sets",
        projectId: "binder",
        date: "Aug 24, 2026",
        devNotes:
        "A nice informational site for One Piece and Pokemon sets",
        changes: [
            {
                kind: "New",
                items: [
                    "Pokémon and One Piece set catalogs",
                    "A set page with product shots, set code, and card count",
                ],
            },
        ],
    },
    {
        id: "blog",
        projectId: "blog",
        date: "Aug 20, 2026",
        devNotes:
            "Posts are loaded from Payload. ",
        changes: [
            {
                kind: "Update",
                items: [
                    "Post list layout",
                    "Mobile nav spacing",
                ],
            },
            {
                kind: "New",
                items: [
                    "Books page shows coming soon",
                ],
            },
        ],
    },
    {
        id: "resume-score",
        projectId: "resume",
        date: "Aug 19, 2026",
        devNotes:
            "The posting is fetched as HTML and stripped to text. If the page is a JavaScript shell, a headless browser renders it and the text is read from the body. Claude returns the required skills, and each resume bullet is ranked by how many of those tags it shares.",
        changes: [
            {
                kind: "New",
                items: [
                    "CLI scores a job posting against resume skills",
                    "JavaScript-only postings are rendered before scoring",
                ],
            },
        ],
    },
    {
        id: "jobfinder-seen",
        projectId: "jobfinder",
        date: "August 5, 2026",
        devNotes:
            "Each run searches a list of role titles on Indeed and LinkedIn, drops duplicate URLs, and skips senior, staff, lead, and manager titles. Seen URLs are stored in a file. Discord gets a message only for a URL that is not already in that file.",
        changes: [
            {
                kind: "New",
                items: [
                    "Scheduled search roles",
                    "Discord alert for a posting that has not been seen",
                ],
            },
            {
                kind: "Update",
                items: [
                    "Senior, staff, lead, and manager titles are skipped",
                ],
            },
        ],
    },
    {
        id: "stamps-weight",
        projectId: "stamps",
        date: "Jul 29, 2026",
        devNotes:
            "Weight up to 3.5 oz starts with one Forever stamp, or the non-machinable rate when that option is checked. Each ounce past the first adds another stamp. The API asks USPS for the metered letter rate on that same weight so the two totals can sit side by side.",
        changes: [
            {
                kind: "New",
                items: [
                    "Postage for a letter by weight, including non-machinable",
                    "Retail stamp total next to the USPS metered price",
                ],
            },
        ],
    },
    {
        id: "shortener-redirect",
        projectId: "shortener",
        date: "Apr 30, 2026",
        devNotes:
            "The short code is random bytes, encoded so it is safe in a URL. Save writes the code and the original URL to PostgreSQL. A visit looks up that code and redirects. An unknown code is a 404.",
        changes: [
            {
                kind: "New",
                items: [
                    "Short code stored with the original URL",
                    "Visiting the short code redirects to the original",
                ],
            },
        ],
    },
    {
        id: "logs-alerts",
        projectId: "logs",
        date: "April 9, 2026",
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
         
        ],
    },
]
