import React from "react"
import SEO from "../components/seo"
import '../assets/css/fullscreen.css'

const NotFoundPage = () => (
  <div className="full-screen">
    <SEO title="404: Not found" />
    <div className="content404">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </div>
)

export default NotFoundPage
