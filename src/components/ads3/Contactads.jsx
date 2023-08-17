import React, { useEffect } from 'react'
import './contactad.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contactads = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
      },[])
  return (
    <div className="contactads">
        <div className="container">
        <div className="header">
          <h1 className='aaHeading'  data-aos="fade-up">Get in Touch</h1>
          <Link className='aboutLink' to='/contact'  data-aos="fade-up">Contact</Link>
        </div>
        <div className="line"></div>
      <h2 className='heading_two'  data-aos="fade-up">Building Relationships, One Conversation at a Time</h2>
        </div>
       <div className="desc">
        <img  src="https://media.istockphoto.com/id/1323779251/photo/living-room-interior-wall-mockup-in-warm-tones-with-leather-armchair-on-white-wall-background.jpg?s=170667a&w=0&k=20&c=xnSo_xSTfMrMp6rb5NltRKUyPQtHlasrlBcFr94Xvow=" alt="" />
        <div className="cont">
        <h1 className='descHeading'  data-aos="fade-up">Have a project in mind</h1>
        <button className='btn' data-aos="fade-up">Let's Talk</button>
        </div>
     
       </div>
    </div>
  )
}

export default Contactads