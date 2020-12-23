import React from 'react'

const BlogSummary = ({ postTitle, postShortDescription, postImage, postUrl, postCreatedAt, bannerSize }) => (
  <div className={`col-lg-${bannerSize} col-md-6 col-sm-12`}>
    <div className="card blog-summary-card">
      <img src={ `/images/recent-posts/${postImage}` } alt={postTitle} />
      <div className="card-img-overlay text-white">
        <h3 className="card-title">{ postTitle }</h3>
        <p className="card-text">{ postShortDescription } </p>
        <h4><a className="read-more-link" href={postUrl}>Read More -></a></h4>
      </div>
    </div>
  </div>
)

export default BlogSummary
