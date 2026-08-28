import * as React from "react"

import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"

import {
  SiShopify,
  SiReact,
  SiGraphql,
  SiPython,
  SiGit,
  SiGithub,
  SiTypescript,
} from "react-icons/si"

// Hydrogen has no mark of its own — it is Shopify's React framework, so it
// carries the Shopify glyph with its own label rather than a invented logo.
const TOOLS = [
  { label: `Hydrogen`, Icon: SiShopify, note: `Shopify's React storefront framework` },
  { label: `React`, Icon: SiReact, note: `React` },
  { label: `Shopify API`, Icon: SiShopify, note: `Storefront and Admin APIs` },
  { label: `GraphQL`, Icon: SiGraphql, note: `GraphQL` },
  { label: `TypeScript`, Icon: SiTypescript, note: `TypeScript` },
  { label: `Python`, Icon: SiPython, note: `Python` },
  { label: `Git`, Icon: SiGit, note: `Git` },
  { label: `GitHub`, Icon: SiGithub, note: `GitHub` },
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
      <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 0.75 }}>
        {TOOLS.map(({ label, Icon, note }) => (
          <Tooltip key={label} title={note} arrow placement="top">
            <Box
              sx={{
                display: `inline-flex`,
                alignItems: `center`,
                gap: 0.65,
                px: 1,
                py: 0.45,
                borderRadius: `6px`,
                border: `1px solid`,
                borderColor: `divider`,
                color: `text.primary`,
                fontSize: `12px`,
                lineHeight: 1,
                transition: `border-color 200ms ease, background-color 200ms ease`,
                "&:hover": {
                  borderColor: `primary.main`,
                  backgroundColor: `action.hover`,
                },
              }}
            >
              <Icon size={13} aria-hidden />
              {label}
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}
