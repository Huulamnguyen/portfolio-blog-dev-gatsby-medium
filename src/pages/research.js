import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTabs from "../components/nav/PageTabs"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import TechChips from "../components/TechChips"
import Eyebrow from "../components/research/Eyebrow"
import MetricPair from "../components/research/MetricPair"
import { papers } from "../data/research"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import LaunchIcon from "@mui/icons-material/Launch"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"

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

const PaperSection = ({ paper, heading }) => (
  <Box component="section" id={paper.slug}>
    <Reveal>
      <Eyebrow accent>
        {paper.role} · {paper.venueShort} · {paper.year}
      </Eyebrow>
      <Typography
        variant={heading}
        component={heading}
        sx={{
          mt: 1.5,
          fontSize: `26px !important`,
          lineHeight: 1.25,
          letterSpacing: `-0.01em`,
          fontWeight: 600,
          color: `text.primary`,
          "@media (max-width: 600px)": { fontSize: `21px !important` },
        }}
      >
        {paper.title}
      </Typography>
      <Box sx={{ mt: 1.5 }}>
        <Authors paper={paper} />
      </Box>
      <Typography
        variant="body2"
        sx={{ mt: 0.5, color: `text.disabled`, fontSize: `13px` }}
      >
        {paper.venue}
        {paper.detail ? ` · ${paper.detail}` : ``}
        {paper.doi ? ` · doi:${paper.doi}` : ``}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <ReadOnIeee url={paper.url} />
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
        {paper.problem}
      </Typography>
    </Reveal>

    {paper.metric && (
      <Reveal delay={110}>
        <MetricPair metric={paper.metric} />
      </Reveal>
    )}

    <Reveal delay={140}>
      <Box sx={{ mt: 4 }}>
        <Eyebrow>What we did</Eyebrow>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: `text.primary`, lineHeight: 1.8 }}
        >
          {paper.approach}
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
          {paper.findings.map(point => (
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
        <TechChips items={paper.keywords} sx={{ mt: 1.25 }} />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Eyebrow>Worked in</Eyebrow>
        <TechChips items={paper.tools} sx={{ mt: 1.25 }} />
      </Box>
    </Reveal>
  </Box>
)

const ResearchPage = ({ location }) => (
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
        gap: `3.5rem`,
        "@media (max-width: 600px)": { gap: `3rem`, px: `1.5rem` },
      }}
    >
      <PageTabs pathname={location?.pathname} />
      {papers.map((paper, i) => (
        <React.Fragment key={paper.slug}>
          {i > 0 && <Box sx={{ borderTop: `1px solid`, borderColor: `divider` }} />}
          <PaperSection paper={paper} heading={i === 0 ? `h1` : `h2`} />
        </React.Fragment>
      ))}
    </Container>
  </Layout>
)

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
