import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import { Timeline, TimelineItem } from "../components/about/timeline"
import { profile, skills, experience, education } from "../data/resume"
import { startYear } from "../components/about/period"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import MuiLink from "@mui/material/Link"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Typography from "@mui/material/Typography"

import BackpackIcon from "@mui/icons-material/Backpack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import { FaCode } from "react-icons/fa"
import { FaStore } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { FaExclamationCircle } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { FaPython } from "react-icons/fa"

const SKILL_ICONS = {
  store: FaStore,
  python: FaPython,
  code: FaCode,
  database: FaDatabase,
  testing: FaExclamationCircle,
  git: FaGitSquare,
  tools: FaTools,
}

const NAV = [
  { label: `Project`, href: `/` },
  { label: `About`, href: `/about` },
  { label: `Connect Me`, href: `/links` },
]

const SectionHeading = ({ children }) => (
  <Box
    sx={{
      display: `flex`,
      alignItems: `baseline`,
      gap: 1.5,
      mb: 3,
      pb: 1,
      borderBottom: `1px solid`,
      borderColor: `divider`,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: `13px !important`,
        letterSpacing: `0.12em`,
        textTransform: `uppercase`,
        fontWeight: 600,
        color: `text.primary`,
      }}
    >
      {children}
    </Typography>
  </Box>
)

const SkillCard = ({ skill, delay }) => {
  const Icon = SKILL_ICONS[skill.icon]
  return (
    <Reveal delay={delay} sx={{ display: `flex`, gap: 1.5 }}>
      <Box
        aria-hidden
        sx={{
          flex: `0 0 auto`,
          width: 28,
          height: 28,
          borderRadius: `50%`,
          display: `grid`,
          placeItems: `center`,
          backgroundColor: `action.selected`,
          color: `text.primary`,
        }}
      >
        {Icon && <Icon size={14} />}
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: `14px !important`,
            letterSpacing: 0,
            fontWeight: 600,
            lineHeight: `28px`,
            color: `text.primary`,
          }}
        >
          {skill.label}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: `text.primary`, lineHeight: 1.7, mt: 0.25 }}
        >
          {skill.body}
        </Typography>
      </Box>
    </Reveal>
  )
}

// The year is a visible marker on the rail, so entries must run in date order.
const byNewest = entries =>
  [...entries].sort((a, b) => Number(startYear(b.period)) - Number(startYear(a.period)))

const AboutPage = ({ location }) => {
  const jobs = React.useMemo(() => byNewest(experience), [])
  const degrees = React.useMemo(() => byNewest(education), [])

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
            <BackpackIcon fontSize="small" />
          </IconButton>
          {`About`}
        </Box>
      }
    >
      <Seo title={`About me`} />
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
        <Box sx={{ width: `100%`, borderBottom: 1, borderColor: `divider` }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Section navigation"
            value={1}
            sx={{
              "& .MuiTabs-flexContainer": { gap: `1rem` },
              "& .MuiTabs-indicator": {
                backgroundColor: `text.primary`,
                height: `1px`,
              },
            }}
          >
            {NAV.map(item => (
              <Tab
                key={item.href}
                label={item.label}
                component="a"
                href={item.href}
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

        {/* Header */}
        <Reveal component="header">
          <Box sx={{ display: `flex`, gap: 2, alignItems: `center` }}>
            <Avatar
              alt={profile.name}
              src={profile.avatar}
              sx={{ width: 64, height: 64, backgroundColor: `divider` }}
            >
              LN
            </Avatar>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: `22px !important`,
                  letterSpacing: `-0.01em`,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: `text.primary`,
                }}
              >
                {profile.name}
              </Typography>
              <Typography variant="body2" sx={{ color: `text.disabled` }}>
                {profile.role} · {profile.location}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: `text.primary`, lineHeight: 1.8 }}
          >
            {profile.summary}
          </Typography>
        </Reveal>

        {/* Experience */}
        <Box component="section">
          <Reveal>
            <SectionHeading>Experience</SectionHeading>
          </Reveal>
          <Timeline>
            {jobs.map((entry, i) => (
              <TimelineItem
                key={`${entry.org}-${entry.title}`}
                entry={entry}
                isLast={i === jobs.length - 1}
                primary={i === 0}
              />
            ))}
          </Timeline>
        </Box>

        {/* Skills */}
        <Box component="section">
          <Reveal>
            <SectionHeading>What I work in</SectionHeading>
          </Reveal>
          <Box
            sx={{
              display: `grid`,
              gridTemplateColumns: { xs: `1fr`, sm: `1fr 1fr` },
              columnGap: 4,
              rowGap: 3,
            }}
          >
            {skills.map((skill, i) => (
              <SkillCard key={skill.label} skill={skill} delay={i * 70} />
            ))}
          </Box>
        </Box>

        {/* Education */}
        <Box component="section">
          <Reveal>
            <SectionHeading>Education</SectionHeading>
          </Reveal>
          <Timeline>
            {degrees.map((entry, i) => (
              <TimelineItem
                key={`${entry.org}-${entry.title}`}
                entry={entry}
                isLast={i === degrees.length - 1}
              />
            ))}
          </Timeline>
        </Box>

        {/* Resume */}
        <Reveal sx={{ pb: 2 }}>
          <MuiLink
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              gap: 1,
              px: 2,
              py: 1.25,
              borderRadius: `8px`,
              border: `1px solid`,
              borderColor: `divider`,
              color: `text.primary`,
              fontSize: `14px`,
              transition: `border-color 200ms ease, background-color 200ms ease`,
              "&:hover": {
                borderColor: `primary.main`,
                backgroundColor: `action.hover`,
              },
              "&:hover .about-cta-arrow": { transform: `translateX(3px)` },
            }}
          >
            Read the full résumé
            <ArrowForwardIcon
              className="about-cta-arrow"
              sx={{
                fontSize: `16px`,
                transition: `transform 200ms ease`,
                "@media (prefers-reduced-motion: reduce)": {
                  transition: `none`,
                },
              }}
            />
          </MuiLink>
        </Reveal>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
