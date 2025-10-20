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
import { FaPython } from "react-icons/fa"

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
                        Machine Learning Researcher located in New York
                      </Typography>
                    </div>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontStyle: "italic" }}
                  >
                    Experience as <b>Machine Learning Researcher</b> and{" "}
                    <b>Software Engineer</b> working on multiple projects and
                    expertise in the design, installation, testing, and
                    maintenance of software systems.
                  </Typography>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <FaPython size={125} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Machine Learning:</b> Strong grasp of ML technologies
                      including <b>Deep Learning</b> and <b>Neural Networks</b>.
                      My research centers on continuous user authentication
                      using behavioral biometrics with models like <b>SVM</b>,{" "}
                      <b>Random Forest</b>, <b>KNN</b>, <b>GMM</b>, <b>CNN</b>,{" "}
                      <b>RNN</b>, and <b>Manhattan Scaled Distance</b>.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <FaCode size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Front-End:</b> Proficient in <b>JavaScript</b>,{" "}
                      <b>TypeScript</b>, <b>Python</b>, and <b>HTML/CSS</b>.
                      Experienced with <b>React</b>, <b>Redux</b>, <b>MobX</b>,
                      and UI libraries like <b>Material UI</b>, <b>Bootstrap</b>
                      , and <b>Tailwind CSS</b>.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <FaDatabase size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Back-End:</b> Skilled in <b>NodeJS</b>,{" "}
                      <b>ExpressJS</b>, and <b>Rails</b> for backend
                      architecture and routing. Experienced with ORMs like{" "}
                      <b>Mongoose</b> and <b>Active Record</b>, using{" "}
                      <b>MongoDB</b> and <b>PostgreSQL</b> for database
                      management.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
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
                  <Box display={"flex"} gap={1} alignItems={"center"}>
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
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <FaTools size={75} />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", fontStyle: "italic" }}
                    >
                      <b>Environment & Tools:</b> Experienced with <b>Agile</b>,{" "}
                      <b>Jira</b>, <b>GitLab</b>, and <b>GitHub</b>. Collaborate
                      with <b>DevOps</b> teams on <b>CI/CD pipelines</b>, with
                      hands-on experience in <b>Docker</b> and <b>AWS Cloud</b>.
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
                      Machine Learning Researcher at NYIT’s LAMP Lab
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      JANUARY 2024 - PRESENT
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
                          <b>NYIT’s LAMP Lab</b>, focusing on continuous
                          authentication systems and behavioral biometrics under
                          the mentorship of leading cybersecurity scholars.
                        </div>
                        <div>
                          My main research project involves developing a
                          continuous user authentication system using behavioral
                          biometrics such as keystroke dynamics and mouse
                          dynamics.
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
                      <FaRegHandPointRight /> Designing and implementing
                      sophisticated authentication systems for mobile devices
                      and telerobotics, with a focus on machine learning models
                      such as Support Vector Machines (SVM), Scaled Manhattan
                      Distance, Random Forest, K-Nearest Neighbors (KNN), and
                      Gaussian Mixture Models (GMM) to enhance model accuracy
                      and robustness.
                      <br />
                      <FaRegHandPointRight /> Spearheading experiments to
                      capture, analyze, and interpret data from accelerometers,
                      gyroscopes, and 3D motion capture devices, developing
                      robust methodologies for feature extraction and optimizing
                      models to identify unique behavioral patterns.
                      <br />
                      <FaRegHandPointRight /> Collaborating closely with an
                      interdisciplinary team, fostering innovative approaches to
                      bolster security across digital and mobile platforms.
                      <br />
                      <FaRegHandPointRight /> Specializing in the optimization
                      of gesture-based authentication, gait recognition, and
                      other behavioral biometrics, driving developments in
                      user-specific authentication mechanisms.
                      <br />
                      <FaRegHandPointRight /> Contributing research findings to
                      top-tier journals and presenting at major conferences,
                      actively shaping discourse within the academic and
                      professional communities.
                      <br />
                      <FaRegHandPointRight /> Engaging with industry leaders to
                      align academic research with practical cybersecurity
                      applications, bridging the gap between theoretical
                      development and industry relevance.
                      <br />
                      <FaRegHandPointRight /> Providing mentorship and support
                      to emerging researchers, fostering a collaborative
                      learning environment within the lab and the broader
                      academic community.
                      <br />
                      <FaRegHandPointRight /> Practiced Integration testing to
                      test different components of the application in
                      combination to assess if they work correctly together,
                      ensuring there are no new bugs generated during
                      development.
                      <FaRegHandPointRight /> Published Paper as Assistant
                      Researcher: Nicholas Cariello, Robert Eslinger, Rosemary
                      Gallagher, Isaac Kurtzer, Paolo Gasti, and Kiran S.
                      Balagani. Posture and Body Movement Effects on Behavioral
                      Biometrics for Continuous Smartphone Authentication. In
                      IEEE Transactions on Biometrics, Behavior, and Identity
                      Science (T-BIOM), vol. 10 pp. 1–1, 2024
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
                        <a href="https://docs.google.com/document/d/1-JLziUE-TpLsI4EVBPwiEOlSy7nBNDapYvfqL0kYkng/edit?usp=sharing">
                          Resume
                        </a>
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
                    {/* NYIT */}
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
                      PhD in Computer Science at NYIT
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      JANUARY 2024 - PRESENT New York City, New York
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
                      <FaRegHandPointRight /> Honors: summa cum laude (GPA:
                      3.70)
                    </Typography>

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
                        <a href="https://docs.google.com/document/d/1-JLziUE-TpLsI4EVBPwiEOlSy7nBNDapYvfqL0kYkng/edit?usp=sharing">
                          Resume
                        </a>
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
