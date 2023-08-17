import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero/Hero'
import Ads from '../../components/ads/Ads'
import Aboutads from '../../components/ads1/Aboutads'
import Carousel from '../../components/carousel/Carousel'
import Projectads from '../../components/ads2/Projectads'
import Contactads from '../../components/ads3/Contactads'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Ads/>
        <Aboutads  />
        <Carousel/>
        <Projectads/>
        <Contactads/>
        <Footer/>
    </div>
  )
}

export default Home