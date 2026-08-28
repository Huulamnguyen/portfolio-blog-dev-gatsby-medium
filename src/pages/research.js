import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTabs from "../components/nav/PageTabs"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import TechChips from "../components/TechChips"
import { papers } from "../data/research"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import LaunchIcon from "@mui/icons-material/Launch"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"

const Eyebrow = ({ children, accent }) => (
  <Typography
    variant="body2"
    sx={{
      fontSize: `11px !important`,
      letterSpacing: `0.12em`,
      textTransform: `uppercase`,
      fontWeight: 600,
      color: accent ? `primary.main` : `text.disabled`,
    }}
  >
    {children}
  </Typography>
)

// The paper's headline result, as the two numbers it turns on.
const MetricPair = ({ metric }) => (
  <Box
    sx={{
      mt: 3,
      borderRadius: `12px`,
      border: `1px solid`,
      borderColor: `divider`,
      overflow: `hidden`,
    }}
  >
    <Box sx={{ px: 2.5, pt: 2 }}>
      <Eyebrow>{metric.label}</Eyebrow>
    </Box>
    <Box
      sx={{
        display: `flex`,
        flexDirection: { xs: `column`, sm: `row` },
        gap: { xs: 2, sm: 0 },
        p: 2.5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: `text.disabled`, fontSize: `13px` }}
        >
          {metric.baselineLabel}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: `26px`,
            fontWeight: 600,
            lineHeight: 1.1,
            color: `text.disabled`,
            fontVariantNumeric: `tabular-nums`,
          }}
        >
          {metric.baseline}
        </Typography>
      </Box>
      <Box
        aria-hidden
        sx={{
          alignSelf: `center`,
          px: 2,
          color: `text.disabled`,
          display: { xs: `none`, sm: `block` },
        }}
      >
        →
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: `primary.main`, fontSize: `13px`, fontWeight: 600 }}
        >
          {metric.resultLabel}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: `26px`,
            fontWeight: 600,
            lineHeight: 1.1,
            color: `text.primary`,
            fontVariantNumeric: `tabular-nums`,
          }}
        >
          {metric.result}
        </Typography>
      </Box>
    </Box>
  </Box>
)

const Authors = ({ paper }) => (
  <Typography
    variant="body2"
    sx={{ color: `text.disabled`, fontSize: `13px`, lineHeight: 1.7 }}
  >
    {paper.authors.map((name, i) => (
      <React.Fragment key={name}>
        {i > 0 && `, `}
        <Box
          component="span"
          sx={
            name === paper.me
              ? { color: `text.primary`, fontWeight: 600 }
              : undefined
          }
        >
          {name}
        </Box>
      </React.Fragment>
    ))}
  </Typography>
)

const ReadOnIeee = ({ url, size = `14px` }) => (
  <MuiLink
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    underline="none"
    sx={{
      display: `inline-flex`,
      alignItems: `center`,
      gap: 0.5,
      color: `primary.main`,
      fontSize: size,
      borderBottom: `1px solid transparent`,
      transition: `border-color 200ms ease`,
      "&:hover": { borderColor: `primary.main` },
    }}
  >
    Read it on IEEE Xplore
    <LaunchIcon sx={{ fontSize: `14px` }} />
  </MuiLink>
)

