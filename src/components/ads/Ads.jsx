
import './ads.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Ads = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
      },[])
  return (
    <section className='ads' >
      <div className="container container_ads">
      <div className="header">
          <h1 className='ads_heading' data-aos="fade-up">Elevate Your Interiors</h1>
          <Link className='aboutLink' to='/services' data-aos="fade-left">Services</Link>
        </div>
      <div className="line"></div>
      <h2 className='ads_sub' data-aos="fade-up">Designing Interiors That Leave a Lasting Impression</h2>
       
       <div className="content">
        <div className="item"  data-aos="fade-up">
            <h1>100</h1>
            <h4>Clients Around the World</h4>
        </div>
        <div className="item"  data-aos="fade-up">
            <h1>100</h1>
            <h4>Projects Completed</h4>
        </div>
       </div>
       <div className="list">
         <ul className='lists'  data-aos="fade-up" >
              <li className='lItems'>+ Furniture Sales</li>
              <li className='lItems'>+ Custom Furniture Design</li>
              <li className='lItems'>+ Interior Design Consultation</li>
         </ul>
         <ul className='lists'  data-aos="fade-up" >
              <li className='lItems'>+ Furniture Restoration</li>
              <li className='lItems'>+ Space Planning</li>
              <li className='lItems'>+ Interior Styling and Decorating</li>
         </ul>
         <ul className='lists'  data-aos="fade-up">
              <li className='lItems'>+ Collaborations with Designers</li>
              <li className='lItems'>+ Home Office Setup Services</li>
              <li className='lItems'>+ Eco-Friendly Furniture Options</li>
         </ul>
       </div>
      </div>
     
    </section>
  )
}

export default Ads