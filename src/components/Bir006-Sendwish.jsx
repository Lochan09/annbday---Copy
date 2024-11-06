import React from 'react'
import './Bir006-Sendwish.css'
import hb from '../assets/Bir006-Sendwish/hb.svg'

const Bir006Sendwish = () => {
  return (
    <section id="Bir006-sendwish">
      <div className="nimbus-container">
        <div className="Bir006-sendwish-container">
          <div className="Bir006-sendwish-container-l">
            <h1>Send wishes</h1>
            <img src={hb} alt="" />
          </div>
          <div className="Bir006-sendwish-container-r">
            <div className="Bir006-sendwish-container-rd">
              <div className="Bir006-sendwish-name">
                <p>Name</p>
              </div>
              <div className="Bir006-sendwish-message">
                <p>Message (optional)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bir006Sendwish