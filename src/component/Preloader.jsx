import React from 'react'
import "../style/preloader.css"
import preloder from "../images/preloader.gif"

const Preloader = () => {
    return (
        <div className='preloader'>
            <div className="loading-img">
                <img src={preloder} alt="" />
            </div>
        </div>
    )
}

export default Preloader
