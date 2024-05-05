import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import OneInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/OneInteractionAnticoagulants";
import TwoInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/TwoInteractionAnticoagulants";
import ThreeInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/ThreeInteractionAnticoagulants";
import FourInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/FourInteractionAnticoagulants";
import FiveInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/FiveInteractionAnticoagulants";
import GoBackButton from "../../Сomponents/GoBackButton/GoBackButton";

import "./SlidersStyle.css"

const SliderInteractionsAnt = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const indexParam = searchParams.get("activeIndex");
    if (indexParam !== null) {
      setActiveIndex(parseInt(indexParam));
    }
  }, [location.search]);


  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const handleContinueSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSetSlideIndex = (index) => {
    setActiveIndex(index);
  };

  const components = [  
    <OneInteractionAnticoagulants handleContinue={handleContinueSlide}/>,
    <TwoInteractionAnticoagulants handleContinue={handleContinueSlide}/>,
    <ThreeInteractionAnticoagulants handleContinue={handleContinueSlide}/>,
    <FourInteractionAnticoagulants handleContinue={handleContinueSlide}/>,
    <FiveInteractionAnticoagulants />
  ];

  return (
    <div style={{ top: 0, left: 0 }}>
      <div className="header__slider_container">
        <div className="slider_goBackButton_container">
      <GoBackButton route="/theory"/>
      </div>
      <div className="slider__container" style={{ display: "flex", alignItems: "center", gap: "8px"}}>
        <button className="slider__button-left" onClick={handlePrevSlide}></button>
        <div style={{ display: "flex" }}>
          {components.map((_, index) => (
            <div
              key={index}
              style={{
                width: "83px",
                height: "9px",
                borderRadius: "10px",
                margin: "0 3px",
                backgroundColor:
                  index === activeIndex ? "#8F00FF" : "#D9D9D9",
                cursor: "pointer" 
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button className="slider__button-right" onClick={handleNextSlide}></button>
      </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {components.map((Component, index) => (
          <div 
            key={index} 
            className={index === activeIndex ? "slide-fade" : ""}
            style={{ 
              display: index === activeIndex ? "block" : "none", 
            }}
          >
            {Component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderInteractionsAnt;
