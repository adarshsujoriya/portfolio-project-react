import React from 'react'
import NavBar from "../Common-Components/NavBar"
import FrontPage from "../Home/FrontPage"
import ProjectCard from "../Project/ProjectCard"
import Footer from "../Common-Components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <FrontPage />
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Home
