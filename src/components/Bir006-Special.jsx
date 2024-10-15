import React from 'react';
import "./Bir006-Special.css";
import baby from '../assets/Bir006-Special/baby.svg';
import cartoon from '../assets/Bir006-Special/cartoon.svg';

const imageArray = [
  { date: '2023-10-01', image: baby },
  { date: '2023-10-02', image: baby },
  { date: '2023-10-03', image: baby },
  { date: '2023-10-04', image: baby },
  { date: '2023-10-05', image: baby },
  { date: '2023-10-06', image: baby },
];


const Bir006Special = () => {
  const imagesToShow = imageArray.slice(0, 4);
  return (
    <>
    <section id='Bir006-special'>
      <div className='nimbus-container'>
        <div className='bir006-specialcontainer' >
      <h1>Special Highlights</h1>
        <div className='Bir006-Imageset'>
          
        {imagesToShow.map((item, index) => (
            <div key={index} className='image-item'>
              <img src={item.image} alt={`Special ${index}`} />
              <p>{item.date}</p>
            </div>
          ))}
        </div>
        
        <img src={cartoon} alt="" />
      </div>
      </div>
    </section>
    </>
  );
};

export default Bir006Special;