import React from "react";
import "../styles/Carousel.css"; //will be added later
import { useState } from "react";
import flecheDroite from "../assets/flechedroite.png";
import flecheGauche from "../assets/flechegauche.png";

const Carousel = (props) => {
  const { children } = props;
  let [currentIndex, setCurrentIndex] = useState(0);
  let length = children.length;
  

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    return setCurrentIndex;
  };

  const next = () => {
    if (currentIndex === length - 1) {
      setCurrentIndex((length = 0));
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    return setCurrentIndex;
  };

  if (length > 1) {
    return (
   
      <div className="carousel-container">
        <div>  <figcaption className="Count"> {currentIndex + 1}/{length}</figcaption></div>
          
        <div className="carousel-wrapper">
          <img
            src={flecheGauche}
            onClick={prev}
            alt="  fleche gauche "
            className="left-arrow"
          />

          <img
            src={flecheDroite}
            alt="  fleche droite "
            onClick={next}
            className="right-arrow"
          />
 

          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
            
          </div>
        </div>
      
      
      </div>
    
    );
  } else {
    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Carousel;
