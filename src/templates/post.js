import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Nav from "../components/header/nav"

export const query = graphql`
  query MyPost($id: String) {
    allPrismicPosts(filter: { id: { eq: $id } }) {
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
            featured_image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

const Post = props => {
  const postTitle = props.data.allPrismicPosts.edges[0].node.data.title.raw
  const content = props.data.allPrismicPosts.edges[0].node.data.content.raw
  const image =
    props.data.allPrismicPosts.edges[0].node.data.featured_image.fluid.src

  return (
    <>
      <Nav />
      <img src={image} alt={postTitle} />
      <RichText key="1" render={postTitle} />
      <RichText key="2" render={content} />
    </>
  )
}

export default Post
