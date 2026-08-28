import * as React from "react"

import Box from "@mui/material/Box"

import { iconKeyFor } from "./tech-keys"

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiShopify, SiGraphql,
  SiTypescript, SiJavascript, SiPython, SiGit, SiGithub, SiGitlab,
  SiTailwindcss, SiPrisma, SiMongodb, SiMysql, SiPostgresql, SiRubyonrails,
  SiRedux, SiMobx, SiBootstrap, SiMaterialdesign, SiDocker, SiAmazonaws,
  SiJest, SiJira, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras,
  SiPytorch, SiScipy, SiJupyter, SiPlotly,
} from "react-icons/si"

const ICONS = {
  react: SiReact, nextdotjs: SiNextdotjs, nodedotjs: SiNodedotjs,
  express: SiExpress, shopify: SiShopify, graphql: SiGraphql,
  typescript: SiTypescript, javascript: SiJavascript, python: SiPython,
  git: SiGit, github: SiGithub, gitlab: SiGitlab, tailwindcss: SiTailwindcss,
  prisma: SiPrisma, mongodb: SiMongodb, mysql: SiMysql,
  postgresql: SiPostgresql, rubyonrails: SiRubyonrails, redux: SiRedux,
  mobx: SiMobx, bootstrap: SiBootstrap, materialdesign: SiMaterialdesign,
  docker: SiDocker, amazonaws: SiAmazonaws, jest: SiJest, jira: SiJira,
  numpy: SiNumpy, pandas: SiPandas, scikitlearn: SiScikitlearn,
  tensorflow: SiTensorflow, keras: SiKeras, pytorch: SiPytorch,
  scipy: SiScipy, jupyter: SiJupyter, plotly: SiPlotly,
}

// A label with no mark renders as a plain chip rather than borrowing a
// logo that isn't its own.
export function TechChip({ label, size = 12 }) {
  const Icon = ICONS[iconKeyFor(label)]
  return (
    <Box
      sx={{
        display: `inline-flex`,
        alignItems: `center`,
        gap: Icon ? 0.6 : 0,
        px: 1,
        py: 0.45,
        borderRadius: `6px`,
        border: `1px solid`,
        borderColor: `divider`,
        color: `text.primary`,
        fontSize: `${size}px`,
        lineHeight: 1,
        whiteSpace: `nowrap`,
      }}
    >
      {Icon && <Icon size={size + 1} aria-hidden />}
      {label}
    </Box>
  )
}

export default function TechChips({ items = [], size = 12, sx }) {
  if (items.length === 0) return null
  return (
    <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 0.75, ...sx }}>
      {items.map(label => (
        <TechChip key={label} label={label} size={size} />
      ))}
    </Box>
  )
}
