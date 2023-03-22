import Carousel from 'react-multi-carousel';
import React from "react";
import 'react-multi-carousel/lib/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import jsImg from '../assets/img/js.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import vue from '../assets/img/vue.svg'
import react from '../assets/img/react.svg'
import angular from '../assets/img/angular.svg'
import jquery from '../assets/img/jquery.svg'
import typescript from '../assets/img/typescript.svg'
import redux from '../assets/img/redux.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import sass from '../assets/img/sass.svg'
import mongodb from '../assets/img/mongo.svg'
import nodejs from '../assets/img/nodejs.svg'
import express from '../assets/img/express.svg'
import mysql from '../assets/img/mysql.svg'
import postman from '../assets/img/postman.svg'
import npm from '../assets/img/npm.svg'
import axios from '../assets/img/axios.svg'
import git from '../assets/img/git.svg'
import tailwind from '../assets/img/tailwind.png'
import es6 from '../assets/img/es6.svg'




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 2
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Over the course of my learning as a developer, I have had the opportunity
                                 to work with a diverse range of technologies and platforms.
                                  From front-end technologies to back-end languages. 
                                   I am eager to apply my acquired skills and continue to learn and grow as a developer. </p>
                            <Carousel slidesToSlide={2} responsive={responsive} infinite={true} className='skills-slider'>
                                <div className="item">
                                <img src={html} alt="image1" />
                                <h5>Html</h5>
                                </div>
                                <div className="item">
                                <img src={jsImg} alt="image2" />
                                <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                <img src={css} alt="image3" />
                                <h5>Css</h5>
                                </div>
                                <div className="item">
                                <img src={vue} alt="image1" />
                                <h5>Vue</h5>
                                </div>
                                <div className="item">
                                <img src={react} alt="image1" />
                                <h5>React</h5>
                                </div>
                                <div className="item">
                                <img src={angular} alt="image1" />
                                <h5>Angular</h5>
                                </div>
                                <div className="item diff">
                                <img src={jquery} alt="image1" />
                                <h5>Jquery</h5>
                                </div>
                                <div className="item">
                                <img src={typescript} alt="image1" />
                                <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                <img src={redux} alt="image1" />
                                <h5>Redux</h5>
                                </div>
                                <div className="item">
                                <img src={bootstrap} alt="image1" />
                                <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                <img src={sass} alt="image1" />
                                <h5>Sass</h5>
                                </div>
                                <div className="item">
                                <img src={mongodb} alt="image1" />
                                <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                <img src={nodejs} alt="image1" />
                                <h5>Node.js</h5>
                                </div>
                                <div className="item exp">
                                <img src={express} alt="image1" />
                                <h5>Express</h5>
                                </div>
                                <div className="item">
                                <img src={mysql} alt="image1" />
                                <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                <img src={postman} alt="image1" />
                                <h5>Postman</h5>
                                </div>
                                <div className="item npm">
                                <img src={npm} alt="image1" />
                                <h5>Npm</h5>
                                </div>
                                <div className="item">
                                <img src={axios} alt="image1" />
                                <h5>Axios</h5>
                                </div>
                                <div className="item">
                                <img src={git} alt="image1" />
                                <h5>Git</h5>
                                </div>
                                <div className="item">
                                <img src={tailwind} alt="image1" />
                                <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                <img src={es6} alt="image1" />
                                <h5>ES6</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
            <img className="background-image-right" src={colorSharp2} alt="colorsharp" />

        </section>
    )
}