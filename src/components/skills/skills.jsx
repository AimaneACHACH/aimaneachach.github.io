import React from 'react'
import './skills.css'
import {IoMdDoneAll} from 'react-icons/io'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {BsFiletypeSql} from 'react-icons/bs'
import {SiFirebase} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {SiCplusplus} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {TbBrandFigma} from 'react-icons/tb'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeaftereffects} from 'react-icons/si'
import {SiAdobepremierepro} from 'react-icons/si'
import {SiArduino} from 'react-icons/si'
import {VscTerminalLinux} from 'react-icons/vsc'
import {SiCanva} from 'react-icons/si'
import {AiFillAndroid} from 'react-icons/ai'
import {FaAws} from 'react-icons/fa'
import {SiTerraform} from 'react-icons/si'
import {FaDocker} from 'react-icons/fa'








const Skills = () => {
  return (
    <section id='skills'>
      <h5>What do I do?</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__tab1">
          {/*<h3>Tab "1"</h3>*/}
          <div className="skills__content">
            <article className='skills__details'>
              <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>HTML <ImHtmlFive/></h4>
              {/*<small className='text-light'>Pretty good</small>*/}
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>CSS <SiCss3/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>JavaScript <SiJavascript/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>ReactJs <SiReact/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Python <SiPython/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Firebase <SiFirebase/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Java <FaJava/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Android Studio <AiFillAndroid/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>SQL <BsFiletypeSql/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Git <BsGit/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>C, C++ <SiCplusplus/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Arduino <SiArduino/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>KVM <VscTerminalLinux/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>AWS <FaAws/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Terraform <SiTerraform/></h4> 
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Docker <FaDocker/></h4> 
            </div></article>
          </div>
        </div>
        <div className="skills__tab1">
          {/*<h3>Tab "1"</h3>*/}
          <div className="skills__content">
            <article className='skills__details'>
              <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Figma <TbBrandFigma/></h4>
              {/*<small className='text-light'>Pretty good</small>*/}
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>PhotoShop <SiAdobephotoshop/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>After Effects <SiAdobeaftereffects/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Premier Pro <SiAdobepremierepro/></h4>
            </div></article>
            <article className='skills__details'>
             <IoMdDoneAll className='skills__details-icon'/><div>
              <h4>Canva <SiCanva/></h4>
            </div></article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Skills