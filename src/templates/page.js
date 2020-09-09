import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Nav from "../components/header/nav"

export const query = graphql`
  query MyPage($id: String) {
    allPrismicPages(filter: { id: { eq: $id } }) {
      edges {
        node {
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

  const pageTitle = props.data.allPrismicPages.edges[0].node.data.title.raw
  const content = props.data.allPrismicPages.edges[0].node.data.content.raw

  return (
    <>
      <Nav />
      <RichText key="1" render={pageTitle} />
      <RichText key="2" render={content} />
    </>
  )
}

export default Page
