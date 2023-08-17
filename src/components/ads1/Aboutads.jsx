import React, { useState } from 'react'
import './aboutads.css';
import { Link } from 'react-router-dom'
import pic1 from '../../assets/pic1.jpg'


const Aboutads = () => {
  const [showHistory, setShowHistory] = useState(true);
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [activeSection, setActiveSection] = useState('History');

  const toggleHistory = () => {
    setShowHistory(true);
    setShowMission(false);
    setShowVision(false);
    setActiveSection('History');
  };

  const toggleMission = () => {
    setShowHistory(false);
    setShowMission(true);
    setShowVision(false);
    setActiveSection('Mission');
  };

  const toggleVision = () => {
    setShowHistory(false);
    setShowMission(false);
    setShowVision(true);
    setActiveSection('Vision');
  };
  return (
    <div className="adabout">
      <div className="container container_adabout">
      <div className="header">
          <h1 className='aaHeading'>About Our Design Philosophy</h1>
          <Link className='aboutLink' to='/about'>About</Link>
        </div>
      <div className="line"></div>
      <h2 className='heading_two'>Your Vision, Our Design Expertise</h2>
        <div className="sec">
          <img className='adaboutImg'  src={pic1} alt="" />
           <div className="section1">
           <div className="section">
            <div className="secItems">
            <h2 onClick={toggleHistory}     className={activeSection === 'History' ? 'active' : ''} >History</h2>
            <h2 onClick={toggleVision}      className={activeSection === 'Vision' ? 'active' : ''}>Vision</h2>
            <h2 onClick={toggleMission}   className={activeSection === 'Mission' ? 'active' : ''}>Mission</h2>
            </div>

        {showHistory && (
          <p className='secPara'>
          history ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae cupiditate incidunt! Facilis, praesentium assumenda perferendis repellendus, sequi suscipit delectus animi doloremque reprehenderit illo hic deserunt nemo quae molestias aperiam.
          </p>
        )}
      </div>

      <div className="section">

        {showMission && (
          <p className='secPara'>
        mission ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quisquam consequuntur sapiente ad commodi recusandae, accusantium iure voluptatum delectus laboriosam harum ab saepe molestiae alias quos eaque vero numquam cum.
          </p>
        )}
      </div>

      <div className="section">

        {showVision && (
          <p className='secPara'>
vision ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam vel temporibus atque recusandae, accusamus tenetur laudantium perferendis quo earum aut dolorum dolor doloremque consequatur, asperiores sunt est soluta excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis dignissimos perferendis odit? Nam, numquam fuga eum omnis quod dolor quis! Eum vel neque dolorum. Totam maxime quasi quis voluptas?
          </p>
        )}
      </div>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutads