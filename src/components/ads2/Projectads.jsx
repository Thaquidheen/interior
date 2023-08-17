import React, { useEffect } from 'react'
import './projectads.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay,Navigation, EffectFade} from 'swiper/modules';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Projectads = () => {
  useEffect(()=>{
AOS.init({duration:1000})
  },[])
  return (
    <div className="projectads">
        <div className="container conatiner_project">
        <div className="header">
          <h1 className='aaHeading' data-aos="fade-right">Project Timeline and Execution</h1>
          <Link className='aboutLink' to='/project'  data-aos="fade-left">Project</Link>
        </div>
        <div className="line"></div>
      <h2 className='heading_two' data-aos="fade-right">Designing the Extraordinary, Project by Project</h2>

      <Swiper 
        rewind={true}
        navigation={true}
        modules={[Navigation,Autoplay,EffectFade]}
        effect={'fade'}// Set the fade effect
        fadeEffect={{ crossFade: true }}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide className='swi'>
          <img src="https://wallpaperaccess.com/full/2076086.jpg" alt="" />
          <h1 className='swidesc' >Tropical Paradise</h1>
        </SwiperSlide>
        <SwiperSlide className='swi'><img src="https://w0.peakpx.com/wallpaper/280/795/HD-wallpaper-gray-room-modern-interiors-gray-furniture-laminate-on-wall-modern-design-living-room.jpg" alt="" />
         <h1 className='swidesc'  >Modern Elegance</h1>
        </SwiperSlide>
        <SwiperSlide className='swi'><img src="https://c4.wallpaperflare.com/wallpaper/215/944/975/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'><img src="https://www.hdwallpapers.in/download/wood_interior_bookshelves_room_with_furniture_hd_room-HD.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'><img src="https://images.wallpaperscraft.com/image/single/sofa_chair_furniture_75449_1920x1080.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'><img src="https://www.teahub.io/photos/full/242-2429877_wallpaper-fa-furniture-room-decoration-sofa-set-for.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'> <img src="https://w0.peakpx.com/wallpaper/548/427/HD-wallpaper-modern-design-architecture-house-interior-home-design-sofa.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
        <SwiperSlide className='swi'><img src="https://c4.wallpaperflare.com/wallpaper/382/331/581/furniture-interior-living-room-room-wallpaper-preview.jpg" alt="" />
        <h1 className='swidesc' >Modern Elegance</h1></SwiperSlide>
      </Swiper>
        </div>
   
    </div>
  )
}

export default Projectads