const ResearchPage = ({ location }) => {
  const [lead, ...rest] = papers

  return (
    <Layout
      location={location}
      title={
        <Box sx={{ display: `flex`, alignItems: `center` }}>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              backgroundColor: `action.selected`,
              color: `text.primary`,
            }}
          >
            <ScienceOutlinedIcon fontSize="small" />
          </IconButton>
          Research
        </Box>
      }
    >
      <Seo title="Research" />
      <NoScriptReveal />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: `692px`,
          display: `flex`,
          flexDirection: `column`,
          gap: `2.5rem`,
          "@media (max-width: 600px)": { gap: `2rem`, px: `1.5rem` },
        }}
      >
        <PageTabs pathname={location?.pathname} />

        <Box component="section" id={lead.slug}>
          <Reveal>
            <Eyebrow accent>
              {lead.role} · {lead.venueShort} · {lead.year}
            </Eyebrow>
            <Typography
              variant="h1"
              sx={{
                mt: 1.5,
                fontSize: `26px !important`,
                lineHeight: 1.25,
                letterSpacing: `-0.01em`,
                fontWeight: 600,
                color: `text.primary`,
                "@media (max-width: 600px)": { fontSize: `22px !important` },
              }}
            >
              {lead.title}
            </Typography>
            <Box sx={{ mt: 1.5 }}>
              <Authors paper={lead} />
            </Box>
            <Typography
              variant="body2"
              sx={{ mt: 0.5, color: `text.disabled`, fontSize: `13px` }}
            >
              {lead.venue} · doi:{lead.doi}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <ReadOnIeee url={lead.url} />
            </Box>
          </Reveal>

          <Reveal delay={70}>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                pl: 2,
                borderLeft: `2px solid`,
                borderColor: `primary.main`,
                color: `text.primary`,
                lineHeight: 1.8,
              }}
            >
              {lead.problem}
            </Typography>
          </Reveal>

          <Reveal delay={110}>
            <MetricPair metric={lead.metric} />
          </Reveal>

          <Reveal delay={140}>
            <Box sx={{ mt: 4 }}>
              <Eyebrow>What we did</Eyebrow>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: `text.primary`, lineHeight: 1.8 }}
              >
                {lead.approach}
              </Typography>
            </Box>
          </Reveal>

          <Reveal delay={170}>
            <Box sx={{ mt: 4 }}>
              <Eyebrow>Findings</Eyebrow>
              <Box
                component="ul"
                sx={{
                  mt: 1.5,
                  mb: 0,
                  pl: 0,
                  listStyle: `none`,
                  display: `flex`,
                  flexDirection: `column`,
                  gap: 1.25,
                }}
              >
                {lead.findings.map(point => (
                  <Typography
                    key={point}
                    component="li"
                    variant="body2"
                    sx={{
                      position: `relative`,
                      pl: 2.25,
                      color: `text.primary`,
                      lineHeight: 1.75,
                      "&::before": {
                        content: `""`,
                        position: `absolute`,
                        left: 0,
                        top: `0.7em`,
                        width: `6px`,
                        height: `1px`,
                        backgroundColor: `text.disabled`,
                      },
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={200}>
            <Box sx={{ mt: 4 }}>
              <Eyebrow>Keywords</Eyebrow>
              <TechChips items={lead.keywords} sx={{ mt: 1.25 }} />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Eyebrow>Worked in</Eyebrow>
              <TechChips items={lead.tools} sx={{ mt: 1.25 }} />
            </Box>
          </Reveal>
        </Box>

        {rest.length > 0 && (
          <Box component="section">
            <Reveal>
              <Typography
                variant="h2"
                sx={{
                  fontSize: `13px !important`,
                  letterSpacing: `0.12em`,
                  textTransform: `uppercase`,
                  fontWeight: 600,
                  color: `text.primary`,
                  pb: 1,
                  mb: 3,
                  borderBottom: `1px solid`,
                  borderColor: `divider`,
                }}
              >
                Also published
              </Typography>
            </Reveal>
            {rest.map((paper, i) => (
              <Reveal key={paper.slug} delay={i * 80}>
                <Box
                  id={paper.slug}
                  sx={{
                    p: 2.5,
                    borderRadius: `12px`,
                    border: `1px solid`,
                    borderColor: `divider`,
                  }}
                >
                  <Eyebrow accent>
                    {paper.role} · {paper.venueShort} · {paper.year}
                  </Eyebrow>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.75,
                      color: `text.primary`,
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {paper.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, color: `text.disabled`, fontSize: `13px` }}
                  >
                    {paper.venue}
                    {paper.detail ? ` · ${paper.detail}` : ``}
                  </Typography>
                  <Box sx={{ mt: 1.5 }}>
                    <ReadOnIeee url={paper.url} size="13px" />
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default ResearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
