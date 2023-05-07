import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.jpg'
import Socials from './socials'
import Resume from './resume'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>✌️Hello I'm</h5>
        <h1>Aimane ACHACH😊</h1>
        <h5 className="text-light">Cloud & IoT engineering student at INPT</h5>
        <CTA/>
        <Resume/>
      <Socials/>
      </div>
      <div className="me">
      <img src={ME} alt="" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header