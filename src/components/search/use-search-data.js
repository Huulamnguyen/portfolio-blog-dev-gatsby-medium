import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"

// Pulls the same frontmatter Algolia used to index, but straight from Gatsby's
// build-time data, so search runs entirely in the browser.
export default function useSearchData() {
  const data = useStaticQuery(graphql`
    query SearchData {
      posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            description
            date(formatString: "l")
            tags
          }
          fields {
            slug
          }
        }
      }
      tags: allMdx(limit: 200) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return useMemo(
    () => ({
      posts: data.posts.nodes.map(node => ({
        id: node.id,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        date: node.frontmatter.date,
        tags: node.frontmatter.tags || [],
        slug: node.fields.slug,
      })),
      tags: data.tags.group,
    }),
    [data]
  )
}
