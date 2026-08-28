import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import MuiLink from "@mui/material/Link"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Typography from "@mui/material/Typography"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import LaunchIcon from "@mui/icons-material/Launch"

import Reveal from "../about/reveal"
import MetricPair from "../research/MetricPair"
import { papers } from "../../data/research"

export default function ResearchTabs() {
  const [active, setActive] = React.useState(0)
  const paper = papers[active]

  return (
    <Reveal>
      <Box sx={{ borderBottom: 1, borderColor: `divider`, mb: 3 }}>
        <Tabs
          value={active}
          onChange={(event, next) => setActive(next)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Published research"
          sx={{
            "& .MuiTabs-flexContainer": { gap: `1rem` },
            "& .MuiTabs-indicator": {
              backgroundColor: `primary.main`,
              height: `2px`,
            },
          }}
        >
          {papers.map((item, i) => (
            <Tab
              key={item.slug}
              id={`research-tab-${i}`}
              aria-controls={`research-panel-${i}`}
              label={
                <Box sx={{ textAlign: `left` }}>
                  <Box component="span" sx={{ display: `block`, fontWeight: 600 }}>
                    {item.short}
                  </Box>
                  <Box
                    component="span"
                    sx={{ display: `block`, fontSize: `11px`, opacity: 0.7 }}
                  >
                    {item.venueShort} · {item.year}
                  </Box>
                </Box>
              }
              sx={{
                textTransform: `none`,
                alignItems: `flex-start`,
                minWidth: `60px`,
                px: 0,
                fontWeight: 400,
                "&.Mui-selected": { color: `text.primary` },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box
        role="tabpanel"
        id={`research-panel-${active}`}
        aria-labelledby={`research-tab-${active}`}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: `17px !important`,
            letterSpacing: 0,
            fontWeight: 600,
            lineHeight: 1.45,
            color: `text.primary`,
          }}
        >
          {paper.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 0.75, color: `text.disabled`, fontSize: `13px` }}
        >
          {paper.role} · {paper.venue}
        </Typography>

        {paper.metric && <MetricPair metric={paper.metric} />}

        <Typography
          variant="body2"
          sx={{ mt: 2.5, color: `text.primary`, lineHeight: 1.8 }}
        >
          {paper.findings[0]}
        </Typography>

        <Box sx={{ display: `flex`, gap: 2.5, flexWrap: `wrap`, mt: 2.5 }}>
          <MuiLink
            component={Link}
            to={`/research#${paper.slug}`}
            underline="none"
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              gap: 0.75,
              color: `text.primary`,
              fontSize: `14px`,
              borderBottom: `1px solid`,
              borderColor: `divider`,
              "&:hover": { borderColor: `primary.main` },
            }}
          >
            Read the findings
            <ArrowForwardIcon sx={{ fontSize: `16px` }} />
          </MuiLink>
          <MuiLink
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              gap: 0.5,
              color: `primary.main`,
              fontSize: `14px`,
              borderBottom: `1px solid transparent`,
              "&:hover": { borderColor: `primary.main` },
            }}
          >
            IEEE Xplore
            <LaunchIcon sx={{ fontSize: `14px` }} />
          </MuiLink>
        </Box>
      </Box>
    </Reveal>
  )
}
