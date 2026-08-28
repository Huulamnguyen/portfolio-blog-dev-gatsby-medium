import * as React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import TechChips from "./TechChips"

// Hydrogen and the Shopify APIs have no marks of their own; TechChips maps
// them onto the Shopify glyph rather than inventing logos.
const TOOLS = [
  `Hydrogen`,
  `React`,
  `Shopify API`,
  `GraphQL`,
  `TypeScript`,
  `Python`,
  `Git`,
  `GitHub`,
]

export default function TechBadges() {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: `11px !important`,
          letterSpacing: `0.1em`,
          textTransform: `uppercase`,
          fontWeight: 600,
          color: `text.disabled`,
          mb: 1.25,
        }}
      >
        Tools I build with
      </Typography>
      <TechChips items={TOOLS} />
    </Box>
  )
}
