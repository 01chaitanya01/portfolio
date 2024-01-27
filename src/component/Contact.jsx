import React, { useState } from 'react';
import axios from 'axios';
import "../style/contact.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        receiverEmail: 'choudharichaitu0101@gmail.com'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/contactform', formData);

            console.log(response.data.message);
            notifySuccess(response.data.message);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (error) {
            console.error('Error sending contact form:', error);
            notifyError(error.message)
        }

        console.log(formData)
    };

    const notifySuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 2000,
    });

    const notifyError = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 2000,
    });

    return (
        <div className='contact' id='contact'>
            <h1>Contact Form</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input name='name' type="text" placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input name='email' type="email" placeholder='Email ID' value={formData.email} onChange={handleChange} required />
                    <input name='subject' type="text" placeholder='Subject' value={formData.subject} onChange={handleChange} required />
                    <textarea name="message" cols="30" rows="15" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
                    <button className='btn' type='submit'>Send</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
