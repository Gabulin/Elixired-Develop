import React from "react";
import "./InteractionAnticoagulants.css";

const OneInteractionAnticoagulants = ({ handleContinue }) => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Взаимодействия:</h2>
      </div>
      <h2 className="task__heading interactions__heading">
        1) Дабигатрана этексилат + омепразол
      </h2>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 1</h2>
            </div>
            <h3 className="interactions__text">
              Дабигатрана этексилат - селективный ингибитор тромбина и фактора
              Ха.Всасывание увеличивается в кислой среде.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 2</h2>
            </div>
            <h3 className="interactions__text">
              Омепразол - ингибитор фермента Н+/К+-аденозинтрифосфат (АТФ)-фазы.
              Тормозит активность Н+/К+ - аденозинтрифосфат  в париетальных
              клетках желудка → уменьшает секретность соляной кислоты
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title int__name_last">
              <h2 className="challenge__start-title_text">Взаимодействие</h2>
            </div>
            <h3 className="interactions__text">
              В  связи с уменьшением синтеза соляной кислоты и понижением
              кислотности  желудка под действием омепразола уменьшается
              биодоступность дабигатрана → снижается фармакологический эффект
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

export default OneInteractionAnticoagulants;
