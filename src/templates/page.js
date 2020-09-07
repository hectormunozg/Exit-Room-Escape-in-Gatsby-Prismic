import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"

export const query = graphql`
  query MyQuery($id: String) {
    allPrismicPages(filter: { id: { eq: $id } }) {
      edges {
        node {
          alternate_languages {
            uid
            lang
          }
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
  const uid =
    props.data.allPrismicPages.edges[0].node.alternate_languages[0].uid
  const lang =
    props.data.allPrismicPages.edges[0].node.alternate_languages[0].lang

  function handleTranslationLink(uid, lang) {
    if ("es-es" === lang) {
      return `/${uid}`
    } else if ("en-gb" === lang) {
      return `/en/${uid}`
    }
    console.log("keep calm")
    return false;
  }

  const translationLink = handleTranslationLink(uid, lang)
  console.log(translationLink)

  return (
    <>
      <Link to={translationLink}>Ver traducción</Link>
      <RichText render={pageTitle} />
      <RichText render={content} />
    </>
  )
}

export default Page
