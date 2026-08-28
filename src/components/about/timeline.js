import * as React from "react"
import { keyframes } from "@emotion/react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useReveal, revealSx } from "./reveal"
import { startYear, isCurrent } from "./period"

// The current role is the only thing still being sampled, so it is the only
// thing that keeps moving after the reveal finishes.
const pulse = keyframes`
  0%   { transform: scale(1);   opacity: 0.55; }
  70%  { transform: scale(2.6); opacity: 0; }
  100% { transform: scale(2.6); opacity: 0; }
`

const DOT = 9

export function Timeline({ children }) {
  return <Box>{children}</Box>
}

export function TimelineItem({ entry, isLast = false, delay = 0 }) {
  const { ref, shown, instant } = useReveal()
  const year = startYear(entry.period)
  const current = isCurrent(entry.period)

  return (
    <Box
      ref={ref}
      data-reveal=""
      sx={{
        display: `grid`,
        gridTemplateColumns: { xs: `14px 1fr`, sm: `48px 14px 1fr` },
        columnGap: { xs: 2, sm: 2.5 },
      }}
    >
      {/* Year — the marker is a real fact, not a decorative counter. */}
      <Typography
        variant="body2"
        sx={{
          display: { xs: `none`, sm: `block` },
          textAlign: `right`,
          pt: `1px`,
          color: current ? `primary.main` : `text.disabled`,
          fontVariantNumeric: `tabular-nums`,
          ...revealSx({ shown, instant, delay, distance: 8 }),
        }}
      >
        {year}
      </Typography>

      {/* Rail */}
      <Box
        aria-hidden
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >
        <Box sx={{ position: `relative`, mt: `6px`, lineHeight: 0 }}>
          {current && shown && (
            <Box
              sx={{
                position: `absolute`,
                inset: 0,
                borderRadius: `50%`,
                backgroundColor: `primary.main`,
                animation: `${pulse} 2.8s ease-out infinite`,
                "@media (prefers-reduced-motion: reduce)": { animation: `none` },
              }}
            />
          )}
          <Box
            sx={{
              position: `relative`,
              width: `${DOT}px`,
              height: `${DOT}px`,
              borderRadius: `50%`,
              border: `1px solid`,
              borderColor: current ? `primary.main` : `divider`,
              backgroundColor: current ? `primary.main` : `background.default`,
              transform: shown ? `scale(1)` : `scale(0.4)`,
              opacity: shown ? 1 : 0,
              transition: instant
                ? `none`
                : `transform 420ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
                   opacity 420ms ease ${delay}ms`,
            }}
          />
        </Box>
        {!isLast && (
          <Box
            sx={{
              flex: 1,
              width: `1px`,
              mt: `6px`,
              backgroundColor: `divider`,
              transformOrigin: `top`,
              transform: shown ? `scaleY(1)` : `scaleY(0)`,
              transition: instant
                ? `none`
                : `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + 120}ms`,
            }}
          />
        )}
      </Box>

      {/* Entry */}
      <Box
        sx={{
          pb: isLast ? 0 : 5,
          ...revealSx({ shown, instant, delay: delay + 60 }),
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: `16px !important`,
            letterSpacing: 0,
            fontWeight: 500,
            lineHeight: `20px`,
            color: `text.primary`,
          }}
        >
          {entry.title}
        </Typography>
        <Typography variant="body2" sx={{ color: `text.primary`, mt: 0.5 }}>
          {entry.org}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: `text.disabled`, mt: 0.25, fontSize: `13px` }}
        >
          {entry.period}
          {entry.location ? ` · ${entry.location}` : ``}
        </Typography>

        {entry.lede && (
          <Typography
            variant="body2"
            sx={{
              mt: 1.5,
              pl: 1.5,
              borderLeft: `2px solid`,
              borderColor: `primary.main`,
              color: `text.primary`,
              fontStyle: `italic`,
              lineHeight: 1.7,
            }}
          >
            {entry.lede}
          </Typography>
        )}

        {entry.points?.length > 0 && (
          <Box
            component="ul"
            sx={{
              mt: 1.5,
              mb: 0,
              pl: 0,
              listStyle: `none`,
              display: `flex`,
              flexDirection: `column`,
              gap: 1,
            }}
          >
            {entry.points.map(point => (
              <Typography
                key={point}
                component="li"
                variant="body2"
                sx={{
                  position: `relative`,
                  pl: 2.25,
                  color: `text.primary`,
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
        )}
      </Box>
    </Box>
  )
}
