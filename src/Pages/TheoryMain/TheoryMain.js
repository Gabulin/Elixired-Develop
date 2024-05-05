import React, { useState } from "react";
import "./TheoryMain.css"; 

import Footer from "../Footer/Footer";

import ImageButton from "../../Сomponents/ImageButton/ImageButton";
import GoBackButton from "../../Сomponents/GoBackButton/GoBackButton";

import iconInfo from "../../Media/TheoryMain/iconInfo.svg";
import iconBook from "../../Media/TheoryMain/iconBook.svg";
import ThemeBumber1 from "../../Media/TheoryMain/iconThemeNumber1.svg";

import theoryImage from "../../Media/TheoryMain/logoTheory.svg";
import buttonBlocked from "../../Media/TheoryMain/buttomBlocked.svg";

const TheoryMain = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button); 
  };

  return (
    <div className="thery__flex">
      <div className="theory_main">
        <div className="goBackButton__container">
        <GoBackButton route="/"/>
        </div>
        <div className="theory__main_stuck"></div>
        <div className="theory_main__inform">
          <img className="theory-logo" src={theoryImage} alt="Графика теории" />
          <div className="theory_main-container theory_inform-text">
            <h1>Антикоагулянты</h1>
            <img
              className="iconInfo"
              src={iconInfo}
              alt="Иконка информации"
            ></img>
          </div>
          <p className="theory_main__inform-subtext">
            Нажмите на кнопку "Начать" для выбора интересующего урока.
          </p>
          <div className="theory_main-container theory_main__inform-subtext">
            <img className="iconBook" src={iconBook} alt="Иконка книги"></img>
            <p className="lessons">10 уроков</p>
          </div>
        </div>
        <div className="interact__flex">
          <div className="theory_main__interact">
            <div className="theory_main-container">
              <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 1" className="theme__image" />
                <div className="theme__number">1</div>
              </div>
              <h2 className="theory_main__interact-text">Система коагуляции</h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 1}
                  onClick={() => handleButtonClick(1)}
                  route="/anticoagulants/puzzles"
                />
                <p>Система коагуляции крови</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 2}
                  onClick={() => handleButtonClick(2)}
                  activeIndex={1}
                  route="/anticoagulants/puzzles"
                />
                <p>Собрать механизм коагуляции</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 2" className="theme__image" />
                <div className="theme__number">2</div>
              </div>
              <h2 className="theory_main__interact-text">Антикоагулянты</h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 3}
                  onClick={() => handleButtonClick(3)}
                  route="/notfoundpage"
                />
                <p>Механизмы действия антикоагулянтов</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 4}
                  onClick={() => handleButtonClick(4)}
                  route="/notfoundpage"
                />
                <p>Собрать механизмы действия</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 3" className="theme__image" />
                <div className="theme__number">3</div>
              </div>
              <h2 className="theory_main__interact-text">
                Общие показания антикоагулянтов
              </h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 7}
                  onClick={() => handleButtonClick(7)}
                  route="/anticoagulants/main_Indicators"
                />
                <p>Основные показания</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 8}
                  onClick={() => handleButtonClick(8)}
                  activeIndex={1}
                  route="/anticoagulants/main_Indicators"
                />
                <p>Показания: Задача №1</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 9}
                  onClick={() => handleButtonClick(9)}
                  activeIndex={2}
                  route="/anticoagulants/main_Indicators"
                />
                <p>Показания: Задача №2</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 10}
                  onClick={() => handleButtonClick(10)}
                  activeIndex={3}
                  route="/anticoagulants/main_Indicators"
                />
                <p>Показания: Задача №3</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 4" className="theme__image" />
                <div className="theme__number">4</div>
              </div>
              <h2 className="theory_main__interact-text">
                Общие противопоказания антикоагулянтов
              </h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 11}
                  onClick={() => handleButtonClick(11)}
                  route="/anticoagulants/general_contraindications"
                />
                <p>Основные противопоказания</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 12}
                  onClick={() => handleButtonClick(12)}
                  activeIndex={1}
                  route="/anticoagulants/general_contraindications"
                />
                <p>Противопоказания: Задача №1</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 13}
                  onClick={() => handleButtonClick(13)}
                  activeIndex={2}
                  route="/anticoagulants/general_contraindications"
                />
                <p>Противопоказания: Задача №2</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 14}
                  onClick={() => handleButtonClick(14)}
                  activeIndex={3}
                  route="/anticoagulants/general_contraindications"
                />
                <p>Противопоказания: Задача №3</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 5" className="theme__image" />
                <div className="theme__number">5</div>
              </div>
              <h2 className="theory_main__interact-text">
                Общие побочные эффекты
              </h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 15}
                  onClick={() => handleButtonClick(15)}
                  route="/notfoundpage"
                />
                <p>Основные побочные эффекты</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 6" className="theme__image" />
                <div className="theme__number">6</div>
              </div>
              <h2 className="theory_main__interact-text">
                Взаимодействия с препаратами
              </h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 16}
                  onClick={() => handleButtonClick(16)}
                  route="/anticoagulants/interactions"
                />
                <p>Взаимодействия с другими препаратами</p>
              </div>
            </div>
          </div>
          <div className="theory_main__interact">
            <div className="theory_main-container">
            <div className="theme__container">
                <img src={ThemeBumber1} alt="Тема 7" className="theme__image" />
                <div className="theme__number">7</div>
              </div>
              <h2 className="theory_main__interact-text">Рецептура</h2>
            </div>
            <div className="interact_buttons">
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 17}
                  onClick={() => handleButtonClick(17)}
                  route="/notfoundpage"
                />
                <p>Рецептура</p>
              </div>
              <div className="button_container">
                <ImageButton
                  buttonText="Начать"
                  isOpen={activeButton === 18}
                  onClick={() => handleButtonClick(18)}
                  route="/notfoundpage"
                />
                <p>Задачи на рецептуруи</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryMain;
