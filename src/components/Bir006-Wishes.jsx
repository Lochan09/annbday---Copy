import React from 'react';
import './Bir006-Wishes.css';
import teddy from '../assets/Bir006-wishes/teddy.svg';

const Bir006Wishes = () => {
  return (
    <div class="nimbus-container">
        <div className="Bir006-wishescontainer">
    <div className="Bir006-wishes-left-section">
        <div className="Bir006-left-panel"></div>
        <div className="Bir006-right-panel">
          <h1>Share Your Wishes</h1>
          <img src={teddy} alt="Three teddy bears with party hats and gifts" />
          <p>Send your heartfelt wishes and discover The warm words From Our Loved Once</p>
          <a className="Bir006-wishes-button" href="#">View All</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bir006Wishes;