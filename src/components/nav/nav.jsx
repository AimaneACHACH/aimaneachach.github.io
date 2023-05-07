import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {RiFileListLine} from 'react-icons/ri'
import {SlNotebook} from 'react-icons/sl'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import { useState } from 'react'



const Nav = () => {
  const[activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#top" onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''} title='Home'><div className='cell'><BiHome/><small>Home</small></div></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title='About Me'><div className='cell'><FiUser/><small>About</small></div></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} title='Skills'><div className='cell'><RiFileListLine/><small>Skills</small></div></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title='My Portfolio'><div className='cell'><SlNotebook/><small>Projects</small></div></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''} title='Testimonials'><div className='cell'><MdOutlineEmojiPeople/><small>Testimonials</small></div></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title='Contact'><div className='cell'><HiOutlineMail/><small>Contact</small></div></a>
    </nav>
  )
}

export default Nav