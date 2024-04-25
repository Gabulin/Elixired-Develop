import React, { useState, useEffect } from "react";
import "./System_coagulation_Puzzle.css";

// Начало импорт компонентов пазла
import IX from '../../../../Media/Anticoagulants/Puzzle/Components/IX_component.svg'
import NitiFibrina from '../../../../Media/Anticoagulants/Puzzle/Components/NITI_FIBRINA.svg'
import X from '../../../../Media/Anticoagulants/Puzzle/Components/X_component.svg'
import V from '../../../../Media/Anticoagulants/Puzzle/Components/V_component.svg'
import Trombin from '../../../../Media/Anticoagulants/Puzzle/Components/TROMBIN.svg'
import XI from '../../../../Media/Anticoagulants/Puzzle/Components/XI_component.svg'
import Fibrinogen from '../../../../Media/Anticoagulants/Puzzle/Components/FIBRINOGEN.svg'
import VII from '../../../../Media/Anticoagulants/Puzzle/Components/VII_component.svg'
import Fibrin from '../../../../Media/Anticoagulants/Puzzle/Components/FIBRIN.svg'
import XII from '../../../../Media/Anticoagulants/Puzzle/Components/XII_component.svg'
import KALIKREIN from '../../../../Media/Anticoagulants/Puzzle/Components/KALIKREIN.svg'
// Конец импорт компонентов пазла



const System_coagulation_Puzzle = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = React.createRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  };


  return (
    <div className="puzzle__main_container">
      <h2 className="puzzle__name">СИСТЕМА КОАГУЛЯЦИИ КРОВИ: ПАЗЛ</h2>
      <div className="puzzle__component">
        <div className="puzzle__workspace">
          <div className="puzzle__workspace_panel"></div>
          <div className="puzzle__workspace_slider">
          <button className="puzzle__slider_button-left" onClick={scrollLeft}></button>
          <div className="puzzle__slider_content" ref={sliderRef}>
            <img src={IX} className="puzzle__number-component"></img>
            <img src={NitiFibrina} className="puzzle__name-component width_exclusive"></img>
            <img src={X} className="puzzle__number-component"></img>
            <img src={V} className="puzzle__number-component"></img>
            <img src={Trombin} className="puzzle__name-component"></img>
            <img src={XI} className="puzzle__number-component"></img>
            <img src={Fibrinogen} className="puzzle__name-component"></img>
            <img src={VII} className="puzzle__number-component"></img>
            <img src={Fibrin} className="puzzle__name-component"></img>
            <img src={XII} className="puzzle__number-component"></img>
            <img src={KALIKREIN} className="puzzle__name-component"></img>  
          </div>
          <button className="puzzle__slider_button-right" onClick={scrollRight}></button>
          </div>
        </div>
        <div className="puzzle__inform-click">
          <div className="puzzle__inform-click_textarea">
            <h3 className="puzzle__task_main-text">ЗАДАНИЕ № 1</h3>
            <p className="puzzle__task_sub-text">
              Переместите на экран факторы свёртывания в правильном порядке,
              чтобы собрать схему коагуляции крови. <br></br>[НАЧИНАТЬ СБОРКУ С
              ВНУТРЕННЕГО ПУТИ]
            </p>
            <h3 className="puzzle__task_main-text">Объяснение</h3>
            <p className="puzzle__task_sub-text">
            Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение
            </p>
            <p className="puzzle__task_sub-text">
              Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение
            </p>
            <p className="puzzle__task_sub-text">
            Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение Объяснение Объяснение Объяснение Объяснение
              Объяснение Объяснение
            </p>
          </div>
          <div className="puzzle__inform-click_buttons">
            <button className="puzzle__restart">Начать сначала</button>
            <button className="puzzle__next">Антикоагулянты</button>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default System_coagulation_Puzzle;
