import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillExclamationCircleFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react'
const Contact = () => {
  const form = useRef();
  const [emailSent,setEmailSent]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7eswvb4', 'template_j09gyck', form.current, '3OUOzxIPmARVoKHIO')
      .then((result) => {
        setEmailSent(true);;
      }, (error) => {
        setEmailSent(false);
      });
  };
  return (
    <section id='contact'>
      <h5>Send me something!</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='icon'/>
            <h4>Email</h4>
            <h5>yaimane2018@gmail.com</h5>
            <a href="mailto:yaimane2018@gmail.com">Send an email !</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='icon'/>
            <h4>LinkedIn</h4>
            <h5>Aimane ACHACH</h5>
            <a href="https://www.linkedin.com/in/aimane-achach-6739b3251/" target='_blank' rel="noreferrer">Go to my profile !</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <h5>07 00 32 65 50</h5>
            <a href="https://wa.me/+212700326550?text=urlencodedtext" target='_blank' rel="noreferrer">Message me !</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message : Feel Free !' required></textarea>
          <button type='submit' className='btn btn-primary'><div className="send">Send</div></button>
          <div className='socials'>
            <a href="https://www.linkedin.com/in/aimane-achach/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/AimaneACHACH/" target='_blank' rel="noreferrer"><FaGithub/></a>
          </div>
          {emailSent && (
            <p className="message-sent">{} Your message has been sent!</p>
          )}
        </form>
        
      </div>
    </section>
  )
}

export default Contact