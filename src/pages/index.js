import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Slider from "../components/homepage/Slider"
import HowItWorks from './../components/homepage/howItWorks';

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
      <Slider props={data} />
      <HowItWorks />
    </Layout>
  )
}
