import React from 'react'
import ShortIntro from '../components/short-intro.js'
import AsciiPic from "../components/asciipic"
import Social from "../components/social.js"

const IntroductionSection = () => (
  <section className="introduction-section">
    <div className="row index-row">
      <div className="col-md-6 col-lg-6 col-sm-12">
        <ShortIntro />
        <Social />
      </div>
      <div className="col-md-6 col-lg-6 col-sm-12 asciipic-container">
        <AsciiPic /> 
      </div>
    </div>
  </section>
)

export default IntroductionSection
