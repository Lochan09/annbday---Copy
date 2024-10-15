import React from 'react';
import './Bir006-Timer.css';
import cloud1 from '../assets/Bir006-Timer/cloud1.svg';
import cloud2 from '../assets/Bir006-Timer/cloud2.svg';
import pattern from '../assets/Bir006-Timer/pattern.png';
import pattern2 from '../assets/Bir006-Timer/pattern2.png';
import info from '../assets/Bir006-Timer/info.svg';
import clebrating from '../assets/Bir006-Timer/celebrating.svg';
import banner from '../assets/Bir006-Timer/Namebanner.svg';

const Bir006Timer = () => {
  return (
    <>
    <section id='Bir006-timer'>
      <img className='Bir006-timercontainer'></img>
      <img id='left-cloud' className='Bir006-cloud' src={cloud1} alt="" />
      <img id='right-cloud' className='Bir006-cloud' src={cloud2} alt="" />
      <div className='nimbus-container'>
        <div className='Bir006-Timer'>
          <div className='Bir006-timertitle'>
            <h2>Event starts in...</h2>
          </div>
          <div className='Bir006-timercount'>
            <div>
            <span id='time'>00</span>
            <span>DAYS</span>
            </div>
            <div>
            <span id='time'>00</span>
            <span>HOURS</span>
            </div>
            <div>
            <span id='time'>00</span>
            <span>MINUTES</span>
            </div>
            <div>
            <span id='time'>00</span>
            <span>SECONDS</span>
            </div>
          </div>
        </div>
        <div className="Bir006-Pattern-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={pattern} alt="Pattern Front" />
            </div>
            <div className="card-back">
              <img src={pattern2} alt="Pattern Back" />
            </div>
          </div>
        </div>
        <div className='Bir006-tdetails'>
          <img src={clebrating} alt="" />
          <div className='Bir006-nameand'>
          <p>ANNA'S</p>
          <p>3RD BIRTHDAY</p>
          </div>
          <img src={banner} alt="" />
          <div className='Bir006-personalinfo'>
            <h3>D/O: NARAYAN SWAMY & LAKSHMI KUMARI</h3>
            <p>Lorem ipsum dolor sit amet consectetur.Euismod ipsum a tempor nulla ac sollicitudin .Morbi eleifend neque tincidunt nulla nisl integer iaculis. </p>
          </div>
        </div>
      </div>
      </div>
      
        
    </section>
  </>
  );
};

export default Bir006Timer;