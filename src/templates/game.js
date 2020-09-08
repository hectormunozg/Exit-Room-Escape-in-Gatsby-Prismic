import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Nav from "../components/header/nav"

export const query = graphql`
  query MyGame($id: String) {
    allPrismicGames(filter: { id: { eq: $id } }) {
      edges {
        node {
          uid
          id
          data {
            show_bookings
            title {
              raw
            }
            short_description {
              raw
            }
            players {
              raw
            }
            featured_image {
              fluid {
                src
              }
            }
            duration {
              raw
            }
            description {
              raw
            }
            booking_embed {
              raw
            }
          }
        }
      }
    }
  }
`

const Game = props => {
  console.log(props)
  const gameTitle = props.data.allPrismicGames.edges[0].node.data.title.raw
  const content = props.data.allPrismicGames.edges[0].node.data.description.raw
  const image =
    props.data.allPrismicGames.edges[0].node.data.featured_image.fluid.src

  return (
    <>
      <Nav />
      <img src={image} alt={gameTitle} />
      <RichText render={gameTitle} />
      <RichText render={content} />
    </>
  )
}

export default Game
