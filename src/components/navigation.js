import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
)

export default Navigation;
