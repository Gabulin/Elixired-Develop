import React, { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import "./Task_General_Contraindications_Anticoagulants.css";

const Task_Two_General_Contraindications_Anticoagulants = ({ handleContinue }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef(null);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleWheelScroll = (event) => {
      const delta = event.deltaY > 0 ? 50 : -50;

      listRef.current.scrollTop += delta;

      event.preventDefault();
    };

    const list = listRef.current;
    list.addEventListener("wheel", handleWheelScroll);

    return () => {
      list.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const list = listRef.current;
      const isScrollable = list.scrollHeight > list.clientHeight;
      setIsVisible(
        isScrollable && list.scrollTop === list.scrollHeight - list.clientHeight
      );
      setScrollPosition(list.scrollTop);
    };

    const list = listRef.current;
    list.addEventListener("scroll", handleScroll);

    return () => {
      list.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="challenge__container">
      <div className="challenge__container-text">
        <div className="challenge__start-title">
          <h2 className="challenge__start-title_text">Практика</h2>
        </div>
        <h2 className="challenge__heading">Задача 2</h2>
        <ul className="challenge__list">
          <li>
            38-летняя женщина, четвертая беременность сроком 12 недель. В
            анамнезе: 2 года назад выполнено протезирование трикуспедального
            клапана, наличие перенесенных тромбозов и варикозное расширение вен
            нижних конечностей.
          </li>
        </ul>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="challenge__container-pract front">
          <ol className="challenge__list-pract" ref={listRef}>
            <li>
              Какой наиболее подходящий препарат является наиболее подходящей
              фармакотерапией при данном анамнезе? Объясните свой вариант
              ответа.
            </li>
            <li>Какие препараты можно и какие нельзя использовать?</li>
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
          <ol className="challenge__list-pract back__list" ref={listRef}>
            <li>
              Данной пациентке могут быть выписаны следующие варианты: НФГ, НМГ
              (эноксопарин, надропарин, дальтепарин) с целью профилактики и
              лечения тромбозов. Данные препараты  не проникают через плацену и
              не оказывают тератогенное действие.
            </li>
            <li>
              Нельзя назначать в данном случае: 1) Селективные ингибиторы Ха
              фактора: фондапаринкус, ривораксабан; 2) Гепариноиды: сулодексид;
              3) Прямые ингибиторы тромбина: Дабигатран, Апиксабан; 4)
              Антагонисты витамина К: Варфарин. Данные препараты проникают через
              плаценту и обладают тератогенным действием.
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

export default Task_Two_General_Contraindications_Anticoagulants;
