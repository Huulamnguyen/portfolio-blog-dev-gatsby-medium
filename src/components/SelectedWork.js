import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import ArticleIcon from "@mui/icons-material/Article"
import LaunchIcon from "@mui/icons-material/Launch"
import { FaShopify } from "react-icons/fa"

import { featured } from "../data/projects"
import { experience } from "../data/resume"

const publication = experience.map(entry => entry.publication).find(Boolean)

const Mark = ({ children }) => (
  <Box
    aria-hidden
    sx={{
      flex: `0 0 auto`,
      width: 26,
      height: 26,
      mt: `2px`,
      borderRadius: `50%`,
      display: `grid`,
      placeItems: `center`,
      backgroundColor: `action.selected`,
      color: `text.primary`,
    }}
  >
    {children}
  </Box>
)

const Row = ({ children }) => (
  <Box sx={{ display: `flex`, gap: 1.5, alignItems: `flex-start` }}>{children}</Box>
)

const Eyebrow = ({ children }) => (
  <Typography
    variant="body2"
    sx={{
      fontSize: `11px !important`,
      letterSpacing: `0.1em`,
      textTransform: `uppercase`,
      fontWeight: 600,
      color: `text.disabled`,
    }}
  >
    {children}
  </Typography>
)

export default function SelectedWork() {
  return (
    <Box sx={{ display: `flex`, flexDirection: `column`, gap: 2.5 }}>
      <Typography
        variant="h3"
        sx={{
          color: `text.primary`,
          fontSize: `16px !important`,
          letterSpacing: 0,
          fontWeight: 500,
          lineHeight: `20px`,
        }}
      >
        Selected work
      </Typography>

      <Row>
        <Mark>
          <FaShopify size={14} />
        </Mark>
        <Box sx={{ minWidth: 0 }}>
          <Eyebrow>Hydrogen storefront</Eyebrow>
          <MuiLink
            component={Link}
            to="/projects"
            underline="none"
            sx={{
              display: `block`,
              mt: 0.25,
              color: `text.primary`,
              fontWeight: 600,
              fontSize: `14px`,
              lineHeight: 1.4,
              "&:hover": { color: `primary.main` },
            }}
          >
            {featured.title} — a custom storefront on Shopify Hydrogen
          </MuiLink>
          <MuiLink
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              gap: 0.4,
              mt: 0.5,
              color: `primary.main`,
              fontSize: `13px`,
              borderBottom: `1px solid transparent`,
              "&:hover": { borderColor: `primary.main` },
            }}
          >
            angelinanailsupply.com
            <LaunchIcon sx={{ fontSize: `12px` }} />
          </MuiLink>
        </Box>
      </Row>

      {publication && (
        <Row>
          <Mark>
            <ArticleIcon sx={{ fontSize: `14px` }} />
          </Mark>
          <Box sx={{ minWidth: 0 }}>
            <Eyebrow>Published research</Eyebrow>
            <MuiLink
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: `block`,
                mt: 0.25,
                color: `text.primary`,
                fontWeight: 600,
                fontSize: `14px`,
                lineHeight: 1.4,
                "&:hover": { color: `primary.main` },
              }}
            >
              {publication.title}
              <LaunchIcon sx={{ fontSize: `12px`, ml: 0.5, verticalAlign: `-1px` }} />
            </MuiLink>
            <Typography
              variant="body2"
              sx={{ mt: 0.5, color: `text.disabled`, fontSize: `12px` }}
            >
              {publication.venue}
            </Typography>
          </Box>
        </Row>
      )}
    </Box>
  )
}
