import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageTabs from "../components/nav/PageTabs"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import Seo from "../components/seo"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import IconButton from "@mui/material/IconButton"
import { HiLink } from "react-icons/hi"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaKaggle } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaRegIdCard } from "react-icons/fa"

const profiles = {
  github: {
    name: "GitHub",
    desc: "My open-source projects",
    url: "https://github.com/Huulamnguyen",
    icon: <FaGithub />,
  },
  medium: {
    name: "Medium",
    desc: "I share my tech journey blogs",
    url: "https://medium.com/@liamdev",
    icon: <FaMedium />,
  },
  kaggle: {
    name: "Kaggle",
    desc: "My data science projects",
    url: "https://www.kaggle.com/lamnguyen95",
    icon: <FaKaggle />,
  },
  linkedin: {
    name: "LinkedIn",
    desc: "My professional profile",
    url: "https://www.linkedin.com/in/huulamnguyen/",
    icon: <FaLinkedin />,
  },
  instagram: {
    name: "Instagram",
    desc: "@L.A.M_N.G",
    url: "https://www.instagram.com/l.a.m_n.g/",
    icon: <FaInstagram />,
  },
  Resume: {
    name: "Resume",
    desc: "Skills, Education, Experience",
    url: "https://docs.google.com/document/d/1-JLziUE-TpLsI4EVBPwiEOlSy7nBNDapYvfqL0kYkng/edit?usp=sharing",
    icon: <FaRegIdCard />,
  },
}

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout
      location={location}
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              backgroundColor: "action.selected",
              color: "text.primary",
            }}
          >
            <HiLink fontSize={20} />
          </IconButton>
          {"Connect Me"}
        </Box>
      }
    >
      <Seo title={"My social media links"} />
      <NoScriptReveal />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
        <PageTabs pathname={location?.pathname} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.keys(profiles).map((key, i) => {
            const profile = profiles[key]
            return (
              <Reveal key={profile.name} delay={i * 70}>
                <Button
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                fullWidth
                size="large"
                endIcon={profile.icon}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderColor: "text.disabled",
                  borderRadius: 6,
                  color: "text.primary",
                  transition: theme =>
                    theme.transitions.create(
                      ["border-color", "background-color", "transform"],
                      { duration: 200 }
                    ),
                  "& .MuiButton-endIcon": {
                    transition: "transform 220ms cubic-bezier(0.16, 1, 0.3, 1)",
                  },
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "action.hover",
                    transform: "translateX(4px)",
                  },
                  "&:hover .MuiButton-endIcon": { transform: "scale(1.15)" },
                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                    "&:hover": { transform: "none" },
                    "& .MuiButton-endIcon": { transition: "none" },
                    "&:hover .MuiButton-endIcon": { transform: "none" },
                  },
                }}
              >
                {profile.name}
                {profile.desc && (
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "none", color: "text.disabled" }}
                  >
                    {profile.desc}
                  </Typography>
                )}
                </Button>
              </Reveal>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
