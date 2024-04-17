import React from "react";
import "./Interaction_Anticoagulants.css";

const Three_Interaction_Anticoagulants = ({ handleContinue }) => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Взаимодействия:</h2>
      </div>
      <h2 className="task__heading interactions__heading">
        3) НМГ, НФГ + цефалоспорины
      </h2>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 1</h2>
            </div>
            <h3 className="interactions__text">
              НМГ и НФГ - связываясь с антитромбином 3 ингибирует Ха фактор и
              тромбин (только НФГ).
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 2</h2>
            </div>
            <h3 className="interactions__text">
              Цефалоспорины - бактерицидные антибиотики, обладающие широким
              спектром антимикробного действия, в том числе на
              пенициллинообразующие стафилококки, энтеробактерии.{" "}
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title int__name_last">
              <h2 className="challenge__start-title_text">Взаимодействие</h2>
            </div>
            <h3 className="interactions__text">
              Их взаимодействие  увеличивает вероятность кровотечения.
              Цефтриаксон, подавляя кишечную флору, препятствует синтезу
              витамина К.  При одновременном назначении
              с антикоагулянтами отмечается усиление действия последних. При
              одновременном назначении с "петлевыми" диуретиками возрастает риск
              развития нефротоксического действия.{" "}
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

export default Three_Interaction_Anticoagulants;
