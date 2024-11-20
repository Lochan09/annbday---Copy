import React from 'react';
import './Bir006-Wishes.css';
import { Link } from 'react-router-dom';
import teddy from '../assets/Bir006-wishes/teddy.svg';
import '../assets/Bir006-wishes/wishesbackground.png';
import item1 from '../assets/Bir006-wishes/item1.svg';
import item2 from '../assets/Bir006-wishes/item2.svg';
import item3 from '../assets/Bir006-wishes/item3.svg';
import item4 from '../assets/Bir006-wishes/item4.svg';
import item5 from '../assets/Bir006-wishes/item5.svg';

const Bir006Wishes = () => {
  return (
    <section id='Bir006-wishes'>
    <div className="nimbus-container">
    <div className="Bir006-wishescontainer" id="Bir006-wishes">
    <div className="Bir006-left-panel">
      <img src={item1} alt=""id='item1'/>
      <img src={item2} alt="" id='item2'/>
      <img src={item3} alt="" id='item3'/>
      <img src={item4} alt="" id='item4'/>
      <img src={item5} alt="" id='item5'/>
    </div>
    <div className="Bir006-right-panel">
     <h1>
      Share Your Wishes
     </h1>
     <img src={teddy}  alt='' width="100"/>
     <p>
      Send your heartfelt wishes and discover The warm words From Our Loved Once
     </p>
     <Link to="/response" className='Bir006-Wishesbutton'>
      View All
     </Link>
     
    </div>
   </div>
   </div>
   </section>
  );
};

export default Bir006Wishes;