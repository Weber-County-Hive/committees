/* ============================================================
   Weber County Hive — Committees Board data
   ------------------------------------------------------------
   FIELDS
     id        unique slug, lowercase, no spaces
     name      full committee / body name
     short     badge text (keep to ~6 chars)
     chambers  structural line (mono, small)
     controls  what it has power over
     summary   the finding, in one or two sentences
     date      ISO "YYYY-MM-DD" — publication or last major update.
               Leave as "" if unknown; undated entries sort last
               and show no date chip.
     tags      array of lowercase strings, used by search + filter chips.
               Keep tags reusable across pages so the filter row stays short.
     tally     optional { help, mixed, harm, dead }
     page      filename of the case-file page
     status    "live" or anything else (renders "Coming soon")
   ============================================================ */

const COMMITTEES = [
  {
    id: "mida-project-areas",
    name: "MIDA — The Eight Project Areas",
    short: "MIDA",
    chambers: "8 project areas · 5 counties · $121.6M proposed",
    controls: "Where MIDA's money goes, and what each project area was allowed to become",
    summary: "An authority created to save an air force base now sends 46.8% of its proposed budget to a ski corridor and 0.13% to the two areas on an active installation. The same fifteen questions asked of all eight project areas, from MIDA's own budget, ordinances and agreements.",
    date: "2026-09-04",
    tags: ["mida", "tax increment", "data centers", "box elder", "land use", "water", "disclosure"],
    page: "weberhivecommitteemidaprojectareas.html",
    status: "live"
  },
  {
    id: "nrae",
    name: "Natural Resources, Agriculture & Environment",
    short: "NRAE",
    chambers: "House standing · Senate standing · Joint interim",
    controls: "Water rights, mining & minerals, energy siting, wildlife policy",
    summary: "One joint interim body plus House and Senate standing committees — the committee system that shapes every 2026 water, energy, and mining bill before the public sees a floor vote.",
    date: "",
    tags: ["legislature", "water", "energy", "mining", "wildlife"],
    tally: { help: 2, mixed: 2, harm: 4, dead: 3 },
    page: "weber-hive-committee-nrae.html",
    status: "live"
  },
  {
    id: "judiciary",
    name: "Judiciary",
    short: "JUD",
    chambers: "House standing · Senate standing · Joint interim",
    controls: "Court structure, judicial appointments, judicial transparency",
    summary: "The committee system that produced 2026's biggest restructuring of Utah's courts — Chief Justice selection, a new case-reassignment tool, and a real transparency win, all moving through the same two chairs.",
    date: "",
    tags: ["legislature", "courts", "transparency"],
    tally: { help: 1, mixed: 1, harm: 3, dead: 2 },
    page: "weber-hive-committee-judiciary.html",
    status: "live"
  },
  {
    id: "alpr-oversight",
    name: "ALPR Oversight",
    short: "ALPR",
    chambers: "Three committees · two chambers · three sessions",
    controls: "License-plate-reader surveillance, data retention, law-enforcement oversight",
    summary: "Three committees with ALPR jurisdiction since 2025, four reform bills in three sessions, zero became law — two of them killed the identical way, on the same day. 2026's newest privacy body follows the same shape.",
    date: "",
    tags: ["legislature", "surveillance", "privacy", "policing"],
    page: "weber-hive-committee-alpr-oversight.html",
    status: "live"
  },
  {
    id: "mida-board",
    name: "Military Installation Development Authority — Board",
    short: "MIDA",
    chambers: "Governor (5 seats) · Senate President (1) · House Speaker (1) · Nonvoting (1)",
    controls: "Zoning, bonding, and tax increment across MIDA project areas statewide",
    summary: "Seven voting seats, three tied to project geography with an automatic-vacancy rule — and one seat, the chairmanship, with no equivalent rule at all as its holder heads into a lost election.",
    date: "",
    tags: ["mida", "appointed officials", "tax increment", "land use"],
    page: "weber-hive-committee-mida-board.html",
    status: "live"
  },
  {
    id: "mida-disclosures",
    name: "COI of MIDA",
    short: "MIDA",
    chambers: "8 voting/nonvoting seats · 5 Public Infrastructure Districts · 2 Development Review Committees",
    controls: "Conflict-of-interest disclosure across MIDA's main board and its subsidiary bodies",
    summary: "Nine people, nine forms, five different disclosure regimes — one member's role is paid, another's identical role is unpaid, and the districts that make most of the granular decisions mostly file nothing at all.",
    date: "2026-08-26",
    tags: ["mida", "disclosure", "appointed officials", "conflicts of interest"],
    page: "weber-hive-committee-mida-disclosures.html",
    status: "live"
  },
  {
    id: "federalism",
    name: "Federalism Commission",
    short: "FED",
    chambers: "Senate interim · House interim · Joint body",
    controls: "Federal-state relations research, recommended legislation, national coordination infrastructure",
    summary: "A body established in 2013 was rebuilt across three 2025 bills into something with real machinery: a university-housed institute tasked by statute with building a 50-state network, a PR contract that helped fund an actual lawsuit, and a pipeline that routes every federal guidance letter received by any state agency to its chairs.",
    date: "",
    tags: ["legislature", "federalism", "public lands"],
    page: "weber-hive-committee-federalism.html",
    status: "live"
  },
  {
    id: "wfrc-wfedd",
    name: "Wasatch Front Regional Council / Economic Development District",
    short: "WFRC",
    chambers: "27-member Council · 25-seat WFEDD Strategy Committee",
    controls: "Regional transportation planning, federal economic strategy (CEDS), CDBG and TLC grant funding across six counties",
    summary: "A regional planning board of mostly sitting mayors and commissioners, and a second committee beside it with a formal seat for Zions Bank and an active real-estate broker who seconds its motions — the body that decides which local projects get written into the region's federal economic strategy.",
    date: "",
    tags: ["regional planning", "transportation", "grants", "appointed officials"],
    page: "weber-hive-committee-wfrc-wfedd.html",
    status: "live"
  }
];

/* ------------------------------------------------------------
   TEMPLATE — copy inside the array above to add a new case file.
   Delete the leading slashes and fill it in.

  {
    id: "economic-development",
    name: "Economic Development & Workforce Services",
    short: "EDWS",
    chambers: "House standing · Senate standing",
    controls: "GOED/GOEO, business incentives, workforce programs",
    summary: "…",
    date: "",                                   // "YYYY-MM-DD" or "" if unknown
    tags: ["legislature"],                      // lowercase, reuse existing tags where possible
    tally: { help: 0, mixed: 0, harm: 0, dead: 0 },
    page: "weber-hive-committee-economic-development.html",
    status: "planned"                           // "live" makes the card clickable
  },

   ------------------------------------------------------------ */
