import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Gray from './themes/Gray'  // fixed import (default export)
import { Header } from "./Header"
import "./layout.css"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
