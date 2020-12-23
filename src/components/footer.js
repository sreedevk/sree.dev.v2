import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer className="row">
    <div className="col-12">
      <div className="copyright-info">
        © {new Date().getFullYear()} Sreedev Kodichath | All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
