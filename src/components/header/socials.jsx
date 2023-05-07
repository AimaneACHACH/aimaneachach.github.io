import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillExclamationCircleFill} from 'react-icons/bs'

const socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aimane-achach-6739b3251" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AimaneACHACH" target='_blank' rel="noreferrer"><FaGithub/></a>
        {/*<a href="https://google.com" target='_blank' rel="noreferrer"><BsFillExclamationCircleFill/></a>*/}
    </div>
  )
}

export default socials