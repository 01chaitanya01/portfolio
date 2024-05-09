import React from 'react'
import "../style/projects.css"

import open_summarizer from "../images/open_summarizer.png"
import open_search1 from "../images/open_search1.png"
import data_visualization from "../images/data_visualization.png"
import user_auth from "../images/use_auth.png"
import contact_form from "../images/contact_form.png"

const Project = () => {
  return (
    <div className='projects' id='projects'>
      <h1>PROJECTS</h1>

      <div className="project-cards">

        <div className="project-card">
          <div className="new-project-image">
            <img src={data_visualization} alt="" />
          </div>
          <div className="project-description">
            <h2>Data Visualization web app</h2>
            <p>The Data Visualization App serves as a flexible tool for data analysts. It simplifies graph plotting
              using Matplotlib and Streamlit, offering over 5 pre-designed graph types. Additionally, it achieves
              a conversion rate of 95% in transforming CSV files into Excel format.</p>
            <a href='https://github.com/01chaitanya01/Data-Visualization-App.git' target='_blank'><button className="btn">GitHub Link</button></a>
          </div>
        </div>

        <div className="project-card">
          <div className="new-project-image">
            <img src={user_auth} alt="" />
          </div>
          <div className="project-description">
            <h2>Full stack application with user authentication</h2>
            <p>Developed a dynamic Full-stack application, overseeing its entire lifecycle, with a focus on implementing strong user authentication features. Integrated secure login, registration, and password recovery functionalities seamlessly, prioritizing a smooth user experience and heightened security protocols.</p>
            <a href='https://github.com/01chaitanya01/Full-stack-application-with-user-authentication.git' target='_blank'><button className="btn">GitHub Link</button></a>
          </div>
        </div>

        <div className="project-card">
          <div className="new-project-image">
            <img src={contact_form} alt="" />
          </div>
          <div className="project-description">
            <h2>Contact Form component</h2>
            <p>A Contact component, utilizing React for the frontend and Express for the backend, to seamlessly incorporate contact forms into web applications. This endeavor led to a notable 60% increase in daily user engagement, streamlining the form submission process. Furthermore, the component is engineered for effortless integration into any website, offering a flexible solution for user interaction  .</p>
            <a href='https://github.com/01chaitanya01/Contact_Form_component.git' target='_blank'><button className="btn">GitHub Link</button></a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={open_search1} alt="" />
          </div>
          <div className="project-description">
            <h2>Open Search</h2>
            <p>Created 'Open Search,' a web browsing solution built with Python using the Flask framework and OpenAI API. This unique platform delivers text-based search outcomes for diverse queries, ensuring a smooth and efficient browsing experience.</p>
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
            <a href='https://github.com/01chaitanya01/open_summarizer.git' target='_blank'><button className="btn">GitHub Link</button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
