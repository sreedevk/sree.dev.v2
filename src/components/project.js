import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Project = ({ projectId, projectName, projectDescription, projectUrl, projectImage }) => {
  return(
    <div className="card">
      <img src={ `/images/projects/${projectImage}` } alt={projectName} />
      <div className="card-body">
        <h5 className="card-title">{ projectName }</h5>
        <p className="card-text">{ projectDescription } </p>
        <a href={ projectUrl } className="">view</a>
      </div>
    </div>
  );
}

export default Project;
