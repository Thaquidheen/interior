import React from 'react'
import './projectads.css'
import { Link } from 'react-router-dom'

const Projectads = () => {
  return (
    <div className="projectads">
        <div className="container conatiner_project">
        <div className="header">
          <h1 className='aaHeading'>Project Timeline and Execution</h1>
          <Link className='aboutLink' to='/project'>Project</Link>
        </div>
        <div className="line"></div>
      <h2 className='heading_two'>Designing the Extraordinary, Project by Project</h2>
        </div>
    </div>
  )
}

export default Projectads