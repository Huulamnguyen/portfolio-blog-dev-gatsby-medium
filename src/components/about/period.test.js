const test = require("node:test")
const assert = require("node:assert/strict")

const { startYear, isCurrent } = require("./period")

test("startYear pulls the year the entry began", () => {
  assert.equal(startYear("JANUARY 2024 - PRESENT"), "2024")
  assert.equal(startYear("DECEMBER 2021 - APRIL 2022"), "2021")
})

test("startYear takes the first year, not the last", () => {
  assert.equal(startYear("JANUARY 2020 - DECEMBER 2020"), "2020")
  assert.equal(startYear("MAY 2019 - JUNE 2023"), "2019")
})

test("startYear returns empty string when there is no year", () => {
  assert.equal(startYear("SOMEDAY - PRESENT"), "")
  assert.equal(startYear(""), "")
  assert.equal(startYear(undefined), "")
})

test("isCurrent is true only for an ongoing period", () => {
  assert.equal(isCurrent("JANUARY 2024 - PRESENT"), true)
  assert.equal(isCurrent("january 2024 - present"), true)
  assert.equal(isCurrent("DECEMBER 2021 - APRIL 2022"), false)
})

test("isCurrent handles missing input", () => {
  assert.equal(isCurrent(""), false)
  assert.equal(isCurrent(undefined), false)
})
