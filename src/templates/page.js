import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

export const query = graphql`
  query MyQuery($id: String) {
    allPrismicPages(filter: { id: { eq: $id } }) {
      edges {
        node {
          lang
          uid
          id
          data {
            title {
              html
              raw
              text
            }
            show_booking_iframe
            featured_image {
              fluid {
                src
              }
            }
            content {
              html
              raw
              text
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  console.log(props)

  const pageTitle = props.data.allPrismicPages.edges[0].node.data.title.raw
  const content = props.data.allPrismicPages.edges[0].node.data.content.raw

  return (
    <>
      <RichText render={pageTitle} />
      <RichText render={content} />
    </>
  )
}

export default Page
