import React from "react";
import "./InteractionAnticoagulants.css";

import { Link } from "react-router-dom";

const FiveInteractionAnticoagulants = ({handleContinue}) => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Взаимодействия:</h2>
      </div>
      <h2 className="task__heading interactions__heading">
        5) Рифампицин+варфарин
      </h2>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 1</h2>
            </div>
            <h3 className="interactions__text">
              Рифампицин-полусинтетический антибиотик, противотуберкулезное
              средство. Ингибирует ДНК-зависимую РНК-полимеразу микобактерии
              туберкулезиз, бактерицидное действие на Г- и Г+. Уменьшает
              продукцию витамина К микрофлорой кишечника.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 2</h2>
            </div>
            <h3 className="interactions__text">
              Варфарин-антикоагулянт непрямого действия, устраняет активирующее
              влияние витамина К на факторы свертывания.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title int__name_last">
              <h2 className="challenge__start-title_text">Взаимодействие</h2>
            </div>
            <h3 className="interactions__text">
              Фармакодинамическая несовместимость, т.к рифампицин является
              индуктором Р450, что укорачивает действие варфарина + усиливается
              эффект антикоагулянта за счет уменьшения витамина К в организме
              собственной микрофлорой.
            </h3>
          </div>
        </div>
      </div>
        <button className="task__end-title" onClick={handleContinue}>
          <h2 className="task__end-title_text">Смотреть дальше</h2>
        </button>
    </div>
  );
};

export default FiveInteractionAnticoagulants;
