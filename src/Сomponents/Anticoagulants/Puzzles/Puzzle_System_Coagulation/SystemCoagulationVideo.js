import React, { useState, useEffect, useRef } from "react";

import Lottie from "react-lottie-player";

import "./SystemCoagulationPuzzle.css";
import "./VideoComponents.css";

import TextTyper from "../../../../Utils/TextTyper";

//Импорт компонентов видео
import {
  IX,
  NitiFibrina,
  X,
  V,
  Trombin,
  XI,
  Fibrinogen,
  VII,
  Fibrin,
  XII,
  KALIKREIN,
  PreKalikrein,
  XIIa,
  XIa,
  IXa,
  VIIa,
  Xa,
  ProTrombin,
  arrow_left,
  arrow_right,
  arrow_down,
  arrow_right_big,
  arrow_tray,
} from "./SystemCoagulationImports";

const SystemCoagulationVideo = ({ handleContinue }) => {
  const [progress, setProgress] = useState(0);

  const handleRightClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };
  const handleX2RightClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 100, 100));
  };

  const handleX2LeftClick = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 100, 0));
  };

  const handleLeftClick = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };

  useEffect(() => {
    const scrollAmount = 500; // количество пикселей для прокрутки
    const scrollDuration = 1000; // время прокрутки в миллисекундах

    const startScroll = () => {
      const textarea = document.querySelector(".puzzle__inform-click_textarea");
      if (textarea) {
        const startTime = performance.now();
        const startY = textarea.scrollTop;
        const endY = startY + scrollAmount;

        const scrollStep = (timestamp) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / scrollDuration, 1); // ограничиваем прогресс максимумом 1

          textarea.scrollTop = startY + progress * (endY - startY);

          if (elapsed < scrollDuration) {
            requestAnimationFrame(scrollStep);
          }
        };

        requestAnimationFrame(scrollStep);
      }
    };

    startScroll();

    return () => {};
  }, [progress]);

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
                <img
                  className="fade-in back_con_2"
                  src={arrow_left}
                  alt=""
                ></img>
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
                <img
                  className="fade-in back_con_4"
                  src={arrow_left}
                  alt=""
                ></img>
              </>
            )}
            {progress >= 30 && (
              <>
                <img className="fade-in back_con_el_2" src={XII} alt=""></img>
                <img
                  className="fade-in back_con_5"
                  src={arrow_down}
                  alt=""
                ></img>
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
                <img
                  className="fade-in back_con_8"
                  src={arrow_down}
                  alt=""
                ></img>
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
                <img
                  className="fade-in back_con_16"
                  src={arrow_right_big}
                ></img>
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
                <img className="fade-in back_con_23" src={ProTrombin}></img>
                <img
                  className="fade-in back_con_el_6"
                  src={Trombin}
                  alt=""
                ></img>
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
                <img
                  className="fade-in back_con_el_7"
                  src={Fibrinogen}
                  alt=""
                ></img>
                <img
                  className="fade-in back_con_el_8"
                  src={Fibrin}
                  alt=""
                ></img>
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
                <img
                  className="fade-in back_con_el_9"
                  src={NitiFibrina}
                  alt=""
                ></img>
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
            <button
              className="video__button_left-all"
              onClick={handleX2LeftClick}
            ></button>
            <button
              className="video__button_left"
              onClick={handleLeftClick}
            ></button>
            <button
              className="video__button_right"
              onClick={handleRightClick}
            ></button>
            <button className="video__button_right-all"></button>
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
                  Нажимайте на стрелки, чтобы просмотреть тему "Система
                  коагуляции крови"
                </p>
              </TextTyper>
            </div>

            <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>Объяснение</h3>
              </TextTyper>
            </div>
            <div className="">
              <p className="puzzle__task_sub-text">
                <TextTyper>Существует два пути коагуляции:</TextTyper>
              </p>
              <p className="puzzle__task_sub-text sub_margin_none">
                <TextTyper> Внутренний и Внешний.</TextTyper>
              </p>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>
                  Внутренний путь запускается эндогенными факторами,
                  циркулирующими в плазме крови.
                </p>
              </TextTyper>
            </div>

            {progress >= 10 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    Внутренний путь активации:
                  </p>
                </div>

                <ul className="fade-in dot_subtext">
                  <li>
                    Внутренний путь происходит на поверхности тромбоцитов, где
                    идет сборка комплекса, состоящего из плазменного
                    прекалликреина,высокомолекулярного кининогена (ВМК) и   XII
                    - го неактивного фактора.
                  </li>
                </ul>
              </>
            )}

            {progress >= 20 && (
              <ul className="fade-in dot_subtext">
                <li>
                  Плазменный прекалликреин под действием ВМК превращается в
                  <strong> калликреин.</strong>
                </li>
              </ul>
            )}

            {progress >= 30 && (
              <ul className="fade-in dot_subtext">
                <li>
                  Калликреин активирует <strong>XII - ый</strong> фактор.
                </li>
              </ul>
            )}

            {progress >= 40 && (
              <ul className="fade-in dot_subtext">
                <li>
                  Активный XII - ый фактор - это сериновая протеаза (молекула,
                  расщепляющая белки), он взаимодействует с XI - ым фактором
                  неактивным и отщепляет от него часть. После чего XI - ый
                  фактор становится активным.
                </li>
              </ul>
            )}

            {progress >= 50 && (
              <ul className="fade-in dot_subtext">
                <li>
                  XI - ый активный фактор взаимодействует с IX -ым неактивным
                  фактором и с <strong>ионами кальция</strong>, благодаря чему
                  <strong>IX - ый фактор</strong>
                  тоже активируется.
                </li>
              </ul>
            )}

            {progress >= 60 && (
              <>
                <ul className="fade-in dot_subtext">
                  <li className="dot_subtext_point">
                    IX - ый фактор взаимодействует с VIII - ым активным фактором
                    и ионами кальция, образуя комплекс (IXa-VIIIa-Са2+), который
                     активируют X - ый фактор.
                  </li>
                </ul>
                <ul className="fade-in dot_subtext">
                  <li className="dot_subtext_point">
                    Сам VIII - ой фактор активируется
                    <strong>II - ым фактором (тромбином).</strong>
                  </li>
                </ul>
              </>
            )}

            {progress >= 70 && (
              <ul className="fade-in dot_subtext">
                <li className="dot_subtext_point">
                  <strong>X - ый активированный фактор</strong> взаимодействует
                  с ионами кальция и со вспомогательным
                  <strong>V - ым фактором</strong> (данный фактор тоже
                  активируется тромбином), образуя <strong>комплекс</strong>
                  (Xa-Va-Ca2+), который превращает II - ой неактивный фактор
                  <strong>(протромбин)</strong> во  II - ой активный фактор
                  <strong>(тромбин)</strong>
                </li>
              </ul>
            )}

            {progress >= 80 && (
              <ul className="fade-in dot_subtext">
                <li className="dot_subtext_point">
                  Тромбин преобразует <strong>фибриноген</strong> в
                  <strong>фибрин - мономер</strong>
                </li>
              </ul>
            )}

            {progress >= 90 && (
              <ul className="fade-in dot_subtext">
                <li className="dot_subtext_point">
                  Фибрин в дальнейшем полимеризуется и образует фибрин - полимер
                  <strong>(нити фибрина).</strong>
                </li>
              </ul>
            )}

            {progress >= 100 && (
              <>
          <div className="fade-in">
            <p className="puzzle__task_sub-text">Внешний путь активации:</p>
          </div>
          <ul className="fade-in dot_subtext">
            <li className="fade-in dot_subtext_point">
              При повреждении эндотелия сосудов выделяется тканевой фактор
              <strong>(фактор III)</strong>. Он способствует превращению
              <strong>неактивного фактора VII в активный</strong>
            </li>
          </ul>
          <ul className="fade-in dot_subtext">
            <li className="fade-in dot_subtext_point">
              Активный фактор VIIа  взаимодействует с фактором
              <strong>III</strong>  и ионами кальция, образуя
              <strong>комплекс (IIIa-VIIa-Ca2+),</strong> который способствует
              активации <strong>фактора X.</strong>
            </li>
          </ul>
          <ul className="fade-in dot_subtext">
            <li className="fade-in dot_subtext_point">
              Дальнейшая схема коагуляции соответствует внутреннему пути
              активации.
            </li>
            <li className="fade-in dot_subtext_point">
              Также внутренний и внешний путь не являются полностью раздельными
              процессами даже до того, как они соединяются на схеме, так как до
              момента их соединения между ними существуют различные
              положительные обратные связи, которые способствуют свертыванию
              крови.
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
