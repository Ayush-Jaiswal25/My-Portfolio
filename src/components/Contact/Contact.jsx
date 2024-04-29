import React from 'react'
import './Contact.css'
import Gmail from '../../assets/gmail1.svg'
import insta from '../../assets/instagram.svg'
import linkin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
function Contact() {

  function gmailClick() {
    const Gmail = window.document.getElementById('Email-div');
    Gmail.classList.add('email-visible');
  }

  function gmailUnclick(){
    const Gmail = window.document.getElementById('Email-div');
    Gmail.classList.remove('email-visible');
  }
  
  return (
    <div className='body1 body2 body3'>
      <h1>Contact Me</h1>
      <div className="social-contact">
        <div className="contact-form">
          <h3>Contact<img className='g' src={Gmail} alt="" />From</h3>
          <form action="">
            <div className="name_email">
              <label htmlFor="name">Name:</label>
              <input type='text' placeholder='Full Name'/>
  
              <label htmlFor="gmail">Email Address</label>
              <input type="text" name="" id="" placeholder='Write Your Email' />
            </div>

            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message...'></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="social-media">
          <h3>Social Media Connect</h3>
          <div className="social-img">
          <a href="https://www.instagram.com/_25_aj"><img className='j insta' src={insta} alt="" /></a>
          <a href="https://www.linkedin.com/in/ayush-jaiswal25/"><img className='j link' src={linkin} alt="" /></a>
          <a href="https://github.com/Ayush-Jaiswal25"><img className='g h github' src={github} alt="" /></a>
          <a onClick={gmailClick}><img className='g h gmail' src={gmail} alt="" /></a>
          </div>
        </div>
          <div onClick={gmailUnclick} id='Email-div' className="email-div">ayushjaiswal1667@gmail.com</div>
      </div>
    </div>
  )
}

export default Contact