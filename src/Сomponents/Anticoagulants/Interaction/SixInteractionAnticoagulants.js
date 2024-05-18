import React from "react";
import "./InteractionAnticoagulants.css";

import { Link } from "react-router-dom";

const SixInteractionAnticoagulants = () => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Взаимодействия:</h2>
      </div>
      <h2 className="task__heading interactions__heading">
        6) Варфарин + амоксициллин
      </h2>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 1</h2>
            </div>
            <h3 className="interactions__text">
              Амоксициллин - Антибиотик группы полусинтетических пенициллинов
              широкого спектра действия, неустойчивые к В-лактамазам. Активен в
              отношении аэробных грамположительных бактерий: Staphylococcus spp.
              (за исключением штаммов, продуцирующих пенициллиназу),
              Streptococcus spp.; аэробных грамотрицательных бактерий: Neisseria
              gonorrhoeae, Neisseria meningitidis, Escherichia coli, Shigella
              spp., Salmonella spp., Klebsiella spp.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title">
              <h2 className="challenge__start-title_text">Препарат 2</h2>
            </div>
            <h3 className="interactions__text">
              Варфарин - Антикоагулянт непрямого действия, производное кумарина.
              Подавляет синтез витамин К-зависимых факторов свертывания крови
              (II, VII, IX и X) и антикоагулянтных протеинов C и S в печени.
            </h3>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="interactions__description_content-text text__around">
            <div className="interactions__name-title int__name_last">
              <h2 className="challenge__start-title_text">Взаимодействие</h2>
            </div>
            <h3 className="interactions__text">
              Амоксициллин усиливает действие непрямых антикоагулянтов подавля
              кишечную микрофлору, снижает синтез витамина К и протромбиновый
              индекс.
            </h3>
          </div>
        </div>
      </div>
      <Link to="/theory">
        <button className="task__end-title">
          <h2 className="task__end-title_text">Смотреть дальше</h2>
        </button>
      </Link>
    </div>
  );
};

export default SixInteractionAnticoagulants;
