import * as React from "react"

import Typography from "@mui/material/Typography"

export default function Eyebrow({ children, accent }) {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: `11px !important`,
        letterSpacing: `0.12em`,
        textTransform: `uppercase`,
        fontWeight: 600,
        color: accent ? `primary.main` : `text.disabled`,
      }}
    >
      {children}
    </Typography>
  )
}
