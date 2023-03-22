import { useState, useEffect } from 'react'
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
    const [text, setText] = useState(' ')
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Full Stack', 'Front End']
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);
        return () => { clearInterval(ticker) }
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(100)
        }
    }

    return (
        <section className="banner" id="home">
            
            <Container>
                <Row className="align-items-center banner-row">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>{`Hi I'm Lior Keizman `}</h1>
                        <h1><span className="txt-rotate wrap">{text}</span></h1>
                        <p>My name is Lior Keizman and I'm an enthusiastic developer who thrives on collaborating with others to build solutions 
                            that exceed expectations and push boundaries. and am excited to contribute to a team
                             that values continuous learning and growth. </p>
                             <p>I will love to hear from you. Whether it's a job opportunity, or just a chat. 
                              <br />  Feel free to contact me.</p>
                              
                              <HashLink className='connect-link' to='#contact'>
                        <button 
                        
                        
                        
                        
                >Lets connect <ArrowRightCircle size={25} /></button>
                    </HashLink>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
           
        </section>
    )
}