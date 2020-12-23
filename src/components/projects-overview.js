import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Project from './project'

const ProjectOverview = () => (
  <StaticQuery query={
    graphql`
      query Projects {
        allProjectsJson {
          edges {
            node {
              name
              description
              image
              url
            }
          }
        }
      }
    `}
    render={ data => (
      <div className="projects-overview-container row">{ getProjects(data) }</div>
    )}
  />
)

function getProjects(data) {
  const projects = [];
  data.allProjectsJson.edges.forEach((project) => { 
    projects.push(
      (<div className="col-md-6 col-lg-4 col-sm-12" key={project.node.name}><Project projectName={project.node.name} projectDescription={project.node.description} projectUrl={ project.node.url } projectImage={ project.node.image } /></div>))
  });
  return projects;
}

export default ProjectOverview
