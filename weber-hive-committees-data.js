// Weber County Hive — Committees Board data file
// Add a new object to this array for each new committee case-file page.
// Do not edit weber-hive-committees-board.html directly to add a committee — edit this file only.

const COMMITTEES = [
  {
    id: "nrae",
    name: "Natural Resources, Agriculture & Environment",
    short: "NRAE",
    chambers: "House standing · Senate standing · Joint interim",
    controls: "Water rights, mining & minerals, energy siting, wildlife policy",
    summary: "One joint interim body plus House and Senate standing committees — the committee system that shapes every 2026 water, energy, and mining bill before the public sees a floor vote.",
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
    page: "weber-hive-committee-mida-board.html",
    status: "live"
  }
  // Next committee goes here, e.g.:
  // {
  //   id: "economic-development",
  //   name: "Economic Development & Workforce Services",
  //   short: "EDWS",
  //   chambers: "House standing · Senate standing",
  //   controls: "GOED/GOEO, business incentives, workforce programs",
  //   summary: "…",
  //   tally: { help: 0, mixed: 0, harm: 0, dead: 0 },
  //   page: "weber-hive-committee-economic-development.html",
  //   status: "planned"
  // }
];
