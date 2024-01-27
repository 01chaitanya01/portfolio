import React from 'react'
import "../style/homepage.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='homepage' id='homepage'>
      <div className="homepage-heading">
        <h1>Hey, i'm Chaitanya Choudhari</h1>
        <p>A Frontend Web Developer committed to creating polished and effective user interfaces that drive the success of websites and web applications.</p>

        <a href="#about">
          <button className="ui-btn">
            <span> EXPLORE </span>
          </button>
        </a>

      </div>

      <div className='social-links'>
        <div className="social-cards">
          <a href='https://github.com/01chaitanya01' target='blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/chaitanya-choudhari-230767229' target='blank'><FaLinkedin /></a>
          <a href='mailto: chaitanyachoudhari01@gmail.com'><FaEnvelope /></a>
        </div>
      </div>
    </div>
  )
}

export default HomePage
