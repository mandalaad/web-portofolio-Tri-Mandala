import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Heroproject from '../../components/Hero-project/Heroproject'
function About() {
  return (
    <>
    <Navbar/>
    <Heroproject heading="ABOUT ME" text="Saya merupakan seorang Frontend Developer"/>
    <Footer/>
    </>
  )
}

export default About