import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6k928k2', 'template_1d6ek1s', form.current, {
            publicKey: 'i0TRIWekKwq4hOiri'
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>


            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='user_name' />
                    <input type="email" className="email" placeholder='Your Email' name='user_email' />
                    <textarea name="message" className="msg" cols="30" rows="10" placeholder='User Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100025735160971" target="_blank" rel="noopener noreferrer" className="link">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://x.com/RajeevR16816742" target="_blank" rel="noopener noreferrer" className="link">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/ranjan.rajeev12/" target="_blank" rel="noopener noreferrer" className="link">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="link">
                            <img src={Youtube} alt="Youtube" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;