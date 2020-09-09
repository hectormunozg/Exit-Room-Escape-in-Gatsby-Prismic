/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allPrismicPosts {
        edges {
          node {
            uid
            id
          }
        }
      }
      allPrismicPages {
        edges {
          node {
            uid
            id
          }
        }
      }
      allPrismicGames {
        edges {
          node {
            uid
            id
          }
        }
      }
      allPrismicMurderParties {
        edges {
          node {
            uid
            id
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allPrismicPages,
    allPrismicPosts,
    allPrismicGames,
    allPrismicMurderParties,
  } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allPrismicPages.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.uid,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  // Create post pages.
  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the uid to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allPrismicPosts.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.uid,
      component: slash(postTemplate),
      context: edge.node,
    })
  })

  // Create games pages.
  const gameTemplate = path.resolve(`./src/templates/game.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the uid to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allPrismicGames.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/juego/${edge.node.uid}`,
      component: slash(gameTemplate),
      context: edge.node,
    })
  })

  // Create games pages.
  const murderPartyTemplate = path.resolve(`./src/templates/murderParty.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the uid to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allPrismicMurderParties.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/mp/${edge.node.id}`,
      component: slash(murderPartyTemplate),
      context: edge.node,
    })
  })
}
