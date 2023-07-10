import React from 'react'
import './footerStyle.css'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome  size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Jakarta Timur, DKI Jakarta</p>
                        <p>Indonesia</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk  size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                        <h4>mandalacs18@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I am a bachelor’s degree of Information Systems, Business Information Technology study program, Bina 
                    Nusantara University. I'm always detail in every task I do, and I’m always validate and verify the work I've 
                    done, I’m willing to work under pressure, I'm always motivated to keep going and always try to keep improving 
                    my skills and qualities.
                </p>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/tri-mandala-adi-dalem/"><FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/></a>
                    <a href="https://github.com/mandalaad"><FaGithub size={30} style={{color:"white", marginRight:"1rem"}}/></a>
                    <a href="https://www.instagram.com/mandalacs18/"><FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer