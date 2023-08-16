import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero/Hero'
import Ads from '../../components/ads/Ads'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Ads/>
    </div>
  )
}

export default Home