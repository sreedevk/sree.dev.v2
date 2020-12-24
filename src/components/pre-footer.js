import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import QrCode from '../images/sreedev-qr.png'

import FooterExplore from './footer-explore.js'
import FooterResources from './footer-resources.js'

const PreFooter = () => (
  <div className="row">
    <div className="col-lg-2 col-md-2 col-sm-12">
      <FooterExplore />
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12">
      <FooterResources />
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="footer-contact-card-container">
        <ul className="footer-contact-card">
          <li className="footer-name">Sreedev Kodichath</li>
          <li className="footer-designation">Sr. Software Engineer, <Link to="https://tarkalabs.com">TarkaLabs</Link></li>
          <li className="footer-email"><a href="mailto:sreedevpadmakumar@gmail.com">sreedevpadmakumar@gmail.com</a></li>
          <li className="footer-phone"><a href="tel:+919600928275">+91-9600928275</a></li>
          <li className="footer-location">Bengaluru, India (KA).</li>
        </ul>
      </div>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-12">
      <img src={QrCode} className="qr-code"/>
    </div>
  </div>  
)

export default PreFooter
