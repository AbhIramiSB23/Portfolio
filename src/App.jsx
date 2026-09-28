import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Project from "./Project"


function App() {
  

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      
    </>
  )
}

export default App
