import React from 'react'
import "../style/footer.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="footer-logo-img">
                        {/* <img src="/images/logo.png" alt="" /> */}
                    </div>
                    <h1>Chaitanya Choudhari</h1>
                    <p>A Frontend Web Developer committed to creating polished and effective user interfaces that drive the success of websites and web applications.</p>
                </div>

                <div className="footer-social">
                    <div className="footer-social-cards">
                        <a href='https://github.com/01chaitanya01' target='blank'><FaGithub /> <span>01chaitanya01</span></a>
                        <a href='https://www.linkedin.com/in/chaitanya-choudhari-230767229' target='blank'><FaLinkedin /><span>chaitanyachoudhari</span></a>
                        <a href='mailto: chaitanyachoudhari01@gmail.com'><FaEnvelope /><span>chaitanyachoudhari01@gmail.com</span></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright 2024. Made by <a style={{ color: "#e9ecef", borderBottom: "1px solid #e9ecef"}} href="chaitanyachoudhari.me" target='blank'>Chaitanya Choudhari</a></p>
            </div>
        </div>
    )
}

export default Footer
