import * as React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Eyebrow from "./Eyebrow"

// The paper's headline result, as the two numbers it turns on.
export default function MetricPair({ metric }) {
  return (
  <Box
    sx={{
      mt: 3,
      borderRadius: `12px`,
      border: `1px solid`,
      borderColor: `divider`,
      overflow: `hidden`,
    }}
  >
    <Box sx={{ px: 2.5, pt: 2 }}>
      <Eyebrow>{metric.label}</Eyebrow>
    </Box>
    <Box
      sx={{
        display: `flex`,
        flexDirection: { xs: `column`, sm: `row` },
        gap: { xs: 2, sm: 0 },
        p: 2.5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: `text.disabled`, fontSize: `13px` }}
        >
          {metric.baselineLabel}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: `26px`,
            fontWeight: 600,
            lineHeight: 1.1,
            color: `text.disabled`,
            fontVariantNumeric: `tabular-nums`,
          }}
        >
          {metric.baseline}
        </Typography>
      </Box>
      <Box
        aria-hidden
        sx={{
          alignSelf: `center`,
          px: 2,
          color: `text.disabled`,
          display: { xs: `none`, sm: `block` },
        }}
      >
        →
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: `primary.main`, fontSize: `13px`, fontWeight: 600 }}
        >
          {metric.resultLabel}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: `26px`,
            fontWeight: 600,
            lineHeight: 1.1,
            color: `text.primary`,
            fontVariantNumeric: `tabular-nums`,
          }}
        >
          {metric.result}
        </Typography>
      </Box>
    </Box>
  </Box>
)
}
