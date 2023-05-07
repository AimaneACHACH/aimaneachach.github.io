import React from 'react'
import './about.css'
import ME from '../../assets/photo.jpg'
import {BsTools} from 'react-icons/bs'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5 className='topTitles'>
        Careful! Important person ahead
      </h5>
      <h2>
        About Me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon'/>
              <h5>Education</h5>
              <small>Preparatory Classes MP then INPT</small>
            </article>
            
            <article className='about__card'>
              <BsTools className='about__icon'/>
              <h5>Tools</h5>
              <small>React, Firebase, Git</small>
            </article>
            
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Projects</h5>
              <small>Experienced with few school and personal project</small>
            </article>
          </div>
          <p className='aboutP'>"I am a full-time computer science student at INPT, specializing in cloud and IoT engineering. I have experience in web development and programming with Python, Java, and other languages. As a robotics enthusiast, I am comfortable with C++. Additionally, I have experience in design, as I frequently use Adobe CC in my hobbies, which include videography, compositing, and photography.🙂" </p>
          <a href="#contact" className='btn primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About