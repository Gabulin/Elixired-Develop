import React from "react";
import "./General_Contraindications_Anticoagulants.css";

import leg from "../../../Media/Task/Anticoagulants/1. Coagulation system/leg.svg";
import bed from "../../../Media/Task/Anticoagulants/1. Coagulation system/bed.svg";
import blood from "../../../Media/Task/Anticoagulants/1. Coagulation system/blood.svg";
import empty from "../../../Media/Task/Anticoagulants/1. Coagulation system/empty.svg";

const General_Contraindications_Anticoagulants = ({ handleContinue }) => {
  return (
    <div className="task__container">
      <div className="task__start-title gen__cont_marg">
        <h2 className="task__start-title_text">Общие противопоказания антикоагулянтов:</h2>
      </div>
      <div className="task__description_content">
        
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={1} className="list list__number" >
              <li>Аллергические реакциии</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={2} className="list list__number" >
              <li>Заболевания, сопровождающиеся повышенной кровоточивостью: гемофилия, тромбоцитопения, эрозивно-язвенные поражения ЖКТ, кровотечения, инсульт.</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={3} className="list list__number" >
              <li>Тяжёлые нарушения печени и почек</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={4} className="list list__number" >
              <li>Тяжёлая артериальная гипертензия</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={5} className="list list__number" >
              <li>Беременность (особенно варфарин)</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={6} className="list list__number" >
              <li>Лактация</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty}></img>
          </div>
        </div>
        
      </div>
      <button className="task__end-title" onClick={handleContinue}><h2 className="task__end-title_text">Перейти к задачам</h2></button>
    </div>
  );
};

export default General_Contraindications_Anticoagulants;
