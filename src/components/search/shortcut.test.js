const test = require("node:test")
const assert = require("node:assert/strict")

const { isSearchShortcut } = require("./shortcut")

const evt = (over = {}) => ({
  key: "k",
  metaKey: false,
  ctrlKey: false,
  target: { tagName: "DIV", isContentEditable: false },
  ...over,
})

test("Cmd+K opens search on macOS", () => {
  assert.equal(isSearchShortcut(evt({ metaKey: true })), true)
})

test("Ctrl+K opens search off macOS", () => {
  assert.equal(isSearchShortcut(evt({ ctrlKey: true })), true)
})

test("the shortcut is case-insensitive", () => {
  assert.equal(isSearchShortcut(evt({ key: "K", metaKey: true })), true)
})

test("k on its own does not open search", () => {
  assert.equal(isSearchShortcut(evt()), false)
})

test("a different key with the modifier does not open search", () => {
  assert.equal(isSearchShortcut(evt({ key: "j", metaKey: true })), false)
})

test("the shortcut is ignored while typing in a field", () => {
  for (const tagName of ["INPUT", "TEXTAREA", "SELECT"]) {
    assert.equal(
      isSearchShortcut(evt({ metaKey: true, target: { tagName, isContentEditable: false } })),
      false,
      `expected ${tagName} to swallow the shortcut`
    )
  }
})

test("the shortcut is ignored inside contenteditable", () => {
  assert.equal(
    isSearchShortcut(evt({ metaKey: true, target: { tagName: "DIV", isContentEditable: true } })),
    false
  )
})

test("a missing target does not throw", () => {
  assert.equal(isSearchShortcut({ key: "k", metaKey: true }), true)
})
