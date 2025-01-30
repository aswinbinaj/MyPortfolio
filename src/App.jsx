import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/ContactSection/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
