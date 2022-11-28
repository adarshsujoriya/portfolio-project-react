import CardData from "../Project/CardData";
import CardApi from "../Project/CardApi"

import React from 'react'


const ProjectCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {CardApi.map((val, ind) =>{
        return(
            <CardData
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        )
       })}
      </div>
    </div>
  )
}

export default ProjectCard
