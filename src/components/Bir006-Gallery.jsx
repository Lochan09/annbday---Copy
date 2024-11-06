import React from 'react'
import './Bir006-Gallery.css';
import border from '../assets/Bir006-Gallery/border.png'
import baby1 from '../assets/Bir006-Gallery/baby1.png';
import greenarrow from '../assets/Bir006-Gallery/greenarrow.svg'

const Bir006Gallery = () => {
    return (
        <section id="Bir006-gallery">
          <div className="Bir006-gallery-navbar">
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
              <div className="Bir006-gallery-container">  
                <span>Magic Moment</span>
                <img src={border} alt=""  id='border'/>

                <div className='Bir006-imagecontainer1'>
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                </div>
                <div className='Bir006-imagecontainer2'>
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                </div>
                <div className='Bir006-imagecontainer3'>
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                </div>
                <div className='Bir006-imagecontainer4'>
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                    <img src={baby1} alt="" />
                </div>
                <div className='Bir006-greenarrow'>
                    <img src={greenarrow} alt="" id='greenarrow' />
                </div>
                </div>
                </div>
            </section>
          
         )
}

export default Bir006Gallery