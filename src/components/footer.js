import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PreFooter from './pre-footer.js'

const Footer = () => (
  <footer>
    <div className="row pre-footer">
      <div className="col-12">
        <PreFooter />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="copyright-info">
          © {new Date().getFullYear()} Sreedev Kodichath | All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
