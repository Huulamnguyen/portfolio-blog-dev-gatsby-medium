// Lightweight **bold** markup for résumé bullets, so the data file stays
// readable and the figures inside a sentence stay scannable.

const PATTERN = /\*\*([^*]+?)\*\*/g

function splitEmphasis(text) {
  const string = String(text == null ? `` : text)
  if (!string) return []

  const segments = []
  let cursor = 0
  let match
  PATTERN.lastIndex = 0
  while ((match = PATTERN.exec(string)) !== null) {
    if (match.index > cursor) {
      segments.push({ text: string.slice(cursor, match.index), strong: false })
    }
    segments.push({ text: match[1], strong: true })
    cursor = match.index + match[0].length
  }
  if (cursor < string.length) {
    segments.push({ text: string.slice(cursor), strong: false })
  }

  return segments.length > 0 ? segments : [{ text: string, strong: false }]
}

// An emphasised run that carries a figure is the part a hiring manager scans
// for, so it gets the accent; the rest is emphasised but stays in body colour.
function isMetric(text) {
  return /\d/.test(String(text == null ? `` : text))
}

module.exports = { splitEmphasis, isMetric }
