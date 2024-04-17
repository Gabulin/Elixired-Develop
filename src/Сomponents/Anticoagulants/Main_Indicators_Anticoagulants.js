import React from "react";
import "./Main_Indicators_Anticoagulants.css";

import leg from '../../Media/Task/Anticoagulants/1. Coagulation system/leg.svg'
import bed from "../../Media/Task/Anticoagulants/1. Coagulation system/bed.svg";
import blood from "../../Media/Task/Anticoagulants/1. Coagulation system/blood.svg";
import empty from "../../Media/Task/Anticoagulants/1. Coagulation system/empty.svg";

const Main_Indicators_Anticoagulants = ({ handleContinue }) => {
  return (
    <div className="task__container">
      <div className="task__start-title">
        <h2 className="task__start-title_text">Основные показания:</h2>
      </div>
      <h2 className="task__heading">Терапия низкими дозами: Подкожное введение</h2>
      <div className="task__description_content">
        
        <div className="task__description_content-part">
          <div className="task__description_content-text">
            <ol className="list list__number">
              <li>
                Профилактика тромбоза глубоких вен нижних конечностей (ТГВ) при:
              </li>
            </ol>
            <ul className="list">
              <li className="list__part"> <div class="list__content">Длительном постельном режиме</div> </li>
              <li className="list__part"> <div class="list__content">Пред- и послеоперационном периоде</div> </li>
            </ul>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={leg}></img>
            <img className="task_image-container-picture" src={bed}></img>
            <img className="task_image-container-picture" src={bed}></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={2} className="list list__number" >
              <li>Профилактика ТЭЛА</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={leg}></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={3} className="list list__number three">
              <li>Профилактика ишемического инсульта и системных эмболий при фибриляции предсердий</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={leg}></img>
          </div>
        </div>
      </div>
      <h2 className="task__heading">Терапия высокими дозами: Внутривенное введение</h2>
      <div className="task__description_content">
      <div className="task__description_content-part">
          <div className="task__description_content-text">
            <ol className="list list__number"> 
              <li>
              Немедленный антикоагулянтный<br></br> эффект при:
              </li>
            </ol>
            <ul className="list">
              <li className="list__part"><div class="list__content">Мерцательной аритмии</div> </li>
              <li className="list__part"><div class="list__content">ТГВ, остром артериальном тромбозе, ТЭЛА </div></li>
              <li className="list__part"><div class="list__content">Остром коронарном синдроме, инфаркте миокарда </div> </li>
              <li className="list__part"><div class="list__content">Механической замене сердечного клапана </div> </li>
            </ul>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={leg}></img>
            <img className="task_image-container-picture" src={bed}></img>
            <img className="task_image-container-picture" src={bed}></img>
            <img className="task_image-container-picture" src={bed}></img>
            <img className="task_image-container-picture" src={bed}></img>
          </div>
        </div>
        </div>
      <button className="task__end-title" onClick={handleContinue}><h2 className="task__end-title_text">Смотреть дальше</h2></button>
    </div>
  );
};

export default Main_Indicators_Anticoagulants;
