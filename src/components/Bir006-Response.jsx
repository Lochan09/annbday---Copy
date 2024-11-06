import React from 'react'
import './Bir006-Response.css'
import curve from '../assets/Bir006-Response/curve.svg'
import anim1 from '../assets/Bir006-Response/girlanim.svg'
import star from '../assets/Bir006-Response/star.svg'
import leftcircle from '../assets/Bir006-Response/lrarrow.svg'
import rightcircle from '../assets/Bir006-Response/rrarrow.svg'

const Bir006Response = () => {
  return (
    <section id="Bir006-response">
      <div className="Bir006-response-navbar">
        <a href="#">
          <i className="Bir006-fas-fa-home">
          </i>
          Home
        </a>
        <a href="#">
          <i className="fas-fa-info-circle">
          </i>
          About
          <i className="fas-fa-caret-down">
          </i>
        </a>
        <a href="#">
          <i className="fas-fa-images">
          </i>
          Gallery
        </a>
        <a href="#">
          <i className="fas-fa-map-marker-alt">
          </i>
          Location
        </a>
      </div>
        <div className="nimbus-container">
          <div className="Bir006-response-container">
            <div className="Bir006-response-container-l">
              <img src={curve} alt="" />
              <h1>Wishes for the </h1>
              <h1>Birthday Person</h1>
                <div className="Bir006-response-arrows">
                  <img id='Bir006-leftcirle' src={leftcircle} alt="" />
                  <img id='Bir006-rightcirle' src={rightcircle}  alt="" />
                </div>  
              </div>
              <div className="Bir006-response-container-r">
                  <img src={anim1} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur. Euismod ipsum a tempor nulla ac sollicitudin. Morbi eleifend neque tincidunt nulla nisl integer iaculis. </p>
                  <h2>Sara</h2>
                  <img src={star} alt="" id='rstar'/> 
                </div>  
            </div>
          </div>
        </section>
      
     )
   }
   
   export default Bir006Response

    {/* <div className="Bir006-responsecontainer">
        <div className="Bir006-responses">
          <img alt="Group of people celebrating"  src={curve} />
          <span>
            Wishes for the Birthday Person
          </span>
          <div className="Bir006-responsearrows">
            <i className="Bir006-response-fas-fa-arrow-left">
            </i>
            <i className="Bir006-response-fas-fa-arrow-right">
            </i>
          </div>
        </div>
        <div className='Bir006-cardparent'>
        <div className="Bir006-response-card">
          <img src={anim1} id='anim1' alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur. Euismod ipsum a tempor nulla ac sollicitudin. Morbi eleifend neque tincidunt nulla nisi integer iaculis.
             </p>
          <img src={star} alt="" />   
        </div>     
             <div className="Bir006-response-name">
               Sara
             </div>
           </div>
         </div> */}