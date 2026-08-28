import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Reveal from "../about/reveal"

// A browser frame, so the screenshot reads as a shipped site rather than an image.
const BrowserFrame = ({ children, url }) => (
  <Box
    sx={{
      borderRadius: `12px`,
      border: `1px solid`,
      borderColor: `divider`,
      overflow: `hidden`,
      backgroundColor: `background.alt`,
    }}
  >
    <Box
      sx={{
        display: `flex`,
        alignItems: `center`,
        gap: 1,
        px: 1.5,
        py: 1,
        borderBottom: `1px solid`,
        borderColor: `divider`,
      }}
    >
      <Box sx={{ display: `flex`, gap: 0.6 }} aria-hidden>
        {[0, 1, 2].map(i => (
          <Box
            key={i}
            sx={{ width: 8, height: 8, borderRadius: `50%`, backgroundColor: `divider` }}
          />
        ))}
      </Box>
      <Typography variant="body2" sx={{ color: `text.disabled`, fontSize: `11px` }}>
        {url}
      </Typography>
    </Box>
    {children}
  </Box>
)

export default function StoreShowcase() {
  return (
    <Reveal sx={{ position: `relative` }}>
      <BrowserFrame url="angelinanailsupply.com">
        <StaticImage
          src="../../images/ans/ans-desktop.png"
          alt="The ANS storefront on desktop"
          placeholder="blurred"
          layout="fullWidth"
        />
      </BrowserFrame>
      <Box
        sx={{
          position: `absolute`,
          right: `-8px`,
          bottom: `-28px`,
          width: `112px`,
          borderRadius: `14px`,
          border: `1px solid`,
          borderColor: `divider`,
          overflow: `hidden`,
          boxShadow: `0 12px 32px rgba(0,0,0,0.18)`,
          "@media (max-width: 600px)": { display: `none` },
        }}
      >
        <StaticImage
          src="../../images/ans/ans-mobile.png"
          alt="The same storefront on mobile"
          placeholder="blurred"
          layout="fullWidth"
        />
      </Box>
    </Reveal>
  )
}
