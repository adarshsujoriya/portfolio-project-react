import React from 'react'

import NavBar from "../Common-Components/NavBar"
import Footer from "../Common-Components/Footer"
import CommonPage from '../Common-Components/CommonPage'
import AboutContent from '../About/AboutContent'
import pro1 from '../../assets/Aboutbackground.jpg'


const About = () => {
  return (
    <div>
     <NavBar />
     <CommonPage heading="ABOUT" text="I am a Front-End Developer" myImage={pro1} />
     <AboutContent />
     <Footer />
    </div>
  )
}

export default About
