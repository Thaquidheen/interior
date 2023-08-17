import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';

import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="Container">

    <Swiper
      effect={'coverflow'}
      grabCursor={true}
  
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
      autoplay={{ delay: 2000 }}
      className="swiper_container"
    >
      <SwiperSlide>
        <img className='cimg' src='https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg' src='https://classy.co.in/wp-content/uploads/2023/02/Single-Chairs.webp' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZOPCujqzJFkut0gKaCWX5rodGBuQOig14Q&usqp=CAU' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg' src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg' src='https://m.media-amazon.com/images/I/71KUS5K4PWL._AC_UF894,1000_QL80_.jpg' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg'  src='https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/living-room-interior-have-cabinet-tv-leather-armchair-cement-room-with-concrete-wall-3d-rendering.jpg' alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='cimg' src='https://w0.peakpx.com/wallpaper/368/149/HD-wallpaper-chair-rug-plants-furniture-column-high-quality.jpg' alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default Carousel