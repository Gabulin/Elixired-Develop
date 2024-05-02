import React, { useState} from "react";
import ReactCardFlip from "react-card-flip";
import "./TaskGeneralContraindicationsAnticoagulants.css";

import useScrollDetection from "../../../Utils/UseScrollDetection";

import { Link } from 'react-router-dom';

const TaskThreeGeneralContraindicationsAnticoagulants = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

 //Фикс ошибки скролла для компонента задачи внутри компонента слайдера, на случай, если он понадобится
 const { listRef} = useScrollDetection();


  return (
    <div className="challenge__container">
      <div className="challenge__container-text">
        <div className="challenge__start-title">
          <h2 className="challenge__start-title_text">Практика</h2>
        </div>
        <h2 className="challenge__heading">Задача 3</h2>
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
          <Link to="/theory"> 
            <button className="challenge__button_cont">Продолжить</button>
            </Link>
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

export default TaskThreeGeneralContraindicationsAnticoagulants;
