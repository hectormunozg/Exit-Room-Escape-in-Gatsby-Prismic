import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Slider from "../components/homepage/slider"
import { RichText } from "prismic-reactjs"

export default function Faqs() {
  const data = useStaticQuery(graphql`
  {
    allPrismicFaqs {
      edges {
        node {
          uid
          id
          data {
            title {
              raw
            }
            content {
              raw
            }
            faqs {
              answer {
                raw
              }
              question {
                raw
              }
            }
          }
        }
      }
    }
  }
  
  `)


 console.log(data)

 const title = data.allPrismicFaqs.edges[0].node.data.title.raw
 const content = data.allPrismicFaqs.edges[0].node.data.content.raw

  return (
    <Layout>
      <RichText render={title} />
      <RichText render={content} />
    </Layout>
  )
}
