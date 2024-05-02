import React, { useState, useEffect, useRef } from "react";

import Lottie from "react-lottie-player";

import "./SystemCoagulationPuzzle.css";
import "./VideoComponents.css";

import TextTyper from "../../../../Utils/TextTyper";

// Начало импорт компонентов пазла
import IX from "../../../../Media/Anticoagulants/Puzzle/Components/IX_component.svg";
import NitiFibrina from "../../../../Media/Anticoagulants/Puzzle/Components/NITI_FIBRINA.svg";
import X from "../../../../Media/Anticoagulants/Puzzle/Components/X_component.svg";
import V from "../../../../Media/Anticoagulants/Puzzle/Components/V_component.svg";
import Trombin from "../../../../Media/Anticoagulants/Puzzle/Components/TROMBIN.svg";
import XI from "../../../../Media/Anticoagulants/Puzzle/Components/XI_component.svg";
import Fibrinogen from "../../../../Media/Anticoagulants/Puzzle/Components/FIBRINOGEN.svg";
import VII from "../../../../Media/Anticoagulants/Puzzle/Components/VII_component.svg";
import Fibrin from "../../../../Media/Anticoagulants/Puzzle/Components/FIBRIN.svg";
import XII from "../../../../Media/Anticoagulants/Puzzle/Components/XII_component.svg";
import KALIKREIN from "../../../../Media/Anticoagulants/Puzzle/Components/KALIKREIN.svg";

// Импорт компонентов фона
import PreKalikrein from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/Prekalikrein.svg";
import XIIa from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/XIIa.svg";
import XIa from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/XIa.svg";
import IXa from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/IXa.svg";
import VIIa from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/VIIa.svg";
import Xa from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/Xa.svg";
import ProTrombin from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/ProTrombin.svg";

//Импорт стрелок
import arrow_left from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/arrows/puzzle_arrow_left.svg";
import arrow_right from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/arrows/puzzle_arrow_right.svg";
import arrow_down from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/arrows/puzzle_arrow_down.svg";
import arrow_right_big from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/arrows/puzzle_arrow_right_big.svg";
import arrow_tray from "../../../../Media/Anticoagulants/Puzzle/BackGround_componets/arrows/puzzle_arrow_tray.svg";

