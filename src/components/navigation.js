import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Navigation = () => (
  <StaticQuery query={
    graphql`
      query Menuitems {
        allMenuitemsJson {
          edges {
            node {
              text
              url
            }
          }
        }
      }`
    }
    render={ data => (
      <nav>
        <ul>{getMenuItems(data)}</ul>
      </nav>
    )}
  />
)

function getMenuItems(data){
  const menuItems = [];
  data.allMenuitemsJson.edges.forEach( menuitem => {
    menuItems.push(<li key={menuitem.node.url}><Link to={menuitem.node.url}>{menuitem.node.text}</Link></li>); 
  });
  return menuItems;
}

export default Navigation;
