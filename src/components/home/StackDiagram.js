import * as React from "react"
import { keyframes } from "@emotion/react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useReveal } from "../about/reveal"

// Each layer arrives in turn, so the stack assembles itself as you read it.
const arrive = keyframes`
  from { opacity: 0; transform: translateY(-6px) scale(0.96); }
  to   { opacity: 1; transform: none; }
`

const LIQUID = {
  title: `Pre-built Liquid theme`,
  note: `One box you configure. Rendering, routing and the data layer all live inside Shopify.`,
  layers: [
    { label: `Browser`, owned: true },
    { label: `Shopify renders the Liquid theme`, owned: false, opaque: true },
    { label: `Shopify data`, owned: false },
  ],
}

const HYDROGEN = {
  title: `Custom Hydrogen storefront`,
  note: `Every layer above the data is code I wrote, and deploy.`,
  layers: [
    { label: `Browser`, owned: true },
    { label: `React storefront on Oxygen`, owned: true },
    { label: `Storefront API · GraphQL`, owned: true },
    { label: `Shopify data`, owned: false },
  ],
}

function Layer({ layer, index, shown, instant, accent }) {
  const delay = 140 + index * 130
  return (
    <Box
      sx={{
        px: 2,
        py: 1.25,
        borderRadius: `10px`,
        border: `1px solid`,
        borderColor: layer.owned && accent ? `primary.main` : `divider`,
        backgroundColor: layer.opaque ? `action.selected` : `transparent`,
        color: layer.owned ? `text.primary` : `text.disabled`,
        fontSize: `13px`,
        textAlign: `center`,
        // Hatching marks the box you cannot open.
        backgroundImage: layer.opaque
          ? `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(128,128,128,0.16) 5px, rgba(128,128,128,0.16) 6px)`
          : `none`,
        opacity: shown ? 1 : 0,
        animation:
          shown && !instant ? `${arrive} 420ms ease-out ${delay}ms both` : `none`,
      }}
    >
      {layer.label}
    </Box>
  )
}

function Connector({ index, shown, instant, accent }) {
  const delay = 200 + index * 130
  return (
    <Box
      aria-hidden
      sx={{
        width: `1px`,
        height: `18px`,
        mx: `auto`,
        backgroundColor: accent ? `primary.main` : `divider`,
        transformOrigin: `top`,
        transform: shown ? `scaleY(1)` : `scaleY(0)`,
        transition: instant
          ? `none`
          : `transform 320ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    />
  )
}

function Stack({ stack, accent, shown, instant }) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        width: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: `11px !important`,
          letterSpacing: `0.12em`,
          textTransform: `uppercase`,
          fontWeight: 600,
          color: accent ? `primary.main` : `text.disabled`,
          mb: 1.5,
        }}
      >
        {stack.title}
      </Typography>
      <Box>
        {stack.layers.map((layer, i) => (
          <React.Fragment key={layer.label}>
            {i > 0 && (
              <Connector index={i} shown={shown} instant={instant} accent={accent} />
            )}
            <Layer
              layer={layer}
              index={i}
              shown={shown}
              instant={instant}
              accent={accent}
            />
          </React.Fragment>
        ))}
      </Box>
      <Typography
        variant="body2"
        sx={{ mt: `auto`, pt: 2, color: `text.secondary`, lineHeight: 1.7 }}
      >
        {stack.note}
      </Typography>
    </Box>
  )
}

export default function StackDiagram() {
  const { ref, shown, instant } = useReveal()

  return (
    <Box
      ref={ref}
      data-reveal=""
      sx={{
        display: `flex`,
        gap: { xs: 4, sm: 5 },
        flexDirection: { xs: `column`, sm: `row` },
        alignItems: `stretch`,
      }}
    >
      <Stack stack={LIQUID} shown={shown} instant={instant} accent={false} />
      <Stack stack={HYDROGEN} shown={shown} instant={instant} accent />
    </Box>
  )
}
