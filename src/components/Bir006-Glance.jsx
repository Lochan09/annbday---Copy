import React from 'react'
import jumping from '../assets/Bir006-Glance/jumping.svg';
import jar from '../assets/Bir006-Glance/jar.svg';
import './Bir006-Glance.css'

const Bir006Glance = () => {
  return (
    <div className="nimbus-container">
    
  <div className="Bir006-glancecontainer">
   <div className="Bir006-left-section">
    <div className="Bir006-glancetitle">
     Your Day at a Glance
    </div>
    <img alt="Cartoon of two happy children" className="image" height="200" src={jumping} width="200"/>
    <div className="Bir006-event-card">
     <h2>
      Welcome Drink
     </h2>
     <p>
      2:00 PM
     </p>
     <div className="Bir006-progress-bar">
     </div>
    </div>
    <div className="Bir006-navigation">
     <button>
      <i className="fas fa-arrow-left">
      </i>
     </button>
     <button>
      <i className="fas fa-arrow-right">
      </i>
     </button>
    </div>
   </div>
   <div className="Bir006-right-section">
    <img alt="Four jars filled with fruit-infused water and straws" height="500" src={jar} width="500"/>
   </div>
  </div>
  </div>
  )
}

export default Bir006Glance