import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTabs from "../components/nav/PageTabs"
import Reveal, { NoScriptReveal } from "../components/about/reveal"
import { featured } from "../data/projects"
import { experience } from "../data/resume"

import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import LaunchIcon from "@mui/icons-material/Launch"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import { FaShopify, FaReact } from "react-icons/fa"

const publication = experience
  .map(entry => entry.publication)
  .find(Boolean)

const SectionHeading = ({ children }) => (
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
    {children}
  </Typography>
)

const Card = ({ children, ...rest }) => (
  <Box
    sx={{
      borderRadius: `12px`,
      border: `1px solid`,
      borderColor: `divider`,
      overflow: `hidden`,
      transition: `border-color 200ms ease`,
      "&:hover": { borderColor: `text.disabled` },
    }}
    {...rest}
  >
    {children}
  </Box>
)

const ProjectsPage = ({ data, location }) => {
  const posts = data.allMdx.nodes

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
            <WorkOutlineIcon fontSize="small" />
          </IconButton>
          Projects
        </Box>
      }
    >
      <Seo title="Projects" />
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

        {/* Featured — the storefront */}
        <Box component="section">
          <Reveal>
            <SectionHeading>Featured</SectionHeading>
          </Reveal>
          <Reveal delay={60}>
            <Card>
              <MuiLink
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ display: `block`, lineHeight: 0 }}
              >
                <StaticImage
                  src="../images/ans/ans-desktop.png"
                  alt="The ANS storefront"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </MuiLink>
              <Box sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    display: `flex`,
                    alignItems: `center`,
                    gap: 1,
                    color: `text.primary`,
                  }}
                >
                  <FaShopify size={18} aria-hidden />
                  <FaReact size={16} aria-hidden />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: `17px !important`,
                      letterSpacing: 0,
                      fontWeight: 600,
                      color: `text.primary`,
                      ml: 0.5,
                    }}
                  >
                    {featured.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: `text.disabled`, mt: 0.5, fontSize: `13px` }}
                >
                  {featured.role} · {featured.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: `text.primary`, mt: 1.5, lineHeight: 1.8 }}
                >
                  {featured.tagline}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    mt: 2,
                    mb: 0,
                    pl: 0,
                    listStyle: `none`,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: 1,
                  }}
                >
                  {featured.highlights.map(point => (
                    <Typography
                      key={point}
                      component="li"
                      variant="body2"
                      sx={{
                        position: `relative`,
                        pl: 2.25,
                        color: `text.secondary`,
                        lineHeight: 1.7,
                        fontSize: `14px !important`,
                        "&::before": {
                          content: `""`,
                          position: `absolute`,
                          left: 0,
                          top: `0.65em`,
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

                <Box sx={{ display: `flex`, gap: 0.75, flexWrap: `wrap`, mt: 2 }}>
                  {featured.stack.map(item => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        borderRadius: `6px`,
                        backgroundColor: `action.selected`,
                        color: `text.primary`,
                        fontSize: `12px`,
                      }}
                    />
                  ))}
                </Box>

                <MuiLink
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: `inline-flex`,
                    alignItems: `center`,
                    gap: 0.5,
                    mt: 2.5,
                    color: `primary.main`,
                    fontSize: `14px`,
                    borderBottom: `1px solid transparent`,
                    "&:hover": { borderColor: `primary.main` },
                  }}
                >
                  angelinanailsupply.com
                  <LaunchIcon sx={{ fontSize: `14px` }} />
                </MuiLink>
              </Box>
            </Card>
          </Reveal>
        </Box>

        {/* Case studies written up as posts */}
        <Box component="section">
          <Reveal>
            <SectionHeading>Projects</SectionHeading>
          </Reveal>
          <Box
            sx={{
              display: `grid`,
              gridTemplateColumns: { xs: `1fr`, sm: `1fr 1fr` },
              gap: 2.5,
            }}
          >
            {posts.map((post, i) => {
              const cover = getImage(post.frontmatter.featuredImage)
              return (
                <Reveal key={post.id} delay={i * 80} sx={{ height: `100%` }}>
                  <Card sx={{ height: `100%` }}>
                    <Link
                      to={post.fields.slug}
                      style={{ textDecoration: `none`, display: `block` }}
                    >
                      {cover && (
                        <GatsbyImage
                          image={cover}
                          alt={post.frontmatter.title}
                        />
                      )}
                      <Box sx={{ p: 2 }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: `15px !important`,
                            letterSpacing: 0,
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: `text.primary`,
                          }}
                        >
                          {post.frontmatter.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: `text.disabled`,
                            fontSize: `13px`,
                            mt: 0.5,
                          }}
                        >
                          {post.frontmatter.date} · {post.timeToRead} min read
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: `text.secondary`,
                            mt: 1,
                            lineHeight: 1.7,
                          }}
                        >
                          {post.frontmatter.description}
                        </Typography>
                      </Box>
                    </Link>
                  </Card>
                </Reveal>
              )
            })}
          </Box>
        </Box>

        {/* Research */}
        {publication && (
          <Box component="section">
            <Reveal>
              <SectionHeading>Research</SectionHeading>
            </Reveal>
            <Reveal delay={60}>
              <Card>
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: `11px !important`,
                      letterSpacing: `0.12em`,
                      textTransform: `uppercase`,
                      fontWeight: 600,
                      color: `primary.main`,
                    }}
                  >
                    Published · {publication.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    component={publication.url ? MuiLink : `p`}
                    href={publication.url}
                    target={publication.url ? `_blank` : undefined}
                    rel={publication.url ? `noopener noreferrer` : undefined}
                    underline="none"
                    sx={{
                      display: `block`,
                      mt: 0.75,
                      color: `text.primary`,
                      fontWeight: 500,
                      lineHeight: 1.6,
                      ...(publication.url
                        ? { "&:hover": { color: `primary.main` } }
                        : {}),
                    }}
                  >
                    {publication.title}
                    {publication.url && (
                      <LaunchIcon
                        sx={{ fontSize: `14px`, ml: 0.5, verticalAlign: `-2px` }}
                      />
                    )}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, color: `text.disabled`, fontSize: `13px` }}
                  >
                    {publication.venue} · {publication.detail}
                  </Typography>
                </Box>
              </Card>
            </Reveal>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 200) {
      nodes {
        id
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "MMMM D, YYYY")
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 640, aspectRatio: 1.6, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
