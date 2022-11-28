import "./CommonPage.css";

import React from 'react'

export default function CommonPage(props) {
  return (
 
        <div className="front-pro" onBeforeInput={{backgroundImage:props.myImage}}>
          <img className="background" src={props.myImage} />
          <div className="heading">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          {/* <img width={"100%"} height={"100%"}  src={props.myImage} alt=""/> */}
          </div> 
      </div>
   
  )
}


