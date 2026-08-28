import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"
import { profile } from "../data/resume"
import { isSamePath } from "./nav/paths"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import WorkIcon from "@mui/icons-material/Work"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import LinkIcon from "@mui/icons-material/InsertLink"
import LinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined"
import TerminalIcon from "@mui/icons-material/Terminal"
import SearchIcon from "@mui/icons-material/Search"

// Active destinations carry the same filled-circle treatment the site already
// uses for page-title and search-result icons.
const buttonSx = active => ({
  color: active ? `text.primary` : `text.secondary`,
  backgroundColor: active ? `action.selected` : `transparent`,
  transition: `background-color 200ms ease, color 200ms ease`,
  "&:hover": { backgroundColor: `action.hover` },
})

function NavIcon({ to, label, pathname, ActiveIcon, InactiveIcon }) {
  const active = isSamePath(pathname, to)
  return (
    <Tooltip title={label} placement="right" arrow>
      <IconButton
        component={Link}
        to={to}
        aria-label={label}
        aria-current={active ? `page` : undefined}
        sx={buttonSx(active)}
      >
        {active ? <ActiveIcon /> : <InactiveIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default function PanelLeft({ location, ThemeButton }) {
  const pathname = location?.pathname
  const [contactOpen, setContactOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  const toggleContact = open => event => {
    if (
      event?.type === `keydown` &&
      (event.key === `Tab` || event.key === `Shift`)
    ) {
      return
    }
    setContactOpen(open)
  }

  const aboutActive = isSamePath(pathname, `/about`)

  return (
    <Box
      component="nav"
      aria-label="Primary"
      sx={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        alignItems: `center`,
        height: `100vh`,
        width: `80px`,
        borderRight: `1px solid`,
        borderColor: `divider`,
        padding: `2.5rem 0`,
        position: `sticky`,
        top: 0,
        "@media (max-width: 1080px)": { display: `none` },
      }}
    >
      <Tooltip title="Lam Nguyen — home" placement="right" arrow>
        <IconButton
          component={Link}
          to="/"
          aria-label="Lam Nguyen — home"
          size="large"
          sx={{ color: `text.primary` }}
        >
          <TerminalIcon />
        </IconButton>
      </Tooltip>

      <Box sx={{ display: `flex`, flexDirection: `column`, gap: `0.75rem` }}>
        <NavIcon
          to="/"
          label="Home"
          pathname={pathname}
          ActiveIcon={HomeIcon}
          InactiveIcon={HomeOutlinedIcon}
        />
        <NavIcon
          to="/projects"
          label="Projects"
          pathname={pathname}
          ActiveIcon={WorkIcon}
          InactiveIcon={WorkOutlineIcon}
        />
        <NavIcon
          to="/links"
          label="Connect me"
          pathname={pathname}
          ActiveIcon={LinkIcon}
          InactiveIcon={LinkOutlinedIcon}
        />

        <Tooltip title="Search" placement="right" arrow>
          <IconButton
            onClick={() => setSearchOpen(true)}
            aria-label="Search posts"
            sx={buttonSx(searchOpen)}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <SearchDialog
          open={searchOpen}
          setOpen={setSearchOpen}
          handleClose={() => setSearchOpen(false)}
        />

        <Tooltip title="Contact" placement="right" arrow>
          <IconButton
            onClick={toggleContact(true)}
            aria-label="Contact"
            sx={buttonSx(contactOpen)}
          >
            <AlternateEmailOutlinedIcon />
          </IconButton>
        </Tooltip>
        <ContactDrawer open={contactOpen} onClose={toggleContact(false)} />

        {ThemeButton}
      </Box>

      {/* The avatar is the route to the résumé, not decoration. */}
      <Tooltip title="About Lam" placement="right" arrow>
        <IconButton
          component={Link}
          to="/about"
          aria-label="About Lam"
          aria-current={aboutActive ? `page` : undefined}
          sx={{ p: 0.5, backgroundColor: `transparent` }}
        >
          <Avatar
            alt={profile.name}
            src={profile.avatar}
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `divider`,
              outline: `2px solid`,
              outlineOffset: `2px`,
              // outlineColor is not theme-mapped in sx, so resolve it explicitly.
              outlineColor: theme =>
                aboutActive ? theme.palette.primary.main : `transparent`,
              transition: `outline-color 200ms ease`,
            }}
          >
            LN
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  )
}
