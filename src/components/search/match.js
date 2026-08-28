// Client-side search over post frontmatter. Pure functions only, so this file
// stays runnable under `node --test` (see match.test.js).

const MAX_POSTS = 8
const MAX_TAGS = 6

// Lower is better. A term found in the title outranks one found only in the tags,
// which outranks one found only in the description.
const TIER_TITLE = 0
const TIER_TAGS = 1
const TIER_DESCRIPTION = 2
const TIER_NONE = Infinity

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
}

function parseQuery(query) {
  return String(query || ``)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
}

function toTime(date) {
  const time = Date.parse(date)
  return Number.isNaN(time) ? 0 : time
}

function tierFor(term, { title, tags, description }) {
  if (title.includes(term)) return TIER_TITLE
  if (tags.includes(term)) return TIER_TAGS
  if (description.includes(term)) return TIER_DESCRIPTION
  return TIER_NONE
}

function scorePost(post, terms) {
  const fields = {
    title: String(post.title || ``).toLowerCase(),
    tags: (post.tags || []).join(` `).toLowerCase(),
    description: String(post.description || ``).toLowerCase(),
  }

  let score = 0
  for (const term of terms) {
    const tier = tierFor(term, fields)
    if (tier === TIER_NONE) return TIER_NONE
    score += tier
  }
  return score
}

function searchPosts(posts, query) {
  const terms = parseQuery(query)
  if (terms.length === 0) return []

  return (posts || [])
    .map(post => ({ post, score: scorePost(post, terms) }))
    .filter(({ score }) => score !== TIER_NONE)
    .sort((a, b) => a.score - b.score || toTime(b.post.date) - toTime(a.post.date))
    .slice(0, MAX_POSTS)
    .map(({ post }) => post)
}

function searchTags(tags, query) {
  const terms = parseQuery(query)
  if (terms.length === 0) return []

  return (tags || [])
    .filter(tag => {
      const name = String(tag.fieldValue || ``).toLowerCase()
      return terms.every(term => name.includes(term))
    })
    .sort(
      (a, b) =>
        (b.totalCount || 0) - (a.totalCount || 0) ||
        String(a.fieldValue).localeCompare(String(b.fieldValue))
    )
    .slice(0, MAX_TAGS)
}

// Splits text into consecutive segments, flagging the ones that matched a term,
// so the caller can wrap them in <mark>.
function splitByTerms(text, terms) {
  const string = String(text == null ? `` : text)
  const list = (terms || []).filter(Boolean)
  if (!string) return []
  if (list.length === 0) return [{ text: string, match: false }]

  const pattern = list
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join(`|`)
  const matcher = new RegExp(`(${pattern})`, `gi`)

  const segments = []
  let cursor = 0
  let found
  while ((found = matcher.exec(string)) !== null) {
    if (found[0].length === 0) {
      matcher.lastIndex += 1
      continue
    }
    if (found.index > cursor) {
      segments.push({ text: string.slice(cursor, found.index), match: false })
    }
    segments.push({ text: found[0], match: true })
    cursor = found.index + found[0].length
  }
  if (cursor < string.length) {
    segments.push({ text: string.slice(cursor), match: false })
  }

  return segments.length > 0 ? segments : [{ text: string, match: false }]
}

module.exports = { parseQuery, searchPosts, searchTags, splitByTerms }
