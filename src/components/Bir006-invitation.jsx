import React from 'react'
import "./Bir006-invitation.css";
import logo from '../assets/Bir006-invitation/logo.svg';
import title from '../assets/Bir006-invitation/title.svg';

const Bir006_invitation = () => {
  return (
    <section id='Bir006-invitation'>
    <div className="nimbus-container">
    <div className="Bir006-invitation" id="Bir006-invitation">
      <img src={title} alt="" />
      <img src={logo} alt="" />
    </div>
    </div>
    </section>
  )
}

export default Bir006_invitation