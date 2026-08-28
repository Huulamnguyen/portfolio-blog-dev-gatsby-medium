const test = require("node:test")
const assert = require("node:assert/strict")

const { parseQuery, searchPosts, searchTags, splitByTerms } = require("./match")

const posts = [
  {
    title: "Jobify Project a MERN job tracking application",
    description: "A mini project that applied MERN stack",
    date: "4/7/2023",
    tags: ["MERN", "Project", "React"],
    slug: "/jobify-project/",
  },
  {
    title: "Project Issue Tracker NextJS Full Stack Project",
    description: "A mordern Full-stack NextJS Application for issues",
    date: "10/19/2023",
    tags: ["NextJS", "Prisma", "Project"],
    slug: "/issue-tracker-nextjs/",
  },
  {
    title: "Understanding TypeScript",
    description: "Notes on the type system",
    date: "1/2/2022",
    tags: ["TypeScript"],
    slug: "/understanding-typescript/",
  },
]

const tags = [
  { fieldValue: "NextJS", totalCount: 1 },
  { fieldValue: "Project", totalCount: 2 },
  { fieldValue: "TypeScript", totalCount: 1 },
]

test("parseQuery splits on whitespace and lowercases", () => {
  assert.deepEqual(parseQuery("  MERN   Stack "), ["mern", "stack"])
})

test("parseQuery returns no terms for a blank query", () => {
  assert.deepEqual(parseQuery("   "), [])
})

test("searchPosts matches the title regardless of case", () => {
  const hits = searchPosts(posts, "jobify")
  assert.deepEqual(hits.map(p => p.slug), ["/jobify-project/"])
})

test("searchPosts requires every term to match somewhere", () => {
  assert.deepEqual(
    searchPosts(posts, "nextjs prisma").map(p => p.slug),
    ["/issue-tracker-nextjs/"]
  )
  assert.deepEqual(searchPosts(posts, "nextjs mongodb"), [])
})

test("searchPosts matches a tag that is absent from title and description", () => {
  assert.deepEqual(
    searchPosts(posts, "typescript").map(p => p.slug),
    ["/understanding-typescript/"]
  )
})

test("searchPosts ranks a title match above a description-only match", () => {
  const hits = searchPosts(posts, "mordern")
  assert.deepEqual(hits.map(p => p.slug), ["/issue-tracker-nextjs/"])

  const ranked = searchPosts(posts, "project")
  assert.equal(ranked[0].slug, "/issue-tracker-nextjs/")
})

test("searchPosts breaks ties by newest date first", () => {
  const hits = searchPosts(posts, "project")
  const both = hits.map(p => p.slug)
  assert.ok(both.indexOf("/issue-tracker-nextjs/") < both.indexOf("/jobify-project/"))
})

test("searchPosts returns nothing for a blank query", () => {
  assert.deepEqual(searchPosts(posts, ""), [])
  assert.deepEqual(searchPosts(posts, "   "), [])
})

test("searchPosts caps results at 8", () => {
  const many = Array.from({ length: 20 }, (_, i) => ({
    title: `Post about widgets ${i}`,
    description: "",
    date: "1/1/2024",
    tags: [],
    slug: `/widgets-${i}/`,
  }))
  assert.equal(searchPosts(many, "widgets").length, 8)
})

test("searchTags matches tag names case-insensitively", () => {
  assert.deepEqual(
    searchTags(tags, "next").map(t => t.fieldValue),
    ["NextJS"]
  )
})

test("searchTags returns nothing for a blank query", () => {
  assert.deepEqual(searchTags(tags, ""), [])
})

test("searchTags caps results at 6", () => {
  const many = Array.from({ length: 20 }, (_, i) => ({
    fieldValue: `widget-${i}`,
    totalCount: 1,
  }))
  assert.equal(searchTags(many, "widget").length, 6)
})

test("splitByTerms marks the matched segments", () => {
  assert.deepEqual(splitByTerms("Jobify Project", ["project"]), [
    { text: "Jobify ", match: false },
    { text: "Project", match: true },
  ])
})

test("splitByTerms leaves text untouched when nothing matches", () => {
  assert.deepEqual(splitByTerms("Jobify Project", ["zzz"]), [
    { text: "Jobify Project", match: false },
  ])
})

test("splitByTerms handles regex metacharacters in terms", () => {
  assert.deepEqual(splitByTerms("C++ notes", ["c++"]), [
    { text: "C++", match: true },
    { text: " notes", match: false },
  ])
})
