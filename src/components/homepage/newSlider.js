import React from 'react'
import { useStaticQuery } from 'gatsby';

import BackgroundSlider from 'gatsby-image-background-slider'

const Slider = ({ children }) => (
  <>
    <main>{children}</main>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "slider"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      

      // pass down standard element props
      style={{
        height: "500px"
      }}           
    > 

    <h1>mierda</h1>
      
    </BackgroundSlider>
  </>
)  
export default Slider