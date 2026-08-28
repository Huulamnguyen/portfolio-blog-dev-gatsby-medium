const test = require("node:test")
const assert = require("node:assert/strict")

const { splitEmphasis, isMetric } = require("./emphasis")

test("splitEmphasis marks text wrapped in double asterisks", () => {
  assert.deepEqual(splitEmphasis("targeting **<1.5s LCP** overall"), [
    { text: "targeting ", strong: false },
    { text: "<1.5s LCP", strong: true },
    { text: " overall", strong: false },
  ])
})

test("splitEmphasis handles emphasis at the start and end", () => {
  assert.deepEqual(splitEmphasis("**AOV** rose"), [
    { text: "AOV", strong: true },
    { text: " rose", strong: false },
  ])
  assert.deepEqual(splitEmphasis("rose to **$85**"), [
    { text: "rose to ", strong: false },
    { text: "$85", strong: true },
  ])
})

test("splitEmphasis handles several emphasised runs", () => {
  assert.deepEqual(splitEmphasis("**a** and **b**"), [
    { text: "a", strong: true },
    { text: " and ", strong: false },
    { text: "b", strong: true },
  ])
})

test("splitEmphasis returns one plain segment when there is no markup", () => {
  assert.deepEqual(splitEmphasis("no markup here"), [
    { text: "no markup here", strong: false },
  ])
})

test("splitEmphasis leaves an unmatched marker as literal text", () => {
  assert.deepEqual(splitEmphasis("2 ** 3 is eight"), [
    { text: "2 ** 3 is eight", strong: false },
  ])
})

test("splitEmphasis never emits empty segments", () => {
  assert.deepEqual(splitEmphasis("****"), [{ text: "****", strong: false }])
  assert.deepEqual(splitEmphasis(""), [])
  assert.deepEqual(splitEmphasis(undefined), [])
})

test("isMetric is true for emphasised runs carrying a figure", () => {
  assert.equal(isMetric("<1.5-second Largest Contentful Paint (LCP)"), true)
  assert.equal(isMetric("90.1% to 70–80%"), true)
  assert.equal(isMetric("5–20% improvement in AOV from $71.30 to $75–$85"), true)
})

test("isMetric is false for emphasised runs that only name things", () => {
  assert.equal(isMetric("Shopify Hydrogen, React, GraphQL, Storefront API, and Oxygen"), false)
  assert.equal(isMetric("product discovery, collection navigation"), false)
})

test("isMetric handles missing input", () => {
  assert.equal(isMetric(""), false)
  assert.equal(isMetric(undefined), false)
})
