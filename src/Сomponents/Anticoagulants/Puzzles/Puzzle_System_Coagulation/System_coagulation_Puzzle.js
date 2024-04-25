import React, { useState, useEffect, useRef } from "react";
import Typist from "react-typist";
import "./System_coagulation_Puzzle.css";
import "./Puzzle_components.css";

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

//Функция перетаскиваемого элемента
export function Picture({ url, id }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
  };

  return (
    <img
      src={url}
      alt=""
      onDragStart={handleDragStart}
      draggable="true"
      className={`picture picture-${id}`}
    />
  );
}

const System_coagulation_Puzzle = () => {
  // Массив перетаскиваемый элементов
  const initialDragList = [
    {
      id: 4,
      url: IX,
    },
    {
      id: 9,
      url: NitiFibrina,
    },
    {
      id: 5,
      url: X,
    },
    {
      id: 15,
      url: V,
    },
    {
      id: 6,
      url: Trombin,
    },
    {
      id: 3,
      url: XI,
    },
    {
      id: 7,
      url: Fibrinogen,
    },
    {
      id: 10,
      url: VII,
    },
    {
      id: 8,
      url: Fibrin,
    },
    {
      id: 2,
      url: XII,
    },
    {
      id: 1,
      url: KALIKREIN,
    },
  ];

  const [dragList, setDragList] = useState(initialDragList);
  const [board, setBoard] = useState([]);

  //Видимость элементов в зависимости от перемещения
  const [VisibleElements1, setVisibleElements1] = useState(false);
  const [VisibleElements2, setVisibleElements2] = useState(false);
  const [VisibleElements3, setVisibleElements3] = useState(false);
  const [VisibleElements4, setVisibleElements4] = useState(false);
  const [VisibleElements5, setVisibleElements5] = useState(false);
  const [VisibleElements6, setVisibleElements6] = useState(false);
  const [VisibleElements7, setVisibleElements7] = useState(false);
  const [VisibleElements8, setVisibleElements8] = useState(false);
  const [VisibleElements10, setVisibleElements10] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("text/plain"));
    const nextExpectedId = board.length + 1; // Ожидаемый следующий id

    // Проверяем, что перемещаемый элемент имеет правильный id
    if (id === nextExpectedId) {
      const droppedPicture = dragList.find((picture) => picture.id === id);
      setBoard((prevBoard) => [...prevBoard, droppedPicture]);

      // Удаляем перемещенный элемент из массива dragList
      setDragList((prevList) => prevList.filter((item) => item.id !== id));

      // В зависимости от id активируем соответствующие изображения
      switch (id) {
        case 1:
          setVisibleElements1(true);
          break;
        case 2:
          setVisibleElements2(true);
          break;
        case 3:
          setVisibleElements3(true);
          break;
        case 4:
          setVisibleElements4(true);
          break;
        case 5:
          setVisibleElements5(true);
          break;
        case 6:
          setVisibleElements6(true);
          break;
        case 7:
          setVisibleElements7(true);
          break;
        case 8:
          setVisibleElements8(true);
          break;
        case 10:
          setVisibleElements10(true);
          break;
        default:
          break;
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const boardImages = board.map((picture) => (
    <Picture key={picture.id} url={picture.url} id={picture.id} />
  ));

  const restartGame = () => {
    setDragList(initialDragList);
    setBoard([]);
    setVisibleElements1(false);
    setVisibleElements2(false);
    setVisibleElements3(false);
    setVisibleElements4(false);
    setVisibleElements5(false);
    setVisibleElements6(false);
    setVisibleElements7(false);
    setVisibleElements8(false);
    setVisibleElements10(false);
  };

  //слайдер
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="puzzle__main_container">
      <h2 className="puzzle__name">СИСТЕМА КОАГУЛЯЦИИ КРОВИ: ПАЗЛ</h2>
      <div className="puzzle__component">
        <div className="puzzle__workspace">
          <div
            className="puzzle__workspace_panel"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <h3 className="fade-in back_con_1">
              Внутренний путь<br></br>
              (Повреждение эндотелия)
            </h3>
            <img className="fade-in back_con_2" src={arrow_left}></img>
            <img className="fade-in back_con_3" src={PreKalikrein}></img>

            {VisibleElements1 && (
              <img className="fade-in back_con_4" src={arrow_left}></img>
            )}

            {VisibleElements2 && (
              <>
                <img className="fade-in back_con_5" src={arrow_down}></img>
                <img className="fade-in back_con_6" src={arrow_right}></img>
                <img className="fade-in back_con_7" src={XIIa}></img>
              </>
            )}

            {VisibleElements3 && (
              <>
                <img className="fade-in back_con_8" src={arrow_down}></img>
                <img className="fade-in back_con_9" src={arrow_right}></img>
                <img className="fade-in back_con_10" src={XIa}></img>
              </>
            )}

            {VisibleElements4 && (
              <>
                <img className="fade-in back_con_11" src={arrow_down}></img>
                <img className="fade-in back_con_12" src={arrow_right}></img>
                <img className="fade-in back_con_13" src={IXa}></img>
              </>
            )}

            {VisibleElements5 && (
              <>
                <h3 className="fade-in back_con_14">VIII, Ca</h3>
                <img className="fade-in back_con_15" src={arrow_down}></img>
                <img
                  className="fade-in back_con_16"
                  src={arrow_right_big}
                ></img>
                <img className="fade-in back_con_17" src={VIIa}></img>
                <img className="fade-in back_con_18" src={arrow_down}></img>
                <h3 className="fade-in back_con_19">III, Ca</h3>
                <img className="fade-in back_con_20" src={Xa}></img>
              </>
            )}

            {VisibleElements6 && (
              <>
                <img className="fade-in back_con_21" src={arrow_down}></img>
                <h3 className="fade-in back_con_22">V, Ca</h3>
                <img className="fade-in back_con_23" src={ProTrombin}></img>
                <img className="fade-in back_con_24" src={arrow_right}></img>
              </>
            )}

            {VisibleElements7 && (
              <>
                <img className="fade-in back_con_25" src={arrow_down}></img>
                <img className="fade-in back_con_26" src={arrow_right}></img>
              </>
            )}

            {VisibleElements8 && (
              <>
                <img className="fade-in back_con_27" src={arrow_tray}></img>
              </>
            )}

            {VisibleElements10 && (
              <>
                <h3 className="fade-in back_con_28">
                  Внешний путь<br></br>(Повреждение тканей)
                </h3>
                <img className="fade-in back_con_29" src={arrow_left}></img>
                <img className="fade-in back_con_30" src={arrow_left}></img>
              </>
            )}

            {boardImages}
          </div>
          <div className="puzzle__workspace_slider">
            <button
              className="puzzle__slider_button-left"
              onClick={scrollLeft}
            ></button>
            <div className="puzzle__slider_content" ref={sliderRef}>
              {dragList.map((picture) => (
                <Picture key={picture.id} url={picture.url} id={picture.id} />
              ))}
            </div>
            <button
              className="puzzle__slider_button-right"
              onClick={scrollRight}
            ></button>
          </div>
        </div>
        <div className="puzzle__inform-click">
          <div className="puzzle__inform-click_textarea">
            <div className="puzzle__task_main-text">
              <TextTyper order={0}>
                <h3>ЗАДАНИЕ № 1</h3>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper order={1}>
                <p>
                  Переместите на экран факторы свёртывания в правильном порядке,
                  чтобы собрать схему коагуляции крови. <br></br>
                </p>
              </TextTyper>
              <div>
                <TextTyper order={2}>
                  <p>[НАЧИНАТЬ СБОРКУ С ВНУТРЕННЕГО ПУТИ]</p>
                </TextTyper>
              </div>
            </div>
            <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>Объяснение</h3>
              </TextTyper>
            </div>
            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>Существует два пути коагуляции:Внутренний и Внешний.</p>
              </TextTyper>
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

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>Внутренний путь активации:</p>
              </TextTyper>
            </div>
            <ul className="dot_subtext">
              <TextTyper>
                <li>
                  Образуется комплекс на поверхности тромбоцитарного агреганта
                  из плазменного прекалликреина, ВМК (высокомолекулярного
                  кининогена и XII - го неактивного фактора).
                </li>
              </TextTyper>
            </ul>

            {VisibleElements1 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li>
                    Плазменный прекалликреин под действием ВМК превращается в
                    калликреин.
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements2 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li>Калликреин активирует XII - ый фактор.</li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements3 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li>
                    Активный XII - ый фактор - это сериновая протеаза (молекула,
                    расщепляющая белки), он взаимодействует с XI - ым фактором
                    неактивным и отщепляет от него часть. После чего XI - ый
                    фактор становится активным.
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements4 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li>
                    XI - ый активный фактор взаимодействует с IX -ым неактивным
                    фактором и с ионами кальция, благодаря чему IX - ый фактор
                    тоже активируется.
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements5 && (
              <>
                <ul className="dot_subtext">
                  <TextTyper>
                    <li className="dot_subtext_point">
                      IX - ый фактор взаимодействует с VIII - ым активным
                      фактором и ионами кальция, они активируют X - ый фактор.
                    </li>
                  </TextTyper>
                </ul>
                <ul className="dot_subtext">
                  <TextTyper>
                    <li className="dot_subtext_point">
                      Сам VIII - ый фактор активируется II - ым фактором
                      (тромбином).
                    </li>
                  </TextTyper>
                </ul>
              </>
            )}

            {VisibleElements6 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li className="dot_subtext_point">
                    X - ый активированный фактор взаимодействует с ионами
                    кальция и со вспомогательным V - ым фактором, который тоже
                    активируется тромбином. Таким образом, II - ой неактивный
                    фактор (протромбин) превращается в тромбин (II - ой активный
                    фактор).
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements7 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li className="dot_subtext_point">
                    Тромбин преобразует фибриноген в фибрин
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements8 && (
              <ul className="dot_subtext">
                <TextTyper>
                  <li className="dot_subtext_point">
                    Фибрин в дальнейшем полимеризуется и образует нити фибрина.
                  </li>
                </TextTyper>
              </ul>
            )}

            {VisibleElements10 && (
              <>
                <div className="puzzle__task_sub-text">
                  <TextTyper>
                    <p>
                      Внешний путь запускается тканевым фактором, возникающим
                      после повреждения эндотелия сосудов или гладких мышечных
                      клеток сосуда.
                    </p>
                  </TextTyper>
                </div>
                <ul className="dot_subtext">
                  <TextTyper>
                    <li className="dot_subtext_point">
                      При повреждении эндотелия сосудов выделяется тканевой
                      фактор (III - ий фактор). Он способствует превращению VII
                      - го неактивного фактора в активный.
                    </li>
                  </TextTyper>
                </ul>
                <ul className="dot_subtext">
                  <TextTyper>
                    <li className="dot_subtext_point">
                      VII - ой активный фактор взаимодействует с III - им
                      фактором и ионами кальция, это способствует активации X -
                      го фактора.
                    </li>
                  </TextTyper>
                </ul>
                <ul className="dot_subtext">
                  <TextTyper>
                    <li className="dot_subtext_point">
                      Дальнейшая схема коагуляции соответствует внутреннего пути
                      активации.
                    </li>
                  </TextTyper>
                </ul>
              </>
            )}

          </div>
          <div className="puzzle__inform-click_buttons">
            <button className="puzzle__restart" onClick={restartGame}>
              Начать сначала
            </button>
            <button className="puzzle__next">Антикоагулянты</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System_coagulation_Puzzle;
