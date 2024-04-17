import React, { useState } from "react";
import Main_Indicators_Anticoagulants from "../../Сomponents/Anticoagulants/Main_Indicators_Anticoagulants";
import Task_Main_Indicators_Anticoagulants_One from "../../Сomponents/Anticoagulants/Task_Main_Indicators_Anticoagulants_One";
import Task_Main_Indicators_Anticoagulants_Two from "../../Сomponents/Anticoagulants/Task_Main_Indicators_Anticoagulants_Two";
import Task_Main_Indicators_Anticoagulants_Three from "../../Сomponents/Anticoagulants/Task_Main_Indicators_Anticoagulants_Three";

import GoBackButton from "../../Сomponents/GoBackButton/GoBackButton";

import "./Slider_Main_Indicators.css"

const AnticoagulantsSliderMainIndicators = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const components = [
    <Main_Indicators_Anticoagulants handleContinue={handleContinueSlide}/>,
    <Task_Main_Indicators_Anticoagulants_One handleContinue={handleContinueSlide}/>,
    <Task_Main_Indicators_Anticoagulants_Two handleContinue={handleContinueSlide}/>,
    <Task_Main_Indicators_Anticoagulants_Three />
  ];

  return (
    <div style={{ top: 0, left: 0 }}>
      <div className="header__slider_container">
        <div className="slider_goBackButton_container">
      <GoBackButton/>
      </div>
      <div className="slider__container" style={{ display: "flex", alignItems: "center", gap: "8px"}}>
        <button className="slider__button-left" onClick={handlePrevSlide}></button>
        <div style={{ display: "flex" }}>
          {components.map((_, index) => (
            <div
              key={index}
              style={{
                width: "140px",
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

export default AnticoagulantsSliderMainIndicators;
