import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";
import abtimg1 from "../../assets/about1.jpg"
import abtimg2 from "../../assets/aboutimg2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
         <h1>Who Am I?</h1>
         <p>I am a react frint-end Developer.I create responsive secure websites for my clients</p>
         <Link to="/contact">
            <button className="btn">Contact</button>
         </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img width={"100%"} height={"100%"} src={abtimg1}  className="img" alt="aboutreact" />
                </div>
                <div className="img-stack bottom">
                    <img width="100%" height="100%" src={abtimg2} className="img" alt="aboutreact2" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
