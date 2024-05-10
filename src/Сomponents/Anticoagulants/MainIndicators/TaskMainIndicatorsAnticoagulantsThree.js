import React, { useState} from "react";
import ReactCardFlip from "react-card-flip";
import "./TaskMainIndicatorsAnticoagulants.css";

import useScrollDetection from "../../../Utils/UseScrollDetection";

import { Link } from 'react-router-dom';

const TaskMainIndicatorsAnticoagulantsThree = () => {
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
            Женщина 83 года поступила в дежурный хирургический стационар по
            скорой помощи с жалобами на отек и болезненность конечности, цианоз
            кожного покрова пораженной конечности, снижение подвижности.{" "}
          </li>
          <li>
            На УЗИ вен нижних конечностей выявлен тромбоз глубоких вен задней
            большеберцовой артерии в верхней трети голени.{" "}
          </li>
        </ul>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="challenge__container-pract front">
          <ol className="challenge__list-pract" ref={listRef}>
            <li>
              Какие препараты из группы антикоагулянтов необходимо назначить?
            </li>
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
          <Link to="/anticoagulants/general_contraindications">
            <button className="challenge__button_cont">Противопоказания</button>
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
                Лечение проводится как нефракционированным гепарином (НФГ), так и
                низкомолекулярный гепарин (НМГ), с последующим пероральным
                использованием антикоагулянта варфарина. Приминение НМГ
                предпочтительнее в связи с тем, что нет необходимости в
                лабораторном мониторинге уровня АЧТВ, более безопасен и
                биодоступность выше.
              </li>
              <li>
                Варфарин - пероральный антикоогулянт, антагонист витамина К.
                Ингибирует эпоксидредуктазу витамина К в печени → уменьшает
                печеностный синтез активной, востановленной формы витамина К →
                уменьшается синтез факторов свертывания, а также протеина С и S.
              </li>
              <li>
                Побочные эффекты варфарина: кровотечение, аллергические реакции,
                диспепсические расстройства. Противопоказан при бременности!
                (обладает тератогенным действием)
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

export default TaskMainIndicatorsAnticoagulantsThree;
