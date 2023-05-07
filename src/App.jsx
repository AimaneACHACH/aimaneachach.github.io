import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Testomonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import BG from './components/fullbg/fullbg'


const App = () => {
  return (
    <>  
        
        <BG/>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Testomonials/>
        <Contact/>
        
    </>
  )
}

export default App