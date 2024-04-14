import React from 'react'
import './intro.css';
import bg from '../../assets/me.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <scan className="introText">I'm <span className="introName">Rajeev</span><br/>Web Developer</scan>
                <p className="introPara">I'm a skilled Web Developer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;