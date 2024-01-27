import React, { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <a href='#homepage'>
                    <div className="logo-image">
                        <img src="/images/logo.png" alt="" />
                    </div>
                </a>
                <a href='#homepage'><h2>Chaitanya Choudhari</h2></a>
            </div>

            <div className="nav-bar-content">
                <div className={`nav-links ${menu ? "active-menu" : " "}`}>
                    <a href='#homepage' onClick={openMenu}><li>HOME</li></a>
                    <a href='#about' onClick={openMenu}><li>ABOUT</li></a>
                    <a href='#projects' onClick={openMenu}><li>PROJECTS</li></a>
                    <a href='#contact' onClick={openMenu}><li>CONTACT</li></a>
                </div>

                <div className="nav-menu">
                    {menu ?
                        <FaXmark onClick={openMenu} />
                        :
                        <FaBars onClick={openMenu} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
