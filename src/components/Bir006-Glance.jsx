import React, { useState, useEffect } from 'react';
import girljump from '../assets/Bir006-glance/girljump.svg';
import boyjump from '../assets/Bir006-glance/boyjump.svg';
import jar from '../assets/Bir006-Glance/jar.svg';
import './Bir006-Glance.css';
import '../assets/Bir006-Glance/background.png';
import larrow from '../assets/Bir006-Glance/larrow.svg';
import rarrow from '../assets/Bir006-Glance/rarrow.svg';

const Bir006Glance = () => {
  const [isGirlJumping, setIsGirlJumping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGirlJumping(prev => !prev);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='Bir006-glance'>
      <div className="nimbus-container">
        <div className="Bir006-glancecontainer">
          <div className="Bir006-left-section">
            <div className="Bir006-glancetitle">
              Your Day at a Glance
            </div>
            <div className="Bir006-kidsjumping">
            <div className={`shadow ${isGirlJumping ? 'jump' : ''}`}>
            <img src={girljump} alt="Girl" class="Bir006-kid" />
            </div>
            <div className={`shadow ${!isGirlJumping ? 'jump' : ''}`}>
            <img src={boyjump} alt="Boy" class="Bir006-kid" />
            </div>
            </div>
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
                <i className="Bir006-fas fa-arrow-left">
                  <img src={larrow} alt="" width='100' height='100'/>

                </i>
              </button>
              <button>
                <i className="Bir006-fas-fa-arrow-right">
                  <img src={rarrow} alt="" width='100' height='100' />
                </i>
              </button>
            </div>
          </div>
          <div className="Bir006-right-section">
            <img alt="Four jars filled with fruit-infused water and straws" height="500" src={jar} width="500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bir006Glance;