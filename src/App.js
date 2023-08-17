import React from 'react'

import './app.css';


import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Project from './pages/project/Project';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/services' element={<Services/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/project' element={<Project/>}/>
    </Routes>
 </BrowserRouter>
  )
}

export default App