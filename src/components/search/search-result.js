import { Link } from "gatsby"
import { default as React } from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"

import ArticleIcon from "@mui/icons-material/Article"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { splitByTerms } from "./match"

// Wraps the parts of `text` that matched the query in <mark>, which the
// surrounding sx rules recolour to primary.main.
const Mark = ({ text, terms }) => (
  <>
    {splitByTerms(text, terms).map((segment, index) =>
      segment.match ? (
        <mark key={index}>{segment.text}</mark>
      ) : (
        <React.Fragment key={index}>{segment.text}</React.Fragment>
      )
    )}
  </>
)

const HitIcon = ({ children }) => (
  <ListItemIcon
    sx={{
      minWidth: "2.5rem",
      "@media (max-width: 600px)": { display: "none" },
    }}
  >
    <IconButton
      disableRipple
      size="small"
      sx={{
        backgroundColor: "action.selected",
        color: "text.primary",
      }}
    >
      {children}
    </IconButton>
  </ListItemIcon>
)

const PageHit = ({ hit, terms, onNavigate }) => (
  <ListItemButton component={Link} to={hit.slug} onClick={onNavigate}>
    <HitIcon>
      <ArticleIcon sx={{ fontSize: "14px" }} />
    </HitIcon>
    <ListItemText
      primary={
        <>
          <Mark text={hit.title} terms={terms} />
          <Typography sx={{ color: "text.disabled", display: "inline" }}>
            －{hit.date}
          </Typography>
        </>
      }
      secondary={<Mark text={hit.description} terms={terms} />}
      sx={{
        "* > mark": {
          backgroundColor: "unset",
          color: "primary.main",
        },
        "> .MuiTypography-body2": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          mr: 4,
        }
      }}
    />
  </ListItemButton>
)

const TagHit = ({ hit, terms, onNavigate }) => (
  <ListItemButton
    component={Link}
    to={`/tag/${kebabCase(hit.fieldValue)}/`}
    onClick={onNavigate}
  >
    <HitIcon>
      <LocalOfferIcon sx={{ fontSize: "14px" }} />
    </HitIcon>
    <ListItemText
      primary={
        <>
          <Mark text={hit.fieldValue} terms={terms} />
          <Typography sx={{ color: "text.disabled", display: "inline" }}>
            －{hit.totalCount}
          </Typography>
        </>
      }
      sx={{
        "* > mark": {
          backgroundColor: "unset",
          color: "primary.main",
        },
      }}
    />
  </ListItemButton>
)

const HitSection = ({ title, hits, terms, renderHit }) => (
  <>
    <List
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ background: "none", color: "text.disabled" }}
        >
          {title}
        </ListSubheader>
      }
      sx={{
        py: 1,
        "& ul": {
          padding: 0,
          listStyle: "none",
        },
      }}
    >
      {hits.map(renderHit)}
    </List>
    <Divider sx={{ mx: 2, ":last-of-type": { display: "none" } }} />
  </>
)

const SearchResult = ({ posts, tags, terms, onNavigate }) => (
  <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
    {posts.length > 0 && (
      <HitSection
        title="Stories"
        hits={posts}
        terms={terms}
        renderHit={hit => (
          <PageHit key={hit.id} hit={hit} terms={terms} onNavigate={onNavigate} />
        )}
      />
    )}
    {tags.length > 0 && (
      <HitSection
        title="Tags"
        hits={tags}
        terms={terms}
        renderHit={hit => (
          <TagHit
            key={hit.fieldValue}
            hit={hit}
            terms={terms}
            onNavigate={onNavigate}
          />
        )}
      />
    )}
    {posts.length === 0 && tags.length === 0 && (
      <Typography sx={{ color: "text.disabled", px: 2, py: 3, fontSize: "14px" }}>
        No results found.
      </Typography>
    )}
  </Box>
)

export default SearchResult
