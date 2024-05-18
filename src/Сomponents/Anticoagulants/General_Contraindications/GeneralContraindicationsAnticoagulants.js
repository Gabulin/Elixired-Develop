import React from "react";
import "./GeneralContraindicationsAnticoagulants.css";

import {pregnantImage,
  liverImage,
  lactImage,
  hearthtickImage,
  bleedingImage,
  allergiaImage} from "../AntocoagulantsPicImports"

const GeneralContraindicationsAnticoagulants = ({ handleContinue }) => {
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
            <img className="task_image-container-picture" src={allergiaImage} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={2} className="list list__number" >
              <li>Заболевания, сопровождающиеся повышенной кровоточивостью: гемофилия, тромбоцитопения, эрозивно-язвенные поражения ЖКТ, кровотечения, инсульт.</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={bleedingImage} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={3} className="list list__number" >
              <li>Тяжёлые нарушения печени и почек</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={liverImage} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={4} className="list list__number" >
              <li>Тяжёлая артериальная гипертензия</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={hearthtickImage} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={5} className="list list__number" >
              <li>Беременность (особенно варфарин)</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={pregnantImage} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={6} className="list list__number" >
              <li>Лактация</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={lactImage} alt=""></img>
          </div>
        </div>
        
      </div>
      <button className="task__end-title" onClick={handleContinue}><h2 className="task__end-title_text">Перейти к задачам</h2></button>
    </div>
  );
};

export default GeneralContraindicationsAnticoagulants;
