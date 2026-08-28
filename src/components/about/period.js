// Helpers for the timeline rail: the year that labels an entry, and whether the
// entry is still running (the only dot that keeps pulsing).

function startYear(period) {
  const match = String(period || ``).match(/\b(19|20)\d{2}\b/)
  return match ? match[0] : ``
}

function isCurrent(period) {
  return /present/i.test(String(period || ``))
}

module.exports = { startYear, isCurrent }
