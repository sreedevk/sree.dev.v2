import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <header className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h1 className="site-title"> {siteTitle} <span className="title-underscore">_</span></h1>
      <h4>Senior Software Engineer. Blogger. Radio Enthusiast</h4>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Navigation />      
    </div>
  </header>
)

export default Header
