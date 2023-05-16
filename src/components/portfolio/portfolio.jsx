import React from 'react'
import './portfolio.css'
import Weather from '../../assets/projects/weather.png'
import Quotes from '../../assets/projects/quote.png'
import ThisSite from '../../assets/projects/ThisSite.png'
import FileSystem from "../../assets/projects/fileSystem.png"
import Wegiv2 from '../../assets/projects/wegiv2.png'
import { useState } from 'react'
import Wegiv1 from '../../assets/projects/wegiv1.png'
import Wegiv3 from '../../assets/projects/wegiv3.png'
import Wegiv4 from '../../assets/projects/wegiv4.png'
import Wegiv5 from '../../assets/projects/wegiv5.png'
import Wegiv6 from '../../assets/projects/wegiv6.png'
import Wegiv7 from '../../assets/projects/wegiv7.png'
// import Swiper core and required modules
import { Pagination , Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 


const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section id='portfolio'>
       {isOpen && <div className="wegiv">
      <button className="wegivClose btn primary" onClick={handleClick}>Close</button>
        <Swiper className="wegivSwiper"
      modules={[Navigation,Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv6} alt="" />
        </SwiperSlide>
        <SwiperSlide className='wegivSwiperSlide'>
            <img src={Wegiv7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>  }
      <h5>Yesss I made that</h5>
      <h2>My Recent Work</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Wegiv2} alt="" />
          </div>
          <h3>WeGiv - Votre plateforme de partage de bien local</h3>
          <div className='cta'>
          <div className='btn primary' onClick={handleClick}>Take a look</div></div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ThisSite} alt="" />
          </div>
          <h3>My Portfolio Website</h3>
          <div className='cta'><a href="https://github.com/AimaneACHACH/aimaneachach.github.io" className='btn' target='_blank' rel="noreferrer">Github</a></div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Weather} alt="" />
          </div>
          <h3>The Weather Now</h3>
          <div className='cta'><a href="https://github.com/AimaneACHACH/the-weather-now" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://aimaneachach.github.io/the-weather-now/" className='btn primary' target='_blank' rel="noreferrer">Take a look</a></div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Quotes} alt="" />
          </div>
          <h3>Random Quote Generator</h3>
          <div className='cta'><a href="https://github.com/AimaneACHACH/random-quote-mchine" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://aimaneachach.github.io/random-quote-mchine/" className='btn primary' target='_blank' rel="noreferrer">Take a look</a></div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FileSystem} alt="" />
          </div>
          <h3>Virtual File System</h3>
          <div className='cta'><a href="https://github.com/AimaneACHACH/fileSystem" className='btn' target='_blank' rel="noreferrer">Github</a></div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio