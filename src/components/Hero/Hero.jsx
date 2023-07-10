import React, { useState } from 'react'
import './HeroStyle.css'
import robotimg1 from '../../assets/20220127_043450.jpg'
import fotogue from '../../assets/IMG_20220225_215718_191.jpg'
import { Link } from 'react-router-dom'
function Hero() {
    const [isFullSize, setIsFullSize] = useState(false);

    const handleClick = () => {
      setIsFullSize(!isFullSize);
    };
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={robotimg1} alt="robotimg1" />
        </div>
        <div className='content'>
            
                <img className={`foto ${isFullSize ? 'full-size' : ''}`} src={fotogue} alt="" onClick={handleClick}/>
            
            <h3>Tri Mandala Adi Dalem</h3>
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