import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


// import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
// import Link from "@mui/material/Link"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import IconButton from "@mui/material/IconButton"
// import LinkIcon from '@mui/icons-material/Link';
import { HiLink } from "react-icons/hi"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaRegIdCard } from "react-icons/fa"

// import { GiWeightLiftingUp } from "react-icons/gi"



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
  twitter: {
    name: "Twitter",
    desc: "@liamdev5",
    url: "https://twitter.com/liamdev5",
    icon: <FaTwitter />,
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
    desc: "My Skills, Education, Experience and more",
    url: "https://resume.io/r/gNzy8XZVB",
    icon: <FaRegIdCard />,
  }
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
          <HiLink  fontSize={20}/>
        </IconButton>
        {"Connect Me"}
      </Box>
      }
    >
      <Seo title={"My social media links"} />
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
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
            value={2}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "text.primary",
                height: "1px",
              },
            }}
          >
            <Tab
              label="Blog"
              active
              component="a"
              href="/"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="Resume"
              active
              component="a"
              href="/resume"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="Connect Me"
              component="a"
              href="/links"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
          </Tabs>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.keys(profiles).map(key => {
            const profile = profiles[key]
            return (
              <Button
                key={profile.name}
                href={profile.url}
                target="_blank"
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
