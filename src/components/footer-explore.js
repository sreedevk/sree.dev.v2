import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const FooterExplore = () => (
  <StaticQuery query={
    graphql`
      query FooterMenuitems {
        allMenuitemsJson {
          edges {
            node {
              text
              url
            }
          }
        }
      }
    `
    }
    render={ data => (
      <div className="vnav-container">
        <h3 className="vnav-title">Explore</h3>
        <ul className="vnav">
          { getMenuItems(data) }
        </ul>
      </div>
    )}
  />
)

function getMenuItems(data){
  const menuitems = [];
  data.allMenuitemsJson.edges.forEach(function(menuitem){
    menuitems.push(<li key={menuitem.node.text}><Link to={menuitem.node.url}>{ menuitem.node.text }</Link></li>);
  });
  return menuitems;
}

export default FooterExplore
