import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Reveal from "../about/reveal"

function Panel({ eyebrow, title, url, accent, note, children }) {
  return (
    <Box sx={{ flex: 1, minWidth: 0, display: `flex`, flexDirection: `column` }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: `11px !important`,
          letterSpacing: `0.12em`,
          textTransform: `uppercase`,
          fontWeight: 600,
          color: accent ? `primary.main` : `text.disabled`,
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>
      <Box
        sx={{
          borderRadius: `10px`,
          border: `1px solid`,
          borderColor: accent ? `primary.main` : `divider`,
          overflow: `hidden`,
          backgroundColor: `background.alt`,
        }}
      >
        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
            gap: 1,
            px: 1.25,
            py: 0.75,
            borderBottom: `1px solid`,
            borderColor: `divider`,
          }}
        >
          <Box sx={{ display: `flex`, gap: 0.5 }} aria-hidden>
            {[0, 1, 2].map(i => (
              <Box
                key={i}
                sx={{ width: 6, height: 6, borderRadius: `50%`, backgroundColor: `divider` }}
              />
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: `text.disabled`,
              fontSize: `10px`,
              overflow: `hidden`,
              textOverflow: `ellipsis`,
              whiteSpace: `nowrap`,
            }}
          >
            {url}
          </Typography>
        </Box>
        {children}
      </Box>
      <Typography
        variant="body2"
        sx={{ mt: 1.25, color: `text.primary`, fontWeight: 500, fontSize: `14px` }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 0.25, color: `text.secondary`, fontSize: `13px`, lineHeight: 1.6 }}
      >
        {note}
      </Typography>
    </Box>
  )
}

export default function ThemeCompare() {
  return (
    <Reveal>
      <Box
        sx={{
          display: `flex`,
          gap: { xs: 3, sm: 2.5 },
          flexDirection: { xs: `column`, sm: `row` },
          alignItems: `stretch`,
        }}
      >
        <Panel
          eyebrow="Before · Liquid theme"
          title="The pre-built theme"
          url="angelina-nail-supply-nyc.myshopify.com"
          note="Two stacked promo bars, a wrapped row of eleven nav items, and a banner competing with the search field."
        >
          <StaticImage
            src="../../images/ans/old-desktop.png"
            alt="The previous ANS store on a pre-built Liquid theme"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Panel>
        <Panel
          eyebrow="After · Hydrogen"
          title="The storefront I built"
          url="angelinanailsupply.com"
          accent
          note="One promo rail, four grouped categories, and a hero the eye reaches first."
        >
          <StaticImage
            src="../../images/ans/ans-desktop.png"
            alt="The current ANS storefront built on Hydrogen"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Panel>
      </Box>
    </Reveal>
  )
}
