import React from 'react'
import "../style/projects.css"

import open_summarizer from "../images/open_summarizer.png"
import open_search1 from "../images/open_search1.png"

const Project = () => {
  return (
    <div className='projects' id='projects'>
      <h1>PROJECTS</h1>
      <div className="project-cards">
        <div className="project-card">
          <div className="project-img">
            <img src={open_search1} alt="" />
          </div>
          <div className="project-description">
            <h2>Open Search</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab eius iusto voluptas recusandae dolorem dolor neque quos soluta at?</p>
            <a><button className="btn">GitHub Link</button></a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={open_summarizer} alt="" />
          </div>
          <div className="project-description">
            <h2>Text Summarizer</h2>
            <p>It is the text summarizer made in python for effective and accurate text summarization</p>
            <a><button className="btn">GitHub Link</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
