import React from "react";
import "./AntSideEffects.css";
import { Link } from "react-router-dom";
import GoBackButton from "../../GoBackButton/GoBackButton";

import {
  bleedingImage,
  thrombocytopenia,
  allergiaImage,
  fever,
  osteoporosis,
  protease,
  nausea,
  anemia,
} from "../AntocoagulantsPicImports";

const AntSideEffects = () => {
  return (
    <div>
      <div className="header__slider_container" style={{display:"flex", justifyContent:"flex-start"}} >
        <div className="slider_goBackButton_container">
          <GoBackButton route="/theory" />
        </div>
      </div>
    <div className="task__container" style={{marginBottom:"100px"}}>
      <div className="task__start-title gen__cont_marg">
        <h2 className="task__start-title_text">Общие побочные эффекты:</h2>
      </div>
      <div className="task__description_content">
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={1} className="list list__number">
              <li>Кровотечение</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={bleedingImage}
              alt=""
            ></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={2} className="list list__number">
              <li>Тромбоцитопения</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={thrombocytopenia}
              alt=""
            ></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={3} className="list list__number">
              <li>Аллергические реакции</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={allergiaImage}
              alt=""
            ></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={4} className="list list__number">
              <li>Лихорадка</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={fever}
              alt=""
            ></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={5} className="list list__number">
              <li>Остеопороз</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={osteoporosis}
              alt=""
            ></img>
          </div>
        </div>

        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={6} className="list list__number">
              <li>Повышение уровня сывороточных протеаз</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={protease}
              alt=""
            ></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={7} className="list list__number">
              <li>Тошнота</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={nausea}
              alt=""
            ></img>
          </div>
        </div>
        <div className="task__description_content-part">
          <div className="task__description_content-text text__around">
            <ol start={8} className="list list__number">
              <li>Анемия</li>
            </ol>
          </div>
          <div className="task__description_content-img_container">
            <img
              className="task_image-container-picture"
              src={anemia}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AntSideEffects;
