import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const AsciiPic = () => (
  <React.Fragment>
    <div className="asciipic-embed">
      <embed src="/files/ascii-image.txt" type="text/plain" className="ascii-image" />
    </div> 
  </React.Fragment>
)

export default AsciiPic;
