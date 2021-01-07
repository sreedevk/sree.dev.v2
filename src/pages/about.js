import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Social from '../components/social.js'
import AboutImage from '../images/about-sreedev.jpg'
import Signature from '../images/sreedev-signature.jpg'
import NavCards from '../components/nav-cards.js'

const AboutPage = () => (
  <Layout> 
    <SEO title="About" />
    <div className="row">
      <div className="col-12">
        <h3 className="page-title">About</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="about-text">
              Hello! I am Sreedev Kodichath a software engineer current working in Bengaluru, India.
              Programming is not just a profession to me. I thrive on the pleasure in innovating 
              and implementing software solutions. My work has never been restricted to a single
              platform or industry and this I believe has given me a plethora opportunities
              to expand my horizons expiditiously I am an ardent adovacate of open source software and
              strongly believe that it has the power to work miracles. Moreover, the transparency offered
              by open source software is necessary to abolish the stereotypical skepticism associated
              with technology and gadgetry. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <Social />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="row">
          <div className="col-12">
            <img src={AboutImage} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img src={Signature} />
            <h3 className="signature-name">Sreedev Kodichath</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <NavCards />
      </div>
    </div>
  </Layout>
)

export default AboutPage;
