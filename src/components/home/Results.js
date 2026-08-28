import * as React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useReveal } from "../about/reveal"
import { results } from "../../data/projects"

function Row({ item, index, shown, instant }) {
  const delay = index * 90
  return (
    <Box
      sx={{
        py: 1.75,
        borderTop: index === 0 ? `none` : `1px solid`,
        borderColor: `divider`,
        opacity: shown ? 1 : 0,
        transform: shown ? `none` : `translateY(8px)`,
        transition: instant
          ? `none`
          : `opacity 420ms ease ${delay}ms, transform 420ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <Box
        sx={{
          display: `flex`,
          alignItems: `baseline`,
          justifyContent: `space-between`,
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: `text.primary`, fontWeight: 500 }}>
          {item.label}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: `text.disabled`, fontSize: `13px`, whiteSpace: `nowrap` }}
        >
          {item.from ? `${item.from} → ` : ``}
          <Box component="span" sx={{ color: `text.primary`, fontWeight: 600 }}>
            {item.to}
          </Box>
        </Typography>
      </Box>

      <Box
        aria-hidden
        sx={{
          mt: 1,
          height: `3px`,
          borderRadius: `2px`,
          backgroundColor: `divider`,
          overflow: `hidden`,
        }}
      >
        <Box
          sx={{
            height: `100%`,
            width: `${Math.round(item.progress * 100)}%`,
            borderRadius: `2px`,
            backgroundColor: `primary.main`,
            transformOrigin: `left`,
            transform: shown ? `scaleX(1)` : `scaleX(0)`,
            transition: instant
              ? `none`
              : `transform 720ms cubic-bezier(0.16,1,0.3,1) ${delay + 120}ms`,
          }}
        />
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 0.75, color: `text.secondary`, fontSize: `13px`, lineHeight: 1.6 }}
      >
        {item.note}
      </Typography>
    </Box>
  )
}

export default function Results() {
  const { ref, shown, instant } = useReveal()

  return (
    <Box ref={ref} data-reveal="">
      <Box
        sx={{
          display: `inline-flex`,
          alignItems: `center`,
          gap: 1,
          px: 1.25,
          py: 0.4,
          mb: 2,
          borderRadius: `6px`,
          border: `1px solid`,
          borderColor: `divider`,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: `50%`,
            backgroundColor: `primary.main`,
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontSize: `11px !important`,
            letterSpacing: `0.1em`,
            textTransform: `uppercase`,
            fontWeight: 600,
            color: `text.secondary`,
          }}
        >
          Measured against the legacy theme
        </Typography>
      </Box>

      <Box>
        {results.map((item, i) => (
          <Row
            key={item.label}
            item={item}
            index={i}
            shown={shown}
            instant={instant}
          />
        ))}
      </Box>
    </Box>
  )
}
