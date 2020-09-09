import React from "react"
import { graphql } from "gatsby"
import { RichText, Date } from "prismic-reactjs"
	
import Nav from "../components/header/nav"

export const query = graphql`
  query MyMurderParty($id: String) {
    allPrismicMurderParties(filter: { id: { eq: $id } }) {
      edges {
        node {
          uid
          id
          data {
            date
            google_maps {
              latitude
              longitude
            }
            players {
              character
              player_name {
                raw
              }
            }
            title {
              raw
            }
            address {
              raw
            }
          }
        }
      }
    }
  }
`

const MurderParty = props => {
  console.log(props)
  const gameTitle =
    props.data.allPrismicMurderParties.edges[0].node.data.title.raw

  const players = props.data.allPrismicMurderParties.edges[0].node.data.players
  console.log(players)

  const date = props.data.allPrismicMurderParties.edges[0].node.data.date
  const timestamp = Date(date)

  const characters = require('../schemas/murderPartyCharacters.json')
  console.log(characters)
 
  var formattedTimestamp = Intl.DateTimeFormat('es-ES',{
    hour: 'numeric',
    minute: '2-digit',
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(timestamp)

  return (
    <>
      <Nav />
      <RichText key="1" render={gameTitle} />
      <h2>{formattedTimestamp}</h2>
    </>
  )
}

export default MurderParty
