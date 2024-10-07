import React from "react";
import '../App.css';
import "./Bir006-Herosection.css";
import image from "../assets/Bir006-herosection/child.svg";
import decoration from "../assets/Bir006-herosection/star.svg";
import rleaf from "../assets/Bir006-herosection/Bir006-rleaf.svg";
import lleaf from "../assets/Bir006-herosection/Bir006-lleaf.svg";
import location from "../assets/Bir006-herosection/Location.svg";

const Herosection = () => {
  return (
    <div className="nimbus-container">
      <div className="Bir006-navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Location</a>
      </div>
      <img className="Bir006-lleaf" src={rleaf} alt="" />
      <img className="Bir006-rleaf" src={lleaf} alt="" />
      <div className="arc-text">
        <span className="char1">P</span>
        <span className="char2">L</span>
        <span className="char3">E</span>
        <span className="char4">A</span>
        <span className="char5">S</span>
        <span className="char6">E</span>
        <span className="char7"> </span>
        <span className="char8">J</span>
        <span className="char9">O</span>
        <span className="char10">I</span>
        <span className="char11">N</span>
        <span className="char12"> </span>
        <span className="char13">U</span>
        <span className="char14">S</span>
        <span className="char15"> </span>
        <span className="char16">T</span>
        <span className="char17">O</span>
        <span className="char18"> </span>
        <span className="char19">C</span>
        <span className="char20">E</span>
        <span className="char21">L</span>
        <span className="char22">E</span>
        <span className="char23">B</span>
        <span className="char24">R</span>
        <span className="char25">A</span>
        <span className="char26">T</span>
        <span className="char27">E</span>
      </div>
      <div>
        <div className="Bir006-content">
          <h1>ANNA'S</h1>
          <h2>BIRTHDAY PARTY</h2>
          <p className="Bir006-date-time">15TH NOV | 3:00PM</p>

          <div className="Bir006-button" href="#">
            <i className="fas fa-map-marker-alt"></i>
            <img src={location} alt="" />
            Open In Maps
          </div>
        </div>
      </div>

      <div id="parent">
        <div className="Bir006-childface">
          <img
            alt="A child with paint on their face, smiling and looking up."
            height="325.71"
            src={image}
            width="312.15"
          />
        </div>
        <div className="Bir006-decoration">
          <img alt="decoration" height="425" src={decoration} width="475" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
