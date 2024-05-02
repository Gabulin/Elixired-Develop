import React, { useState} from "react";
import ReactCardFlip from "react-card-flip";
import "./TaskMainIndicatorsAnticoagulants.css";

import useScrollDetection from "../../../Utils/UseScrollDetection";

const TaskMainIndicatorsAnticoagulantsTwo = ({ handleContinue }) => {
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
        <h2 className="challenge__heading">Задача 2</h2>
        <ul className="challenge__list">
          <li>
            Женщина 63 года. В экстренном порядке доставлена в дежурный
            хирургический стационар по скорой помощи в связи с сильными болями в
            животе. Выполнена обширная операция по поводу панкреонекроза.
          </li>
          <li>
            Общее состояние тяжелой степени, соотвествует объему оперативного
            вмешательства. По назначению врача: длительный постельный режим в
            послеоперационном периоде, отсутствие физических нагрузок.
            Наблюдение в стационаре около 7 суток после операции.
          </li>
        </ul>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="challenge__container-pract front">
          <ol className="challenge__list-pract">
            <li>Какие из группы антикоогулянтов необходимо назначить?</li>
            <li>С какой целью мы будем использовать данный препарат?</li>
            <li>Какой механизм действия у данных препаратов?</li>
            <li>Какими побочными эффектами обладает данный препарат?</li>
          </ol>
          <div className="challenge__text-input-container">
            <textarea
              className="challenge__text-input"
              placeholder="Ввести свой ответ"
            ></textarea>
            <div className="challenge__scrollbar"></div>
          </div>
          <div className="challenge__buttons">
            <button className="challenge__button_cont" onClick={handleContinue}>
              Продолжить
            </button>
            <button className="challenge__button_explan" onClick={handleClick}>
              Показать объяснение
            </button>
          </div>
        </div>
        <div className="challenge__container-pract back">
          <h2 className="challenge__heading explan">Объяснение</h2>
          <ol className="challenge__list-pract back__list" ref={listRef}>
            <li>
              Низкомолекулярные гепарины (НМГ): эноксапарин, далтепарин,
              надропарин. (гепарины менее предпочтительны в связи с большим
              количеством побочных эффектов).
              
            </li>
            <li>
              Препараты назначаем с целью профилактики тромбоза глубик вен
              (ТГВ), введение только подкожное.
            </li>
            <li>
              НМГ связываются с антитромбином 3 → ингибируют Ха фактор → снижают
              превращение протромбина в тромбин.
            </li>
            <li>
              Побочные эффекты: аллергические реакции, кровотечения и
              тромбоцитопения (выражены меньше, чем у гепаринов).
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

export default TaskMainIndicatorsAnticoagulantsTwo;
