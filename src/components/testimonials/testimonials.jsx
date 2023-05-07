import React from 'react'

import './testimonials.css'

import PERSON from '../../assets/me2.jpg'

// import Swiper core and required modules
import { Pagination , Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 



const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What do people say about me?</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Navigation,Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="person">
            <img src={PERSON} alt="" />
            </div>
            <h5>I'm still woking on this part</h5>
            <small className='text'>If we have had the pleasure of meeting or working together, I would greatly appreciate your feedback  . Please feel free to share your thoughts about me below.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="person">
            <img src={PERSON} alt="" />
            </div>
            <h5>I'm still woking on this part</h5>
            <small className='text'>Don't be shy</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="person">
            <img src={PERSON} alt="" />
            </div>
            <h5>I'm still woking on this part</h5>
            <small className='text'>You can write whatever you want!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials