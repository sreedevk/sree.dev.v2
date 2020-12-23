import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import IntroductionSection from '../components/introduction-section.js'
import ProjectOverview from '../components/projects-overview.js'
import RecentPosts from '../components/recent-posts.js'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionSection />
    <ProjectOverview />
    <RecentPosts />
  </Layout>
)

export default IndexPage;
