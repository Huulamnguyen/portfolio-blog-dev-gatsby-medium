import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTabs from "../components/nav/PageTabs"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import StackDiagram from "../components/home/StackDiagram"
import ResearchTabs from "../components/home/ResearchTabs"
import StoreShowcase from "../components/home/StoreShowcase"
import ThemeCompare from "../components/home/ThemeCompare"
import Results from "../components/home/Results"
import { featured } from "../data/projects"
import { profile } from "../data/resume"
import TechChips from "../components/TechChips"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import LaunchIcon from "@mui/icons-material/Launch"

const Eyebrow = ({ children }) => (
  <Typography
    variant="body2"
    sx={{
      fontSize: `11px !important`,
      letterSpacing: `0.12em`,
      textTransform: `uppercase`,
      fontWeight: 600,
      color: `text.disabled`,
    }}
  >
    {children}
  </Typography>
)

const HomePage = ({ location }) => (
  <Layout location={location} title="Lam Nguyen">
    <Seo title={`Lam Nguyen — ${profile.role}`} />
    <NoScriptReveal />
    <Container
      maxWidth="string"
      disableGutters
      sx={{
        maxWidth: `692px`,
        display: `flex`,
        flexDirection: `column`,
        gap: `3rem`,
        "@media (max-width: 600px)": { gap: `2.5rem`, px: `1.5rem` },
      }}
    >
      <PageTabs pathname={location?.pathname} />

      {/* Hero — the claim, next to the thing it is about */}
      <Reveal component="header">
        <Eyebrow>Currently building</Eyebrow>
        <Typography
          variant="h1"
          sx={{
            mt: 1.5,
            fontSize: `34px !important`,
            lineHeight: 1.2,
            letterSpacing: `-0.02em`,
            fontWeight: 600,
            color: `text.primary`,
            "@media (max-width: 600px)": { fontSize: `27px !important` },
          }}
        >
          ANS doesn&rsquo;t run a theme.
          <br />
          It runs a storefront I built.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: `text.secondary`, lineHeight: 1.8 }}
        >
          I took a Shopify store off a pre-built Liquid theme and rebuilt the
          whole front end on Hydrogen, React and the Storefront API — so the
          routing, the rendering and the shopping experience are code I own
          rather than settings I configure.
        </Typography>

        <Box sx={{ display: `flex`, gap: 1.5, mt: 3, flexWrap: `wrap` }}>
          <Button
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            disableElevation
            endIcon={<LaunchIcon />}
            sx={{
              borderRadius: `2rem`,
              textTransform: `none`,
              fontWeight: 400,
              px: 2.5,
              backgroundColor: `text.postBody`,
              color: `background.alt`,
              "&:hover": { backgroundColor: `text.primary` },
            }}
          >
            Visit the store
          </Button>
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: `2rem`,
              textTransform: `none`,
              fontWeight: 400,
              px: 2.5,
              color: `text.primary`,
              borderColor: `divider`,
              "&:hover": { borderColor: `text.disabled` },
            }}
          >
            See all projects
          </Button>
        </Box>
      </Reveal>

      {/* The product itself */}
      <Box>
        <StoreShowcase />
        <Box sx={{ mt: 5 }}>
          <Eyebrow>Built with</Eyebrow>
          <TechChips items={featured.stack} sx={{ mt: 1.25 }} />
        </Box>
      </Box>

      {/* Signature — what actually changed */}
      <Box component="section">
        <Reveal>
          <Eyebrow>What changed</Eyebrow>
          <Typography
            variant="h2"
            sx={{
              mt: 1,
              mb: 3,
              fontSize: `20px !important`,
              fontWeight: 600,
              letterSpacing: `-0.01em`,
              color: `text.primary`,
            }}
          >
            A theme you configure, versus a storefront you write
          </Typography>
        </Reveal>
        <Box sx={{ mb: 5 }}>
          <ThemeCompare />
        </Box>
        <StackDiagram />
        <Box sx={{ mt: 5 }}>
          <Results />
        </Box>
      </Box>

      <Box component="section">
        <Reveal>
          <Eyebrow>Published research</Eyebrow>
          <Typography
            variant="h2"
            sx={{
              mt: 1,
              mb: 3,
              fontSize: `20px !important`,
              fontWeight: 600,
              letterSpacing: `-0.01em`,
              color: `text.primary`,
            }}
          >
            Continuous authentication, in one second instead of sixty
          </Typography>
        </Reveal>
        <ResearchTabs />
      </Box>

      <Reveal>
        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            gap: 2,
            flexWrap: `wrap`,
            pt: 4,
            borderTop: `1px solid`,
            borderColor: `divider`,
          }}
        >
          <Typography variant="body2" sx={{ color: `text.secondary` }}>
            {featured.next}
          </Typography>
          <MuiLink
            component={Link}
            to="/projects"
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
            See all projects
            <ArrowForwardIcon sx={{ fontSize: `16px` }} />
          </MuiLink>
        </Box>
      </Reveal>
    </Container>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
