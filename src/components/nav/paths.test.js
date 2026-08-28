const test = require("node:test")
const assert = require("node:assert/strict")

const { isSamePath } = require("./paths")

test("isSamePath ignores a trailing slash on either side", () => {
  assert.equal(isSamePath("/about/", "/about"), true)
  assert.equal(isSamePath("/about", "/about/"), true)
  assert.equal(isSamePath("/about/", "/about/"), true)
})

test("isSamePath matches the site root in either form", () => {
  assert.equal(isSamePath("/", "/"), true)
  assert.equal(isSamePath("", "/"), true)
})

test("isSamePath does not match a different route", () => {
  assert.equal(isSamePath("/projects/", "/about"), false)
  assert.equal(isSamePath("/", "/projects"), false)
})

test("isSamePath does not treat a prefix as a match", () => {
  assert.equal(isSamePath("/projects/hydrogen/", "/projects"), false)
})

test("isSamePath handles a missing pathname", () => {
  assert.equal(isSamePath(undefined, "/about"), false)
  assert.equal(isSamePath(null, "/"), true)
})
