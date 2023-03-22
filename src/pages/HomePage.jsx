import '../App.css';
import '../assets/css/global.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../components/NavBar'
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
export const HomePage = () => {
  return (
    <div className='home'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  )
}


