import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import BackpackIcon from "@mui/icons-material/Backpack"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
// import Chip from "@mui/material/Chip"
import MuiLink from "@mui/material/Link"

// import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
// import ListItemText from '@mui/material/ListItemText';

// Import Icons from React-icon/fA
import { FaCode } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { FaExclamationCircle } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { FaRegHandPointRight } from "react-icons/fa"

const AboutPage = ({ data, location }) => {
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
            <BackpackIcon fontSize="small" />
          </IconButton>
          {"About"}
        </Box>
      }
    >
      <Seo title={"About me"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: "692px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media (max-width: 600px)": {
            gap: "1.5rem",
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
            value={1}
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
              label="About"
              active
              component="a"
              href="/about"
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
        <Alert
          severity="info"
          sx={{
            backgroundColor: "primary.light",
            color: "primary.dark",
            "& .MuiSvgIcon-root": { color: "primary.dark" },
          }}
          icon={"🧐"}
        >
          {" "}
          Check out my resume for more information about skills, experience,
          education and more.
        </Alert>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* Profile */}
          <Accordion
            defaultExpanded
            elevation={0}
            sx={{
              "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                { padding: 0 },
            }}
          >
            <AccordionSummary
              id={"profile"}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                },
              }}
            >
              <MuiLink
                variant="h6"
                underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: "500",
                }}
                component="a"
                href={"#profile"}
              >
                {"Profile Detail"}
              </MuiLink>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Box
                  // user info
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Avatar
                      alt="Lam Nguyen"
                      src="https://liamdev.vercel.app/avatar.png"
                      sx={{ width: 64, height: 64, backgroundColor: "divider" }}
                    >
                      LN
                    </Avatar>
                    <div>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "16px !important",
                          letterSpacing: 0,
                          fontWeight: "500",
                          lineHeight: "20px",
                          color: "text.primary",
                        }}
                      >
                        Lam Nguyen
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.disabled" }}
                      >
                        Full Stack developer located in Long Island, New York
                      </Typography>
                    </div>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontStyle: "italic" }}
                  >
                    Experience as <b>MERN Full Stack Developer</b> working on
                    multiple projects and expertise in the design, installation,
                    testing, and maintenance of software systems.
                  </Typography>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <FaCode size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Front-End: </b> Solid understanding of{" "}
                      <b>JavaScript</b>, <b>Typescript</b>, <b>Python</b>,{" "}
                      <b>HTML/CSS</b>. Framework <b>React</b>, <b>Redux</b>,{" "}
                      <b>MobX</b>, and many CSS frameworks such as{" "}
                      <b>Material UI</b>, <b>Bootstrap</b>, and{" "}
                      <b>Tailwind CSS</b> to handle many types of UI front-end.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <FaDatabase size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Back-End</b>: Architecture design and route control
                      with multiple back-end technologies such as <b>NodeJS</b>,{" "}
                      <b>ExpressJS</b> and <b>Rails</b> with experience in ORM
                      such as <b>Mongoose</b>, and <b>Active Record</b>. Using{" "}
                      <b>MongoDB</b>, and <b>PostgreSQL</b> to handle both SQL
                      and no-SQL databases.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <FaExclamationCircle size={50} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Testing</b>: Minimizing unexpected errors and
                      maintaining more than 85% test coverage by using{" "}
                      <b>Jest</b>, and <b>React Testing Library</b> in TDD.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <FaGitSquare size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Git Version:</b> Solid understanding of{" "}
                      <b>Git version</b> to track for source control and
                      branches, handle push, pull, and stash commits while
                      maintaining the latest up-to-date version of the code
                      without merge conflicts.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <FaTools size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Enviroment & Tools:</b> <b>Agile</b> method with{" "}
                      <b>Jira</b> Management and <b>Gitlab</b>, and{" "}
                      <b>Github</b>. Collaborating with the <b>DevOps</b> team
                      to follow <b>CI/CD pipeline</b> for deployment on testing
                      enviroment. Experience with <b>Docker</b> and{" "}
                      <b>AWS Cloud</b>.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Employment */}
          <Accordion
            defaultExpanded
            elevation={0}
            sx={{
              "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                { padding: 0 },
            }}
          >
            <AccordionSummary
              id={"employment"}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                },
              }}
            >
              <MuiLink
                variant="h6"
                underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: "500",
                }}
                component="a"
                href={"#employment"}
              >
                {"Most Recent Employment"}
              </MuiLink>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* SVB */}
                  <div>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "16px !important",
                        letterSpacing: 0,
                        fontWeight: "500",
                        lineHeight: "20px",
                        color: "text.primary",
                      }}
                    >
                      {" "}
                      Software Engineer at Silicon Valley Bank
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      SEPTEMPER 2022 - PRESENT
                    </Typography>
                    <Alert
                      mt={2}
                      variant="outlined"
                      severity="info"
                      sx={{ margin: "0.5rem" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontStyle: "italic",
                          lineHeight: "2.0",
                        }}
                      >
                        <div>
                          <b>Silicon Valley Bank</b> is on the list of largest
                          banks in the United State which provides financial
                          products, services, and strategic advice for
                          businesses.
                        </div>
                        <div>
                          As <b>Software Engineer at SVB</b>, I was responsible
                          for implementing features such as the Payment Center,
                          Payment Template, and Internal Transfer, building UI,
                          and maintaining code quality by testing, and reviewing
                          in the Payment 3 Team of SVB Go application.
                        </div>
                      </Typography>
                    </Alert>
                    <Typography
                      variant="body2"
                      sx={{
                        letterSpacing: 0,
                        color: "text.primary",
                        margin: "10px",
                        lineHeight: "2.0",
                      }}
                    >
                      <FaRegHandPointRight /> Developed multiple functionalities
                      with Responsive Web Design for the application’s payment
                      feature and implemented UI components by using the
                      Material UI framework, React, and Typescripts, such as
                      flexible grids and layouts, forms, buttons, and tables.
                      <br />
                      <FaRegHandPointRight /> Coordinated with the Product
                      Manager and Tech Lead to clarify Acceptance Criteria (AC)
                      requirements and implement features that followed UX/UI
                      design on Figma.
                      <br />
                      <FaRegHandPointRight /> Used React-hooks (useCallback,
                      useMemo, useState, useEffect, useHistory, useNavigate,
                      etc.) to handle the application life cycle processes.
                      Handled state management with React-MobX by interacting
                      with existing stores and initializing states for
                      appropriate components.
                      <br />
                      <FaRegHandPointRight /> Manipulated reusable components
                      and built new features for appropriate pages such as
                      Payment Center, Payment Forms, Transfer Form, Template,
                      etc.
                      <br />
                      <FaRegHandPointRight /> Responsible for debugging,
                      peer-reviewing, and integrating codes to meet production
                      specifications.
                      <br />
                      <FaRegHandPointRight /> The project was implemented by
                      following TDD using the JEST, enzyme for unit testing.
                      <br />
                      <FaRegHandPointRight /> Coordinated with QA Testers to
                      ensure the implementing features meets the AC.
                      <br />
                      <FaRegHandPointRight /> Practiced Integration testing to
                      test different components of the application in
                      combination to assess if they work correctly together,
                      ensuring there are no new bugs generated during
                      development.
                      <br />
                      <FaRegHandPointRight /> Worked with Agile Methodology with
                      Jira, Git to handle version control and tracking units,
                      and Gitlab as a software development platform to follow
                      Git Workflow and CI/CD Pipeline.
                      <br />
                      <FaRegHandPointRight /> Collaborated with other developers
                      for code review to maintain test coverage, code quality,
                      security, re-usability, and scalability.
                      <br />
                      <FaRegHandPointRight /> Collaborated with other teams to
                      maintain or report any testing environment issues, CI/CD
                      pipeline failures, and any updates from leadership and
                      cooperate.
                      <br />
                      <FaRegHandPointRight /> Environment: ECMAScript 6,
                      Typescript, Material-UI, React, MobX, Jest, Git, Jira,
                      GitLab
                    </Typography>
                    <Alert
                      mt={2}
                      variant="outlined"
                      severity="success"
                      sx={{ margin: "0.5rem" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontStyle: "italic",
                          lineHeight: "2.0",
                        }}
                      >
                        To view more information about my employment and
                        download, please visit{" "}
                        <a href="https://resume.io/r/gNzy8XZVB">Resume</a>
                      </Typography>
                    </Alert>
                  </div>
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Education */}
          <Accordion
            defaultExpanded
            elevation={0}
            sx={{
              "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                { padding: 0 },
            }}
          >
            <AccordionSummary
              id={"Education"}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                },
              }}
            >
              <MuiLink
                variant="h6"
                underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: "500",
                }}
                component="a"
                href={"#education"}
              >
                {"Education"}
              </MuiLink>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div>
                    {/* Adelphi */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "16px !important",
                        letterSpacing: 0,
                        fontWeight: "500",
                        lineHeight: "20px",
                        color: "text.primary",
                      }}
                    >
                      {" "}
                      MS in Business Analytics at Adelphi University
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      JANUARY 2020 - DECEMBER 2020 Garden City, New York
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        letterSpacing: 0,
                        color: "text.primary",
                        margin: "10px",
                        lineHeight: "2.0",
                      }}
                    >
                      <FaRegHandPointRight /> CeDiD: 21TJ – IQ05 – HONG
                      <br />
                      <FaRegHandPointRight /> Honors: summa cum laude (GPA:
                      3.59)
                    </Typography>

                    {/* Software Engineering Certificate Program  */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "16px !important",
                        letterSpacing: 0,
                        fontWeight: "500",
                        lineHeight: "20px",
                        color: "text.primary",
                      }}
                    >
                      {" "}
                      Software Engineering Certificate Program at Flatiron
                      School
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      DECEMBER 2021 - APRIL 2022 Garden City, New York
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        letterSpacing: 0,
                        color: "text.primary",
                        margin: "10px",
                        lineHeight: "2.0",
                      }}
                    >
                      <FaRegHandPointRight /> Learned and built hand-on
                      experience full stack software engineer with React,
                      JavaScript, PostgreSQL, Ruby on Rails, and more.
                    </Typography>

                    <Alert
                      mt={2}
                      variant="outlined"
                      severity="success"
                      sx={{ margin: "0.5rem" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontStyle: "italic",
                          lineHeight: "2.0",
                        }}
                      >
                        To view more information about my employment, education,
                        skills and download my resume, please visit{" "}
                        <a href="https://resume.io/r/gNzy8XZVB">Resume</a>
                      </Typography>
                    </Alert>
                  </div>
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
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
