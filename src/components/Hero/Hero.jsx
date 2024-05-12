import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import mongo from '../../assets/mongo.svg'
import js from '../../assets/js1.svg'
import react from '../../assets/react.svg'
import nodejs from '../../assets/nodejs.svg'
import boy from '../../assets/boy1.jpg'
function Hero() {
  return (
    <div>
      <div className="body">
      <h1 className='title'>Mern Stack Developer</h1>
        <div className="hero">
            <div className="profile-text">
              <h1 className="name">Hey, I'm Ayush</h1>
              <p>I'm a full-stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my GitHub Profile</p>
              <div className="mern-img">
                <img src={mongo} alt="" />
                <div className="express">
                  <label>Express</label>
                  <img src={js} alt="" />
                </div>
                <img src={react} alt="" />
                <img src={nodejs} alt="" />
              </div>
            </div>
            <div className="profile-image">
              <img className='boy' src={boy} alt="" />
            </div>
            <div className="hide-mern-image">
            <img src={mongo} alt="" />
              <img className='Hreact' src={react} alt="" />
              <div className="Hexpress">
                <label className='exH'>Express</label>
                <img src={js} alt="" />
              </div>
              <img className='nodeimg' src={nodejs} alt="" />
            </div>
          </div>
          <Navbar/>
        </div>
    </div>
  )
}

export default Hero