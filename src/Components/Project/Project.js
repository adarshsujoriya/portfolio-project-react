import React from 'react'


import NavBar from "../Common-Components/NavBar"
import Footer from "../Common-Components/Footer"
import CommonPage from '../Common-Components/CommonPage'
import PricingCard from '../Project/PricingCard'
import ProjectCard from '../Project/ProjectCard'
import pro1 from '../../assets/Projectbackground.jpg'
const Project = () => {
  return (
    <div>
     <NavBar />
     <CommonPage heading="PROJECTS" text="Some of my recent works" myImage={pro1}/>
     <ProjectCard />
     <PricingCard />
     <Footer />

    </div>
  )
}

export default Project
