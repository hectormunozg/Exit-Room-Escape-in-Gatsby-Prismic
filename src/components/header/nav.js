import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Nav() {
  const data = useStaticQuery(graphql`
    {
      allPrismicNav {
        edges {
          node {
            data {
              nav_links {
                link {
                  document {
                    ... on PrismicPages {
                      id
                      uid
                      data {
                        title {
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const items = data.allPrismicNav.edges[0].node.data.nav_links

  console.log(items)

  return (
    <>
      <nav>
        {items.map(item => (
          <Link
            key={item.link.document.id}
            to={`/${item.link.document.uid}`}
          >
            {item.link.document.data.title.text}
          </Link>
        ))}
      </nav>
    </>
  )
}
