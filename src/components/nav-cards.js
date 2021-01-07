import React from "react"
import ProjectsImg from '../images/projects.png'
import PostsImg from '../images/posts.png'
import ResumeImg from '../images/resume.jpg'

const NavCards = () => (
  <div class="row nav-cards">
    <div className="col-md-4 col-lg-4 col-sm-12">
      <a href="/#projects">
        <div className="card bg-dark text-white">
          <img src={ProjectsImg} className="card-image"/>
          <div className="card-img-overlay">
            <h1 className="card-title">Projects</h1>
          </div>
        </div>
      </a>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-12">
      <a href="/#recent-posts">
        <div className="card bg-dark text-white">
          <img src={PostsImg} className="card-image" />
          <div className="card-img-overlay">
            <h1 className="card-title">Posts</h1>
          </div>
        </div>
      </a>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-12">
      <a href={"/resume_of_sreedev_kodichath.pdf"}>
        <div className="card bg-dark text-white">
          <img src={ResumeImg} className="card-image" />
          <div className="card-img-overlay">
            <h1 className="card-title">Resumé</h1>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default NavCards;
