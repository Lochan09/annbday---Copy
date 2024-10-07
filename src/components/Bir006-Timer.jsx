import React from 'react';
import './Bir006-Timer.css';
import time from '../assets/Bir006-Timer/time.svg';
import cloud1 from '../assets/Bir006-Timer/cloud1.svg';
import cloud2 from '../assets/Bir006-Timer/cloud2.svg';
import pattern from '../assets/Bir006-Timer/pattern.svg';
import info from '../assets/Bir006-Timer/info.svg';


const Bir006Timer = () => {
  return (
    <>
    <section id='Bir006-timer'>
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
        <div className='bir006-'></div>
      </div>
    </section>
    </>
  );
};

export default Bir006Timer;