import React from 'react';
import "./Bir006-Special.css";
import baby from '../assets/Bir006-Special/baby.svg';
import cartoon from '../assets/Bir006-Special/cartoon.svg';
import larr from '../assets/Bir006-Special/larr.svg';
import rarr from '../assets/Bir006-Special/rarr.svg';
import date from '../assets/Bir006-Special/date.svg';



const Bir006Special = () => {
  return (
    <div>
      <div>
        <div className="nimbus-container">
          
          <div className="Bir006-specialcontainer">
            <div className="Bir006-title">
              Special Highlights
            </div>
            <div className="Bir006-carousel">
              <div className="Bir006-larrow">
                <i className="Bir006-larrow"></i>
                <img alt="left arrow" height="100" src={larr} width="100" />
              </div>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="Bir006-card">
                  <img alt="Baby lying on a blanket with a pacifier" height="300" src={baby} width="200" />
                  <div className="Bir006-date">
                  <img alt="date" height="300" src={date} width="200" />
                  </div>
                  
                </div>
              ))}
              <div className="Bir006-rarrow">
                <i className="Bir006-fas fa-arrow-right"></i>
                <img alt="right arrow" height="100" src={rarr} width="100" />
              </div>
            </div>
            <div className="Bir006-footer">
              <img alt="Cartoon children holding hands" height="500" src={cartoon} width="600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bir006Special;