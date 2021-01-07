import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
      <section className="projects-overview">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 section-title-container">
            <h1 className="section-title" id="projects">Projects</h1>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="projects-overview-container row">{ getProjects(data) }</div>
          </div>
        </div>
      </section>
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
