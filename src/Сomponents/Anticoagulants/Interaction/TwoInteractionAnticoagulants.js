import React from "react";
import "./InteractionAnticoagulants.css";

const TwoInteractionAnticoagulants = ({ handleContinue }) => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Взаимодействия:</h2>
      </div>
      <h2 className="task__heading interactions__heading">
      2) Гепарин натрия + ацетилсалициловая
      </h2>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 1</h2>
            </div>
            <h3 className="interactions__text">
            Гепарин натрия - повышает активность антитромбина 3. 
Непрямой ингибитор фактора Ха и тромбина.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 2</h2>
            </div>
            <h3 className="interactions__text">
            Ацетилсалициловая кислота - необратимое ингибирование ЦОГ-1 → ингибирование синтеза тромбоксана А2 в тромбоцитах → ингибирование агрегации тромбоцитов (антитромботический эффект).
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title int__name_last">
              <h2 className="challenge__start-title_text">Взаимодействие</h2>
            </div>
            <h3 className="interactions__text">
            Повышается риск кровотечения вследствие нарушения функции тромбоцитов, повреждения слизистой оболочки желудочно-кишечного тракта, вытеснения антикоагулянтов (непрямых) из связи с белками плазмы крови;
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

export default TwoInteractionAnticoagulants;
