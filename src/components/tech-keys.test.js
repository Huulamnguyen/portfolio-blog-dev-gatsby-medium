const test = require("node:test")
const assert = require("node:assert/strict")

const { iconKeyFor } = require("./tech-keys")

test("iconKeyFor matches a plain name case-insensitively", () => {
  assert.equal(iconKeyFor("React"), "react")
  assert.equal(iconKeyFor("react"), "react")
  assert.equal(iconKeyFor("PYTHON"), "python")
})

test("iconKeyFor ignores punctuation and spacing", () => {
  assert.equal(iconKeyFor("Next.js"), "nextdotjs")
  assert.equal(iconKeyFor("NextJS"), "nextdotjs")
  assert.equal(iconKeyFor("Node JS"), "nodedotjs")
  assert.equal(iconKeyFor("Tailwind CSS"), "tailwindcss")
  assert.equal(iconKeyFor("scikit-learn"), "scikitlearn")
})

test("Hydrogen and the Shopify APIs carry the Shopify mark", () => {
  assert.equal(iconKeyFor("Hydrogen"), "shopify")
  assert.equal(iconKeyFor("Shopify Hydrogen"), "shopify")
  assert.equal(iconKeyFor("Shopify API"), "shopify")
  assert.equal(iconKeyFor("Storefront API"), "shopify")
  assert.equal(iconKeyFor("Oxygen"), "shopify")
})

test("iconKeyFor returns null when no mark exists", () => {
  assert.equal(iconKeyFor("Matplotlib"), null)
  assert.equal(iconKeyFor("SVM"), null)
  assert.equal(iconKeyFor("Machine Learning"), null)
})

test("iconKeyFor handles missing input", () => {
  assert.equal(iconKeyFor(""), null)
  assert.equal(iconKeyFor(undefined), null)
  assert.equal(iconKeyFor(null), null)
})

test("isCategoryTag flags tags that are not tools", () => {
  const { isCategoryTag } = require("./tech-keys")
  assert.equal(isCategoryTag("Project"), true)
  assert.equal(isCategoryTag("project"), true)
  assert.equal(isCategoryTag("React"), false)
  assert.equal(isCategoryTag("MERN"), false)
})
