import React from "react";
import "./AntSideEffects.css";
import { Link } from 'react-router-dom';

import leg from "../../../Media/Task/Anticoagulants/1. Coagulation system/leg.svg";
import bed from "../../../Media/Task/Anticoagulants/1. Coagulation system/bed.svg";
import blood from "../../../Media/Task/Anticoagulants/1. Coagulation system/blood.svg";
import empty from "../../../Media/Task/Anticoagulants/1. Coagulation system/empty.svg";

const AntSideEffects = () => {
  return (
    <div className="task__container">
      <div className="task__start-title gen__cont_marg">
        <h2 className="task__start-title_text">Общие побочные эффекты:</h2>
      </div>
      <div className="task__description_content">
        
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={1} className="list list__number" >
              <li>Кровотечение</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={2} className="list list__number" >
              <li>Тромбоцитопения</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={3} className="list list__number" >
              <li>Аллергические реакции</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={4} className="list list__number" >
              <li>Лихорадка</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={5} className="list list__number" >
              <li>Остеопороз</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={6} className="list list__number" >
              <li>Повышение уровня сывороточных протеаз</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={7} className="list list__number" >
              <li>Тошнота</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
          <ol start={8} className="list list__number" >
              <li>Анемия</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img className="task_image-container-picture" src={empty} alt=""></img>
          </div>
        </div>
        
      </div>
      <Link to="/anticoagulants/general_contraindications">
      <button className="task__end-title"><h2 className="task__end-title_text">Взаимодействия</h2></button>
      </Link>
    </div>
  );
};

export default AntSideEffects;