const SystemCoagulationVideo = ({ handleContinue }) => {

  const [progress, setProgress] = useState(0);

  const handleRightClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
  };

  const handleX2RightClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 100, 100));
  };

  const handleX2LeftClick = () => {
    setProgress(prevProgress => Math.max(prevProgress - 100, 0));
  };

  const handleLeftClick = () => {
    setProgress(prevProgress => Math.max(prevProgress - 10, 0));
  };

  return (
    <div className="puzzle__main_container">
      <h2 className="puzzle__name">СИСТЕМА КОАГУЛЯЦИИ КРОВИ</h2>
      <div className="puzzle__component">
        <div className="puzzle__workspace">
          
          <div className="puzzle__workspace_panel">
          {progress >= 10 && (
            <>
              <h3 className="fade-in back_con_1">
                Внутренний путь<br></br>
                (Повреждение эндотелия)
              </h3>
              <img className="fade-in back_con_2" src={arrow_left} alt=""></img>
              <img
                className="fade-in back_con_3"
                src={PreKalikrein}
                alt=""
              ></img>
            </>
          )}
          {progress >= 20 && (
            <>
              <img
                className="fade-in back_con_el_1"
                src={KALIKREIN}
                alt=""
              ></img>
              <img className="fade-in back_con_4" src={arrow_left} alt=""></img>
            </>
          )}
          {progress >= 30 && (
            <>
            <img className="fade-in back_con_el_2" src={XII} alt=""></img>
              <img className="fade-in back_con_5" src={arrow_down} alt=""></img>
              <img
                className="fade-in back_con_6"
                src={arrow_right}
                alt=""
              ></img>
              <img className="fade-in back_con_7" src={XIIa} alt=""></img>
            </>
          )}
          {progress >= 40 && (
            <>
            <img className="fade-in back_con_el_3" src={XI} alt=""></img>
              <img className="fade-in back_con_8" src={arrow_down} alt=""></img>
              <img
                className="fade-in back_con_9"
                src={arrow_right}
                alt=""
              ></img>
              <img className="fade-in back_con_10" src={XIa} alt=""></img>
            </>
          )}
          {progress >= 50 && (
            <>
            <img className="fade-in back_con_el_4" src={IX} alt=""></img>
              <img
                className="fade-in back_con_11"
                src={arrow_down}
                alt=""
              ></img>
              <img
                className="fade-in back_con_12"
                src={arrow_right}
                alt=""
              ></img>
              <img className="fade-in back_con_13" src={IXa} alt=""></img>
            </>
          )}
          {progress >= 60 && (
            <>
            <img className="fade-in back_con_el_5" src={X} alt=""></img>
              <h3 className="fade-in back_con_14">VIII, Ca</h3>
              <img
                className="fade-in back_con_15"
                src={arrow_down}
                alt=""
              ></img>
              <img className="fade-in back_con_16" src={arrow_right_big}></img>
              <img className="fade-in back_con_17" src={VIIa} alt=""></img>
              <img
                className="fade-in back_con_18"
                src={arrow_down}
                alt=""
              ></img>
              <h3 className="fade-in back_con_19">III, Ca</h3>
              <img className="fade-in back_con_20" src={Xa} alt=""></img>
            </>
          )}
          {progress >= 70 && (
            <>
            <img className="fade-in back_con_el_6" src={Trombin} alt=""></img>
              <img
                className="fade-in back_con_21"
                src={arrow_down}
                alt=""
              ></img>
              <h3 className="fade-in back_con_22">V, Ca</h3>
              <img
                className="fade-in back_con_23"
                src={ProTrombin}
                alt=""
              ></img>
              <img
                className="fade-in back_con_24"
                src={arrow_right}
                alt=""
              ></img>
            </>
          )}
          {progress >= 80 && (
            <>
            <img className="fade-in back_con_el_7" src={Fibrinogen} alt=""></img>
            <img className="fade-in back_con_el_8" src={Fibrin} alt=""></img>
              <img
                className="fade-in back_con_25"
                src={arrow_down}
                alt=""
              ></img>
              <img
                className="fade-in back_con_26"
                src={arrow_right}
                alt=""
              ></img>
            </>
          )}
          {progress >= 90 && (
            <>
            <img className="fade-in back_con_el_9" src={NitiFibrina} alt=""></img>
              <img
                className="fade-in back_con_27"
                src={arrow_tray}
                alt=""
              ></img>
            </>
          )}
          {progress >= 100 && (
            <>
            <img className="fade-in back_con_el_10" src={VII} alt=""></img>
              <h3 className="fade-in back_con_28">
                Внешний путь<br></br>(Повреждение тканей)
              </h3>
              <img
                className="fade-in back_con_29"
                src={arrow_left}
                alt=""
              ></img>
              <img
                className="fade-in back_con_30"
                src={arrow_left}
                alt=""
              ></img>
            </>
          )}
          </div>
          <div className="bar">
          <div className="status-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="video__button_left-all" onClick={handleX2LeftClick}></button>
      <button className="video__button_left" onClick={handleLeftClick}></button>
      <button className="video__button_right" onClick={handleRightClick}></button>
      <button className="video__button_right-all" onClick={handleX2RightClick}></button>
        </div>
        </div>
        <div className="puzzle__inform-click">
          <div className="puzzle__inform-click_textarea">
            <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>Интерактивная панель</h3>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>
                  Нажимайте на стрелки, чтобы просмотреть тему "Система коагуляции крови"
                </p>
              </TextTyper>
            </div>

            <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>Объяснение</h3>
              </TextTyper>
            </div>
            <div className="">
              
                <p className="puzzle__task_sub-text"><TextTyper>Существует два пути коагуляции:</TextTyper></p>
                <p className="puzzle__task_sub-text sub_margin_none"><TextTyper>Внутренний и Внешний.</TextTyper></p>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>
                  Внутренний путь запускается эндогенными факторами,
                  циркулирующими в крови.
                </p>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>
                  Внешний путь запускается тканевым фактором, возникающим после
                  повреждения эндотелия сосудов или гладких мышечных клеток
                  сосуда.
                </p>
              </TextTyper>
            </div>
            {progress >= 10 && (
              <>
            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>Внутренний путь активации:</p>
              </TextTyper>
            </div>
            
              <ul className="dot_subtext">
                <li>
                  <TextTyper>
                    Образуется комплекс на поверхности тромбоцитарного агреганта
                    из плазменного прекалликреина, ВМК (высокомолекулярного
                    кининогена и XII - го неактивного фактора).
                  </TextTyper>
                </li>
              </ul>
              </>
            )}

            {progress >= 20 && (
              <ul className="dot_subtext">
                <li>
                  <TextTyper>
                    Плазменный прекалликреин под действием ВМК превращается в
                    калликреин.
                  </TextTyper>
                </li>
              </ul>
            )}

            {progress >= 30 && (
              <ul className="dot_subtext">
                <li>
                  <TextTyper>Калликреин активирует XII - ый фактор.</TextTyper>
                </li>
              </ul>
            )}

            {progress >= 40 && (
              <ul className="dot_subtext">
                <li>
                  <TextTyper>
                    Активный XII - ый фактор - это сериновая протеаза (молекула,
                    расщепляющая белки), он взаимодействует с XI - ым фактором
                    неактивным и отщепляет от него часть. После чего XI - ый
                    фактор становится активным.
                  </TextTyper>
                </li>
              </ul>
            )}

            {progress >= 50 && (
              <ul className="dot_subtext">
                <li>
                  <TextTyper>
                    XI - ый активный фактор взаимодействует с IX -ым неактивным
                    фактором и с ионами кальция, благодаря чему IX - ый фактор
                    тоже активируется.
                  </TextTyper>
                </li>
              </ul>
            )}

            {progress >= 60 && (
              <>
                <ul className="dot_subtext">
                  <li className="dot_subtext_point">
                    <TextTyper>
                      IX - ый фактор взаимодействует с VIII - ым активным
                      фактором и ионами кальция, они активируют X - ый фактор.
                    </TextTyper>
                  </li>
                </ul>
                <ul className="dot_subtext">
                  <li className="dot_subtext_point">
                    <TextTyper>
                      Сам VIII - ый фактор активируется II - ым фактором
                      (тромбином).
                    </TextTyper>
                  </li>
                </ul>
              </>
            )}

            {progress >= 70 && (
              <ul className="dot_subtext">
                <li className="dot_subtext_point">
                  <TextTyper>
                    X - ый активированный фактор взаимодействует с ионами
                    кальция и со вспомогательным V - ым фактором, который тоже
                    активируется тромбином. Таким образом, II - ой неактивный
                    фактор (протромбин) превращается в тромбин (II - ой активный
                    фактор).
                  </TextTyper>
                </li>
              </ul>
            )}

            {progress >= 80 && (
              <ul className="dot_subtext">
                <li className="dot_subtext_point">
                  <TextTyper>Тромбин преобразует фибриноген в фибрин</TextTyper>
                </li>
              </ul>
            )}

            {progress >= 90 && (
              <ul className="dot_subtext">
                <li className="dot_subtext_point">
                  <TextTyper>
                    Фибрин в дальнейшем полимеризуется и образует нити фибрина.
                  </TextTyper>
                </li>
              </ul>
            )}

            {progress >= 100 && (
              <>
                <div className="puzzle__task_sub-text">
                  <TextTyper>
                    <p>Внешний путь активации:</p>
                  </TextTyper>
                </div>
                <ul className="dot_subtext">
                  <li className="dot_subtext_point">
                    <TextTyper>
                      При повреждении эндотелия сосудов выделяется тканевой
                      фактор (III - ий фактор). Он способствует превращению VII
                      - го неактивного фактора в активный.
                    </TextTyper>
                  </li>
                </ul>
                <ul className="dot_subtext">
                  <li className="dot_subtext_point">
                    <TextTyper>
                      VII - ой активный фактор взаимодействует с III - им
                      фактором и ионами кальция, это способствует активации X -
                      го фактора.
                    </TextTyper>
                  </li>
                </ul>
                <ul className="dot_subtext">
                  <li className="dot_subtext_point">
                    <TextTyper>
                      Дальнейшая схема коагуляции соответствует внутреннего пути
                      активации.
                    </TextTyper>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="puzzle__inform-click_buttons">
            <button
              className={`puzzle__next ${
                progress >= 100
                  ? "puzzle__next-active"
                  : "puzzle__next-inactive"
              }`}
              onClick={progress >= 100 ? handleContinue : undefined}
            >
              Собрать пазл коагуляции
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemCoagulationVideo;
