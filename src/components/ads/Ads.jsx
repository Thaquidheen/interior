
import './ads.css'
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <section className='ads' >
      <div className="container container_ads">
        <h1 className='ads_heading'>Elevate Your Interiors</h1>
        <div className="ads_content">
            <div className="line"></div>
            <Link to='/services' className='fas' >Services</Link>
          
      </div>
      <h3 className='ads_sub'>Designing Interiors That Leave a Lasting Impression</h3>
       
       <div className="content">
        <div className="item">
            <h1>100</h1>
            <h4>Clients Around the World</h4>
        </div>
        <div className="item">
            <h1>100</h1>
            <h4>Projects Completed</h4>
        </div>
       </div>
       <div className="list">
         <ul className='lists' >
              <li className='lItems'>+ Furniture Sales</li>
              <li className='lItems'>+ Custom Furniture Design</li>
              <li className='lItems'>+ Interior Design Consultation</li>
         </ul>
         <ul className='lists' >
              <li className='lItems'>+ Furniture Restoration</li>
              <li className='lItems'>+ Space Planning</li>
              <li className='lItems'>+ Interior Styling and Decorating</li>
         </ul>
         <ul className='lists' >
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