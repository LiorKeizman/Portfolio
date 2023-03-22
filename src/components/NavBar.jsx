import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react"
import logo from '../assets/img/logo4.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
import navIcon5 from '../assets/img/nav-icon5.svg'
import navIcon6 from '../assets/img/telephone.svg'

import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(
    () => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)

    }, [])


  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/portfolio">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link href="#home" className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('home')} to="/portfolio">
              Home
            </Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Link className={activeLink === 'about' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('about')} to="/portfolio/about">
              About
            </Link>
          </Nav>
          {/* <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Link> */}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lior-keizman-7b99a8252/"><img src={navIcon1} alt="" /></a>
              <a href="tel:0546365833"><img src={navIcon6} alt="" /></a>
              <a href="https://github.com/LiorKeizman"><img src={navIcon5} alt="" /></a>
              <a href="https://www.instagram.com/lior_keizman/"><img src={navIcon3} alt="" /></a>
              <a rel="noopener noreferrer" target="_blank" href="mailto:lior.keizman1@gmail.com"
                title="Lior.Keizman@gmail.com"><img src={navIcon4} alt="" /></a>
            </div>
            <HashLink to='#contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )



}