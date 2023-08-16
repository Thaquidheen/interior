import React from 'react'
import './hero.css'
import Video from '../../assets/video.mp4';
// import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
    </video>
    <div className="overlay"></div>
    <div className="content">
        <h1>      Welcome to ILLAM Interiors</h1>
        <p>We specialize in creating captivating interior spaces that blend functionality and aesthetics, turning houses into homes</p>
      <div className="desc">

      </div>
    </div>
</div>
  )
}

export default Hero