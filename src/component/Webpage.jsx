import React from 'react'
import HomePage from './HomePage'
import Navbar from './Navbar'
import About from './About'
import Tools from './Tools'
import Project from './Project'
import Preloader from './Preloader'
import Contact from './Contact'
import Footer from './Footer'

const Webpage = () => {
    return (
        <div>
            <Preloader />
            <Navbar />
            <HomePage />
            <Tools />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Webpage
