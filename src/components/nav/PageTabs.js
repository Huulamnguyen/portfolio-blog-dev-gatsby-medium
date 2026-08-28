import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

import { isSamePath } from "./paths"

export const PAGES = [
  { label: `Home`, to: `/` },
  { label: `Projects`, to: `/projects` },
  { label: `Research`, to: `/research` },
  { label: `About`, to: `/about` },
  { label: `Connect Me`, to: `/links` },
]

export default function PageTabs({ pathname }) {
  const active = PAGES.findIndex(page => isSamePath(pathname, page.to))

  return (
    <Box sx={{ width: `100%`, borderBottom: 1, borderColor: `divider` }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Site sections"
        value={active === -1 ? false : active}
        sx={{
          "& .MuiTabs-flexContainer": { gap: `1rem` },
          "& .MuiTabs-indicator": {
            backgroundColor: `text.primary`,
            height: `1px`,
          },
        }}
      >
        {PAGES.map(page => (
          <Tab
            key={page.to}
            label={page.label}
            component={Link}
            to={page.to}
            sx={{
              textTransform: `capitalize`,
              fontWeight: 400,
              minWidth: `60px`,
              "&.Mui-selected": { color: `text.primary` },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}
