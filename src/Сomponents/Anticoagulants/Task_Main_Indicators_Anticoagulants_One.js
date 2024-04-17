import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Task_Main_Indicators_Anticoagulants.css"; 

const Task_Main_Indicators_Anticoagulants_One = ({ handleContinue }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="challenge__container">
      <div className="challenge__container-text">
        <div className="challenge__start-title">
          <h2 className="challenge__start-title_text">Практика</h2>
        </div>
        <h2 className="challenge__heading">Задача 1</h2>
        <ul className="challenge__list">
          <li>
            Мужчина 55 лет доставлен в отделение неотложной помощи через 40
            минут после появления выраженной отдышки, выраженных резкий болей в
            грудной клетке. По прибытие на вопросы не отвечает.
          </li>
          <li>
            При осмотре пульс нитевидный 160 уд/мин, ЧДД 30/мин, АД 65/40
            мм.рт.ст. На КТ-ангиографии грудной клетки показывают обширную ТЭЛА
            правой легочной артерии области корня легкого.
          </li>
        </ul>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="challenge__container-pract front">
          <ol className="challenge__list-pract">
            <li>
              Какой препарат необходимо ввести данному пациенту и какой способ
              введения выберете?
            </li>
            <li>Какие факторы свертывания ингибирует данный препарат?</li>
            <li>Какие побочные эффекты могут развиться?</li>
          </ol>
          <div className="challenge__text-input-container">
            <textarea
              className="challenge__text-input"
              placeholder="Ввести свой ответ"
            ></textarea>
            <div className="challenge__scrollbar"></div>
          </div>
          <div className="challenge__buttons">
            <button className="challenge__button_cont" onClick={handleContinue}>Продолжить</button>
            <button className="challenge__button_explan" onClick={handleClick}>
              Показать объяснение
            </button>
          </div>
        </div>
        <div className="challenge__container-pract back">
        <h2 className="challenge__heading explan">Объяснение</h2>
            <ol className="challenge__list-pract back__list">
              <li>Гепарин натрия, введение внутривенно.</li>
              <li>
                Он ингибирует тромбин и фактор Ха, усиливая активность
                антитромбина, эндогенного антикоогулянта. Он используется при
                лечение и профилактики венозной тромбоэмболии, такой как ТЭЛА,
                что наблюдается у данного пациента. Нефракционированный гепарин
                соединяется с антитромбином 3 и тромбином одновременно в двух
                различных сайтах связывания. Это приводит к ингибированию
                тромбина и следовательно, к снижению активации фибриногена и
                образования фибрина.
              </li>
              <li>
                Побочные эффекты включают кровотечение, аллергические реакции,
                остеопороз и гепарин-индуцированную тромоцитопению.
              </li>
            </ol>

            <div className="challenge__buttons flip__buttons">
              <button
                className="challenge__button_explan flip__button"
                onClick={handleClick}
              >
                Перевернуть
              </button>
            </div>
          </div>
      </ReactCardFlip>
    </div>
  );
};

export default Task_Main_Indicators_Anticoagulants_One;
