import React from 'react'
import MyCV from '../../assets/mycv.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={MyCV} download='mycv.pdf' className='btn'>Download CV</a>
        <a href="#contact" className='btn primary'>Message Me!</a>
    </div>
  )
}

export default CTA