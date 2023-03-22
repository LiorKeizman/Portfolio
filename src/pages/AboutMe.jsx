import myImg from '../assets/img/my-img1.jpg'
import React from "react";
// import {
//     BrowserRouter as Router
// } from "react-router-dom";
import { NavBarAbout } from '../components/NavBarAbout'
export const AboutMe = () => {
    return (
        <section className='about-page'>
            <div className='nav-about'>
            <NavBarAbout />
            </div>
            <section className="about-me">
                <div className="main">
                    <img src={myImg} alt="" />
                    <div className='about-text'>
                        <h1>Little about me</h1>
                        <h5>Web Developer</h5>
                        <p>Hi there, I'm Lior Keizman, a 22-year-old with a passion for web development.
                            I approach life with a positive attitude and plenty of energy, and I love tackling challenges
                            and pushing myself to learn and grow.</p>
                            <p>Before embarking on my web development journey,
                            I served as a commander in the border police force during my mandatory service in the army.
                            There, I developed my leadership and teamwork skills,
                            learning how to connect with people from all walks of life.</p>
                        <p> 
                            After my military service, I worked long hours at a high-tech factory,
                            gaining valuable experience in a fast-paced environment. Eventually,
                            I decided to pursue my passion for web development, and I couldn't be happier with my decision.
                            Building dynamic, innovative websites and applications is both challenging and rewarding,
                            and I'm excited to continue honing my skills and contributing to the tech industry.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}