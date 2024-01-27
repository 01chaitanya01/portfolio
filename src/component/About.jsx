import React from 'react'
import "../style/about.css"

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>ABOUT_ME</h1>
            <p className='about-text'>Hello! This is my About section, where you get to know a bit about me, like providing insights into my tech stack and skills, showcasing proficiency in various technologies.</p>
            <div className="about-content">
                <div className="about-text-content">
                    <h2>Know about me</h2>
                    <p>I'm Chaitanya, a <span>frontend developer</span> with a strong grasp of backend technologies and a foundational knowledge of <span>MySQL databases</span>. While I excel in creating visually appealing and user-friendly interfaces, my proficiency also includes a solid foundation in backend technologies. I boast a proficient understanding of <span>MySQL databases</span>, contributing to a holistic approach in developing robust and efficient web applications.</p>
                    <br />
                    <p>I'm currently exploring machine learning. I've put this into practice by working on various machine learning projects. This showcases my dedication to keeping up with the latest in technology. Having successfully completed several web development projects, I bring a mix of creativity and technical know-how to every task.</p>
                </div>

                <div className="about-skills">
                    <h2>Skills & Tech Stack</h2>

                    <div className="skill-list">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Express</p>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Python</p>
                        <p>Node js</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>Flask</p>
                        <p>SQL</p>
                        <p>Terminal</p>
                        <p>Machine Learning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
