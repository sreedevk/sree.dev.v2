import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AsciiPic from "../components/asciipic"
import Project from "../components/project"
import ProjectOverview from '../components/projects-overview.js'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="introduction-section">
      <div className="row index-row">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <p className="intro-text">
            A passionate Software Engineer, an eloquent orator & blogger with experience in multiple 
            disciplines of software engineering including Web Application Development, Game Development
            and Systems Programming.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <AsciiPic /> 
        </div>
      </div>
    </section>
    <section className="projects-overview">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="section-title">Projects</h3>
          <hr className="sectional-title-sideline" />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <ProjectOverview />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage;
