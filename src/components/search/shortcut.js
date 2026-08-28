// Cmd+K on macOS, Ctrl+K everywhere else — and never while someone is typing.

const TYPING_TAGS = new Set([`INPUT`, `TEXTAREA`, `SELECT`])

function isTyping(target) {
  if (!target) return false
  return Boolean(target.isContentEditable) || TYPING_TAGS.has(target.tagName)
}

function isSearchShortcut(event) {
  if (!event) return false
  if (String(event.key || ``).toLowerCase() !== `k`) return false
  if (!event.metaKey && !event.ctrlKey) return false
  return !isTyping(event.target)
}

module.exports = { isSearchShortcut }
