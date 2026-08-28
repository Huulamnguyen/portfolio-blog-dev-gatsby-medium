// Resolves a tool label to a Simple Icons slug. Pure, so it can be tested
// without pulling in react-icons.

const normalise = value =>
  String(value == null ? `` : value)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ``)

// Labels whose slug differs from the normalised name, plus the Shopify family:
// Hydrogen and the Storefront API have no marks of their own.
const ALIASES = {
  nextjs: `nextdotjs`,
  next: `nextdotjs`,
  nodejs: `nodedotjs`,
  node: `nodedotjs`,
  expressjs: `express`,
  hydrogen: `shopify`,
  shopifyhydrogen: `shopify`,
  shopifyapi: `shopify`,
  storefrontapi: `shopify`,
  adminapi: `shopify`,
  oxygen: `shopify`,
  aws: `amazonaws`,
  awscloud: `amazonaws`,
  rubyonrails: `rubyonrails`,
  rails: `rubyonrails`,
  postgres: `postgresql`,
  materialui: `materialdesign`,
  mui: `materialdesign`,
  sklearn: `scikitlearn`,
  reactjs: `react`,
}

// Every slug we actually ship an icon for.
const KNOWN = new Set([
  `react`, `nextdotjs`, `nodedotjs`, `express`, `shopify`, `graphql`,
  `typescript`, `javascript`, `python`, `git`, `github`, `gitlab`,
  `tailwindcss`, `prisma`, `mongodb`, `mysql`, `postgresql`, `rubyonrails`,
  `redux`, `mobx`, `bootstrap`, `materialdesign`, `docker`, `amazonaws`,
  `jest`, `jira`, `numpy`, `pandas`, `scikitlearn`, `tensorflow`, `keras`,
  `pytorch`, `scipy`, `jupyter`, `plotly`,
])

function iconKeyFor(label) {
  const key = normalise(label)
  if (!key) return null
  const resolved = ALIASES[key] || key
  return KNOWN.has(resolved) ? resolved : null
}

// Post tags double as categories; these describe the work, not the toolchain.
const CATEGORY_TAGS = new Set([`project`, `projects`, `blog`, `tutorial`])

function isCategoryTag(tag) {
  return CATEGORY_TAGS.has(normalise(tag))
}

module.exports = { iconKeyFor, isCategoryTag, normalise }
