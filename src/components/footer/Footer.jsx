import React, { useEffect } from 'react'
import './footer.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
          },[])
  return (
    <div className="footer">
        <div className="container container_ft" data-aos="fade-up">
            <div className="items">
               <h3>New York Office</h3>
               <h5>9656403561</h5>
               <span>
               123 Main Street, Suite 200 City:
               </span>
               <span> Anytown State: StateName</span>
            </div>
            <div className="items">
               <h3>New York Office</h3>
               <h5>9656403561</h5>
               <span>
               123 Main Street, Suite 200 City:
               </span>
               <span> Anytown State: StateName</span>
            </div>
            <div className="items">
               <h3>New York Office</h3>
               <h5>9656403561</h5>
               <span>
               123 Main Street, Suite 200 City:
               </span>
               <span> Anytown State: StateName</span>
            </div>
        </div>
    </div>
  )
}

export default Footer