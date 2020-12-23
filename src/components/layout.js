import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../assets/css/layout.css"
import '../assets/css/app.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

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
      <div className="page">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer /> 
      </div>
        
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
