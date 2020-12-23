import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Project = ({ projectId, projectName, projectDescription, projectUrl, projectImage }) => {
  return(
    <a href={ projectUrl }>
      <div className="card project-info-card">
        <img src={ `/images/projects/${projectImage}` } alt={projectName} />
        <div className="card-img-overlay text-white">
          <h3 className="card-title">{ projectName }</h3>
          <p className="card-text">{ projectDescription } </p>
        </div>
      </div>
    </a>
  );
}

export default Project;
