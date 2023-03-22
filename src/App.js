import './App.css';
import './assets/css/global.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AboutMe } from './pages/AboutMe'
import { HomePage } from './pages/HomePage'
function App() {
  return (
    <div className='App'>
  
      <Routes>
        <Route path='/portfolio' element={<HomePage/>} />
        <Route path='/portfolio/about' element={<AboutMe/>} />
      </Routes>
    </div>
    
  )
}

export default App;
