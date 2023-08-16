import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero/Hero'
import Ads from '../../components/ads/Ads'
import Aboutads from '../../components/ads1/Aboutads'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Ads/>
        <Aboutads/>
    </div>
  )
}

export default Home