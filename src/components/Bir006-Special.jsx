import React from 'react';
import "./Bir006-Special.css";
import baby from '../assets/Bir006-Special/baby.svg';
import cartoon from '../assets/Bir006-Special/cartoon.svg';
import design from '../assets/Bir006-Special/design.svg';
import arrows from '../assets/Bir006-Special/arrows.svg';

const Bir006Special = () => {
  return (
    <>
      <section id='Bir006-special'>
        <div className='nimbus-container'>
          <div className='Bir006-specialcontainer'>
            <h1>Special Highlights</h1>
            <div className='Bir006-Imageset'>
              <div className='Bir006-image-item'>
                <img src={baby} alt="Special 1" />
                <p>2023-10-01</p>
                <img src={design} alt="" id='imageset-design' />
                <div className='Bir006-hidden-message'>
                  Beginning the journey
                </div>
              </div>
              <div className='Bir006-image-item'>
                <img src={baby} alt="Special 2" />
                <p>2023-10-02</p>
                <img src={design} alt="" id='imageset-design' />
                <div className='Bir006-hidden-message'>
                  Beginning the journey
                </div>
              </div>
              <div className='Bir006-image-item'>
                <img src={baby} alt="Special 3" />
                <p>2023-10-03</p>
                <img src={design} alt="" id='imageset-design' />
                <div className='Bir006-hidden-message'>
                  Beginning the journey
                </div>
              </div>
              <div className='Bir006-image-item'>
                <img src={baby} alt="Special 4" />
                <p>2023-10-04</p>
                <img src={design} alt="" id='imageset-design' />
                <div className='Bir006-hidden-message'>
                  Beginning the journey
                </div>
              </div>
            </div>
            <img src={cartoon} alt="" id='Cartoon' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bir006Special;