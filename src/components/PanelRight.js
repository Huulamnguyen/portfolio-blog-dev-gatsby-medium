import * as React from "react"
import { Link } from "gatsby"

import SelectedWork from "./SelectedWork"
import TechBadges from "./TechBadges"
import Socials from "./socials"
import SearchDialog from "./search/search-dialog"
import { isSearchShortcut } from "./search/shortcut"
import { profile } from "../data/resume"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonBase from "@mui/material/ButtonBase"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import LaunchIcon from "@mui/icons-material/Launch"
import SearchIcon from "@mui/icons-material/Search"

const pill = {
  borderRadius: `2rem`,
  textTransform: `none`,
  fontWeight: 400,
  py: 0.9,
}

export default function PanelRight({ extraDrawerContent }) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // Rendered as ⌘K on both server and first client render, then corrected —
  // updating after hydration rather than during it avoids a mismatch.
  const [shortcutLabel, setShortcutLabel] = React.useState(`⌘K`)
  React.useEffect(() => {
    const isMac = /Mac|iPhone|iPad/i.test(
      window.navigator?.userAgentData?.platform || window.navigator.platform || ``
    )
    if (!isMac) setShortcutLabel(`Ctrl K`)
  }, [])

  React.useEffect(() => {
    const onKeyDown = event => {
      if (!isSearchShortcut(event)) return
      event.preventDefault()
      setOpen(true)
    }
    document.addEventListener(`keydown`, onKeyDown)
    return () => document.removeEventListener(`keydown`, onKeyDown)
  }, [])

  return (
    <Box
      component="aside"
      sx={{
        display: `block`,
        minHeight: `100vh`,
        borderLeft: `1px solid`,
        borderColor: `divider`,
        width: `394px`,
        "@media (max-width: 1240px)": { width: `280px` },
        "@media (max-width: 1080px)": { display: `none` },
      }}
    >
      <Box sx={{ position: `sticky`, top: 0 }}>
        <Box
          sx={{
            padding: `2.5rem 2rem`,
            display: `flex`,
            flexDirection: `column`,
            gap: `2.5rem`,
          }}
        >
          {extraDrawerContent ? null : (
            <Box
              sx={{ display: `flex`, flexDirection: `column`, gap: 1.5 }}
            >
              <Box sx={{ display: `flex`, gap: 2, alignItems: `center` }}>
                <Avatar
                  alt={profile.name}
                  src={profile.avatar}
                  sx={{ width: 56, height: 56, backgroundColor: `divider` }}
                >
                  LN
                </Avatar>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: `16px !important`,
                      letterSpacing: 0,
                      fontWeight: 600,
                      lineHeight: `20px`,
                      color: `text.primary`,
                    }}
                  >
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: `text.disabled` }}>
                    {profile.role}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: `text.secondary`, lineHeight: 1.7 }}
              >
                {profile.now}{` `}
                <MuiLink
                  href={profile.site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: `inline-flex`,
                    alignItems: `center`,
                    gap: 0.4,
                    color: `primary.main`,
                    borderBottom: `1px solid transparent`,
                    transition: `border-color 200ms ease`,
                    "&:hover": { borderColor: `primary.main` },
                  }}
                >
                  {profile.site.label}
                  <LaunchIcon sx={{ fontSize: `13px` }} />
                </MuiLink>
              </Typography>
            </Box>
          )}

          {extraDrawerContent ? null : <TechBadges />}

          <Box sx={{ display: `flex`, flexDirection: `column`, gap: 1.25 }}>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              disableElevation
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                ...pill,
                backgroundColor: `text.postBody`,
                color: `background.alt`,
                "&:hover": { backgroundColor: `text.primary` },
              }}
            >
              Read résumé
            </Button>
            <Button
              variant="outlined"
              fullWidth
              href={`mailto:${profile.email}`}
              sx={{
                ...pill,
                color: `text.primary`,
                borderColor: `divider`,
                "&:hover": { borderColor: `text.disabled` },
              }}
            >
              Contact me
            </Button>

            {/* Quieter than the two calls to action above it — this mostly
                exists to advertise the keyboard shortcut. */}
            <ButtonBase
              onClick={handleClickOpen}
              aria-label="Search posts"
              sx={{
                mt: 0.5,
                px: 1.5,
                py: 1,
                width: `100%`,
                justifyContent: `space-between`,
                borderRadius: `10px`,
                border: `1px solid`,
                borderColor: `divider`,
                color: `text.disabled`,
                fontSize: `14px`,
                transition: `border-color 200ms ease`,
                "&:hover": { borderColor: `text.disabled` },
              }}
            >
              <Box sx={{ display: `flex`, alignItems: `center`, gap: 1 }}>
                <SearchIcon fontSize="small" />
                Search
              </Box>
              <Box
                component="kbd"
                sx={{
                  fontFamily: `inherit`,
                  fontSize: `12px`,
                  px: 0.75,
                  py: 0.15,
                  borderRadius: `4px`,
                  border: `1px solid`,
                  borderColor: `divider`,
                }}
              >
                {shortcutLabel}
              </Box>
            </ButtonBase>
            <SearchDialog
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          </Box>

          {extraDrawerContent ? null : <SelectedWork />}
          {extraDrawerContent}
          <Socials />
        </Box>
      </Box>
    </Box>
  )
}
