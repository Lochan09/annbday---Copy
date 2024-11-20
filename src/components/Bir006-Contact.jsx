import React from 'react';
import  "./Bir006-Contact.css";
import call from "../assets/Bir006-contact/call.svg"
import nav from "../assets/Bir006-contact/nav.svg"
import schedule from"../assets/Bir006-contact/schedule.svg"
const Bir006Contact = () => {
  return (
    <section id="Bir006-contact">
       <div className="Bir006-container">
        <div className="Bir006-icon-box">
            <div className="Bir006-call">  
            <img src={call} alt="" id='call'/>
            <p>Contact</p>
            </div>
            <div className="Bir006-nav">    
            <img src={nav} alt="" />
            <p>Location</p>
            </div>
            <div className="Bir006-schedule">
            <img src={schedule} alt="" />
            <p>Schedule</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Bir006Contact