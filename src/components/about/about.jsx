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
              <small>React, Firebase, Git, AWS, Terraform</small>
            </article>
            
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Projects</h5>
              <small>Experienced with few school and personal project</small>
            </article>
          </div>
          <p className='aboutP'>"As a full-time computer science student specializing in cloud and IoT engineering at INPT, I bring a wealth of knowledge and enthusiasm to the table. With a solid background in cloud computing and services, web development and programming languages such as Python, Java etc. I am comfortable tackling complex challenges in these areas. Furthermore, my passion for robotics has led me to become proficient in C++, allowing me to explore the intersection of software and hardware. In addition to my technical skills, I have a creative side, frequently using Adobe CC to pursue my hobbies of videography, compositing, and photography. I am excited to connect with like-minded professionals and contribute to innovative projects in the field.🙂" </p>
          <a href="#contact" className='btn primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About