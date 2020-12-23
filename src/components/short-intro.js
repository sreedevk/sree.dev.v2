import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const ShortIntro = () => (
  <StaticQuery query={
    graphql`
      query Sitedata {
        allSitedataJson(filter: {content_tag: {eq: "short-intro"}})  {
          edges {
            node {
              content 
            }
          }
        }
      }
    `}
    render={ data => (
      <p className="intro-text">{ getShortIntro(data) }</p>
    )}
  />
)

function getShortIntro(data){
  return data.allSitedataJson.edges[0].node.content
}

export default ShortIntro
