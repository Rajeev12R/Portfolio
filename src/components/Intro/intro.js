import React from 'react'
import './intro.css';
import bg from '../../assets/RajeevProfile.png';
import btnImg from '../../assets/hireme.png';
import docImg from '../../assets/bx--file-blank.svg';
import cvFile from '../../assets/Rajeev_Ranjan_cv.pdf';
import { Link } from 'react-scroll';
const Intro = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Rajeev_CV.pdf';
        link.click();
    };
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'><span className='dash'>&mdash;&nbsp;</span>Hello,</span>
                <scan className="introText">I'm <span className="introName">Rajeev</span><br />Aspiring Software Engineer</scan>
                <p className="introPara">I'm a 2nd-year B.Tech student at LPU. <br /> Skilled in web development with experience in creating<br /> visually appealing  and user-friendly websites. <br /> I am continuously learning new skills to enhance my skills.</p>
            <div className="btnContainer">
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}> <button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire Me</button></Link>
                <button className="btn" onClick={handleDownload}>
                        <img src={docImg} alt="" className='docImg' />View CV
                    </button>
            </div>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;