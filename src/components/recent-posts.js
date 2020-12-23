import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import BlogSummary from './blog-summary.js'

const RecentPosts = () => (
  <StaticQuery query={
    graphql`
      query Recentposts {
        allRecentpostsJson {
          edges {
            node {
              id
              title
              metaDescription
              image
              url
              createdAt
              bannerSize
            }
          }
        }
      }
    `
    }
    render={ data => (
      <section className="blog-summary-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>Recent Posts</h1>
          </div>
        </div>
        <div className="row">
          { getAllRecentPosts(data) }
        </div>
      </section>
    )}
  />
)

function getAllRecentPosts(data) {
  const recent_posts = []
  data.allRecentpostsJson.edges.forEach((blog_post) => {
    recent_posts.push(<BlogSummary key={blog_post.node.id} postTitle={blog_post.node.title} postShortDescription={blog_post.node.metaDescription} postImage={blog_post.node.image} postUrl={blog_post.node.url} postCreatedAt={blog_post.node.createdAt} bannerSize={blog_post.node.bannerSize} />)
      });
  return recent_posts;
}

export default RecentPosts