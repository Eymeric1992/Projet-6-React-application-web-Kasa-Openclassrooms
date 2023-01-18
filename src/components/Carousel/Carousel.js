import React from "react";
import "./Carousel.css"; //will be added later
//import { useState } from "react";
//import flecheDroite from "../../assets/flechedroite.png";
//import flecheGauche from "../../assets/flechegauche.png";
import { useEffect } from "react";
/*
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
*/


function Carousel({ slides }) {
  const { children } = slides;

  useEffect(() => {
    function createCarousel() {
      let currentIndex = 0;

      function showNextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'none';
        slides[nextIndex].style.display = 'block';
        currentIndex = nextIndex;
      }

      // Initialize the carousel by showing the first slide
      slides[0].style.display = 'block';

      // Set an interval to show the next slide every 3 seconds
      setInterval(showNextSlide, 3000);
    }

    createCarousel();
  }, [slides]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          {slide}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
