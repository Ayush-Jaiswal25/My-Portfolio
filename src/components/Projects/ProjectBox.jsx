import React from 'react'
import './ProjectBox.css'
import BlogImg from '../../assets/Blogging.png'
function ProjectBox() {
  return (
    <div className='projectBox'>
      <img src={BlogImg} alt="" />
      <hr/>
      <div className="projectBox-text">
        <h3>Project Name</h3>
        <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis vel inventore at aliquid suscipit magnam magni ad temporibus!  magni.</p>
      </div>
    </div>
  )
}

export default ProjectBox