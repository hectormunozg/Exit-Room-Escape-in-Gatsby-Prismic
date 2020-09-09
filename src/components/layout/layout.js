/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
/* import { useStaticQuery, graphql } from "gatsby" */
import { theme } from "./theme"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"

import Header from "../header/header"

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #000000;
  }

`

const Layout = ({ children }) => {
  /*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
