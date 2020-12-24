import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const FooterResources = () => (
  <StaticQuery query={
    graphql`
      query FooterResources {
        allResourceLinksJson {
          edges {
            node {
              id
              text
              url
              show
            }
          }
        }
      }
    `
    }
    render={ data => (
      <div className="footer-resources">
        <h3 className="vnav-title">Resources</h3>
        <ul className="vnav">
          {getAllFooterResources(data)}
        </ul>
      </div>
    )}
  />
)

function getAllFooterResources(data) {
  const footer_resources = [];
  data.allResourceLinksJson.edges.forEach(function(data){
    if(data.node.show) {
      footer_resources.push(<li key={data.node.text}><Link to={data.node.url}>{data.node.text}</Link></li>);
    }
  });
  return footer_resources;
}

export default FooterResources
