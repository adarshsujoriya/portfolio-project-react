import "./FrontPage.css";


import React, { useState } from 'react'

import mainLogo from'../../assets/971.jpg';
import { Link } from "react-router-dom";
const Frontpage = () => {
  const [profession,setProfession]=useState("I'M A FRONT-END")

  function clicking(event){
    if(profession==="I'M A FRONT-END"){
      setProfession("WEB DEVELOPER")
    }
    else{
      setProfession("I'M A FRONT-END")
    }
  }

  return (
    <div className="front">
        <div className="mask">
<img src={mainLogo} alt="IntroImg" className="into-img" />
        </div>
        <div className="content">
            <p onMouseOver={clicking} onMouseOut={clicking}>{profession}</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Frontpage
