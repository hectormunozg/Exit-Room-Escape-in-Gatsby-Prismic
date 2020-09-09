import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import { RichText } from "prismic-reactjs"

export default function Contact() {
  const data = useStaticQuery(graphql`
  {
    allPrismicContact {
      edges {
        node {
          data {
            address {
              raw
            }
            content {
              raw
            }
            email {
              raw
            }
            location {
              latitude
              longitude
            }
            phone {
              raw
            }
            title {
              raw
            }
          }
          uid
          id
        }
      }
    }
  }
  `)


 console.log(data)

 const title = data.allPrismicContact.edges[0].node.data.title.raw
 const content = data.allPrismicContact.edges[0].node.data.content.raw

  return (
    <Layout>
      <RichText render={title} />
      <RichText render={content} />
    </Layout>
  )
}
