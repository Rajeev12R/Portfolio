import React from 'react'
import './skill.css';
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span><br />
            <span className="skillDesc">Welcome to my corner of the web !<br /> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Canva, Adobe Photoshop and Illustrator.</span><br />
            <div className="skillBars">

                <div className="skillBar">
                    <img src={UIdesign} alt="UI Desgin" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Creating beautiful, user-friendly interfaces with attention to detail and empathy for user needs.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Webdesign} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Creating captivating, functional websites that engage users and elevate brand presence.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Appdesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Developing intuitive, visually appealing mobile applications that enhance user experience and drive engagement.</p>
                    </div>
                </div>

            </div>




        </section>
    );
}

export default Skills;