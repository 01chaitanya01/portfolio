import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Webpage from './component/Webpage';

// import HomePage from './component/HomePage'
// import Navbar from './component/Navbar'
// import About from './component/About'
// import Tools from './component/Tools'
// import Project from './component/Project'
// import Preloader from './component/Preloader'
// import Contact from './component/Contact'
// import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Routes>
            <Route path='/' element={<Webpage />} />
          </Routes>
        </Router>

        {/* <Preloader />
        <Navbar />
        <HomePage />
        <Tools />
        <About />
        <Project />
        <Contact />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
