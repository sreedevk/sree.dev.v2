import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SocialIcon from './social-icon.js'

const Social = () => (
  <StaticQuery query={
    graphql`
      query Socialmedia {
        allSocialmediaJson {
          edges {
            node {
              id
              name
              handle
              url
              iconClass
              color
            }
          }
        } 
      }
    `}
    render={ data => (
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          { getAllSocialIcons(data) }
        </div>
      </div>
    )}
  />
)

function getAllSocialIcons(data) {
  const social_icons = [];
  data.allSocialmediaJson.edges.forEach((sIcon) => {
    social_icons.push(<SocialIcon key={sIcon.node.name} socialHandle={sIcon.node.handle} socialName={sIcon.node.name} socialLink={sIcon.node.url} socialIcon={sIcon.node.iconClass} socialColor={sIcon.node.color}/>)
  });
  return  social_icons;
}



export default Social
