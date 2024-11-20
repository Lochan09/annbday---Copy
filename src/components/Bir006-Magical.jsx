import React from 'react'
import "./Bir006-Magical.css";
import { Link } from 'react-router-dom';
import flag from '../assets/Bir006-Magical/flag.svg'
import img1 from '../assets/Bir006-Magical/img1.svg'
import img2 from '../assets/Bir006-Magical/img2.svg'
import img3 from '../assets/Bir006-Magical/img3.svg'
import img4 from '../assets/Bir006-Magical/img4.svg'

const Bir006Magical = () => {
  return (
    <section id="Bir006-magical">
        <div className='nimbus-container'>
      <div className="Bir006-flags">
        <img src={flag} alt="" />
      </div>
      <div className="Bir006-title">
       Magical Moment
      </div>
      <div className="Bir006-gallery">
       <img alt="Baby sleeping"  src={img1} id='img1' />
       <img alt="Child with paint on face"  src={img2} id='img2' />
       <img alt="Baby playing outside"  src={img3} id='img3' />
       <img alt="Child making glasses with hands"  src={img4} id='img4' />
      </div>
      <div className="Bir006-button-container">
        <Link to="/gallery" className="Bir006-button">
        View More
        </Link>
      </div>
      </div>
      </section>
  )
}

export default Bir006Magical