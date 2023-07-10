import React from 'react'
import './HeroStyle.css'
import robotimg1 from '../../assets/20220127_043450.jpg'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={robotimg1} alt="robotimg1" />
        </div>
        <div className='content'>
            <p>HI, I'M A FRONTEND DEVELOPER</p>
            <h1>Frontend Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero