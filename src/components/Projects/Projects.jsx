import React from 'react'
import './Projects.css'
import ProjectBox from './ProjectBox'

function Projects() {
  return (
    <div className='body1 body2 body5'>
        <h1>PROJECTS</h1>
        <div className="project-content">
        <ProjectBox/>
        <ProjectBox/>
        <ProjectBox/>
        </div>
    </div>
  )
}

export default Projects