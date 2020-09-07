import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Slider from "../components/homepage/slider"

export default function HomePage() {
  const data = useStaticQuery(graphql`
    {
      allPrismicHome {
        edges {
          node {
            data {
              body {
                ... on PrismicHomeBodySlide {
                  id
                  items {
                    slide_title {
                      html
                      text
                      raw
                    }
                    slide_image {
                      fluid(maxWidth: 1920) {
                        src
                      }
                    }
                    slide_description
                    slider_btn_text {
                      text
                    }
                    slider_btn_link {
                      document {
                        ... on PrismicPages {
                          uid
                          data {
                            show_booking_iframe
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
    }
  `)

  return (
    <Layout>
      <h1>Jelou</h1>
      <Slider props={data} />
    </Layout>
  )
}
