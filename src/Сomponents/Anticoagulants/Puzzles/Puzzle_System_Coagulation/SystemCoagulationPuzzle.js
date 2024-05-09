import React, { useState, useEffect, useRef } from "react";

import Lottie from 'react-lottie-player';

import "./SystemCoagulationPuzzle.css";
import "./Puzzle_components.css";

import TextTyper from "../../../../Utils/TextTyper";

//Анимация рестарта
import AnimationDeleteRestart from "../../../../Media/PreLoader/deleteRestartAnimation.json"

//Импорт компонентов ра
import { IX, NitiFibrina, X, V, Trombin, XI, Fibrinogen, VII, Fibrin, XII, KALIKREIN,
  PreKalikrein, XIIa, XIa, IXa, VIIa, Xa, ProTrombin,
  arrow_left, arrow_right, arrow_down, arrow_right_big, arrow_tray } from "./SystemCoagulationImports";

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

const SystemCoagulationPuzzle = () => {
  //Функция роута
  const navigateToAnticoagulants = () => {
    window.location.href = "/theory";
  };

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

  //Видимость элемента по таймеру
  const [visibleTimerStartElement, setvisibleTimerStartElement] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setvisibleTimerStartElement(true);
    }, 12000); 

    return () => clearTimeout(timer);
  }, []); // [] означает, что useEffect будет вызван только после монтирования компонента

  //Видимость анимации
  const [VisibleAnimDelete, setVisibleAnimDelete] = useState(false);

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

    // Показываем элемент с анимацией
    setVisibleAnimDelete(true)
  
    // Запускаем таймер для скрытия
    setTimeout(() => {
      setVisibleAnimDelete(false)
    }, 3000)

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

  //Автоматическая прокрутка при появлении элементов
  useEffect(() => {
    let scrollInterval;

    const startScrollInterval = (scrollAmount, intervalTime, timeoutTime) => {
        clearInterval(scrollInterval); // Очистим предыдущий интервал перед запуском нового
        scrollInterval = setInterval(() => {
            const textarea = document.querySelector(".puzzle__inform-click_textarea");
            if (textarea) {
                textarea.scrollTop += scrollAmount;
            }
        }, intervalTime);
        setTimeout(() => {
            clearInterval(scrollInterval);
        }, timeoutTime);
    };

    const visibleTimerStartOrElementVisible = visibleTimerStartElement || VisibleElements1 || VisibleElements2 || VisibleElements3 || VisibleElements4 ||
        VisibleElements5 || VisibleElements6 || VisibleElements7 || VisibleElements8 || VisibleElements10;

    if (visibleTimerStartOrElementVisible) {
        if (visibleTimerStartElement) {
            startScrollInterval(20, 5, 2000);
        } else if (VisibleElements1 || VisibleElements2 || VisibleElements7 || VisibleElements8) {
            startScrollInterval(5, 25, 1200);
        } else if (VisibleElements3 || VisibleElements4 || VisibleElements5) {
            startScrollInterval(20, 5, 5000);
        } else if (VisibleElements6) {
          startScrollInterval(20, 5, 6000);
      } else if (VisibleElements10) {
            startScrollInterval(40, 25, 7500);
        }
    } else {
        clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
}, [visibleTimerStartElement, VisibleElements1, VisibleElements2, VisibleElements3, VisibleElements4,
    VisibleElements5, VisibleElements6, VisibleElements7, VisibleElements8, VisibleElements10]);


  return (
    <div className="puzzle__main_container">
      {VisibleAnimDelete && (
      <div className="puzzle__restart_popup" id="puzzleRestartPopup">
      <Lottie
        animationData={AnimationDeleteRestart }
        loop={false}
        play
        speed={0.5}
        style={{ width: '531x', height: '531px', margin: '45px' }} 
      />
      </div>
      )}
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
            <img className="fade-in back_con_2" src={arrow_left} alt=""></img>
            <img className="fade-in back_con_3" src={PreKalikrein} alt=""></img>

            {VisibleElements1 && (
              <img className="fade-in back_con_4" src={arrow_left} alt=""></img>
            )}

            {VisibleElements2 && (
              <>
                <img className="fade-in back_con_5" src={arrow_down} alt=""></img>
                <img className="fade-in back_con_6" src={arrow_right} alt=""></img>
                <img className="fade-in back_con_7" src={XIIa} alt=""></img>
              </>
            )}

            {VisibleElements3 && (
              <>
                <img className="fade-in back_con_8" src={arrow_down} alt=""></img>
                <img className="fade-in back_con_9" src={arrow_right} alt=""></img>
                <img className="fade-in back_con_10" src={XIa} alt=""></img>
              </>
            )}

            {VisibleElements4 && (
              <>
                <img className="fade-in back_con_11" src={arrow_down} alt=""></img>
                <img className="fade-in back_con_12" src={arrow_right} alt=""></img>
                <img className="fade-in back_con_13" src={IXa} alt=""></img>
              </>
            )}

            {VisibleElements5 && (
              <>
                <h3 className="fade-in back_con_14">VIII, Ca</h3>
                <img className="fade-in back_con_15" src={arrow_down} alt=""></img>
                <img
                  className="fade-in back_con_16"
                  src={arrow_right_big}
                ></img>
                <img className="fade-in back_con_17" src={VIIa} alt=""></img>
                <img className="fade-in back_con_18" src={arrow_down} alt=""></img>
                <h3 className="fade-in back_con_19">III, Ca</h3>
                <img className="fade-in back_con_20" src={Xa} alt=""></img>
              </>
            )}

            {VisibleElements6 && (
              <>
                <img className="fade-in back_con_21" src={arrow_down} alt=""></img>
                <h3 className="fade-in back_con_22">V, Ca</h3>
                <img className="fade-in back_con_23" src={ProTrombin} alt=""></img>
                <img className="fade-in back_con_24" src={arrow_right} alt=""></img>
              </>
            )}

            {VisibleElements7 && (
              <>
                <img className="fade-in back_con_25" src={arrow_down} alt=""></img>
                <img className="fade-in back_con_26" src={arrow_right} alt=""></img>
              </>
            )}

            {VisibleElements8 && (
              <>
                <img className="fade-in back_con_27" src={arrow_tray} alt=""></img>
              </>
            )}

            {VisibleElements10 && (
              <>
                <h3 className="fade-in back_con_28">
                  Внешний путь<br></br>(Повреждение тканей)
                </h3>
                <img className="fade-in back_con_29" src={arrow_left} alt=""></img>
                <img className="fade-in back_con_30" src={arrow_left} alt=""></img>
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
              <TextTyper>
                <h3>ЗАДАНИЕ № 1</h3>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                  Переместите на экран факторы свёртывания в правильном порядке,
                  чтобы собрать схему коагуляции крови. <br></br>
                </p>
              </TextTyper>
              <div>
                <TextTyper order>
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
            {visibleTimerStartElement && (<ul className="dot_subtext">
                <li>
                  <TextTyper>
                Образуется комплекс на поверхности тромбоцитарного агреганта
                  из плазменного прекалликреина, ВМК (высокомолекулярного
                  кининогена и XII - го неактивного фактора).
                  </TextTyper>
                </li>
            </ul>)}
            

            {VisibleElements1 && (
              <ul className="dot_subtext">
                  <li>
                  <TextTyper>
                    Плазменный прекалликреин под действием ВМК превращается в
                    калликреин.
                    </TextTyper>
                  </li>
              </ul>
            )}

            {VisibleElements2 && (
              <ul className="dot_subtext">
                  <li><TextTyper>Калликреин активирует XII - ый фактор.</TextTyper></li>
              </ul>
            )}

            {VisibleElements3 && (
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

            {VisibleElements4 && (
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

            {VisibleElements5 && (
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

            {VisibleElements6 && (
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

            {VisibleElements7 && (
              <ul className="dot_subtext">
                
                  <li className="dot_subtext_point">
                  <TextTyper>
                    Тромбин преобразует фибриноген в фибрин
                    </TextTyper>
                  </li>
                
              </ul>
            )}

            {VisibleElements8 && (
              <ul className="dot_subtext">
                
                  <li className="dot_subtext_point">
                  <TextTyper>
                    Фибрин в дальнейшем полимеризуется и образует нити фибрина.
                    </TextTyper>
                  </li>
                
              </ul>
            )}

            {VisibleElements10 && (
              <>
                <div className="puzzle__task_sub-text">
                  <TextTyper>
                    <p>
                      Внешний путь активации:
                    </p>
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
            <button className="puzzle__restart" onClick={restartGame}>
              Начать сначала
            </button>
            <button className={`puzzle__next ${VisibleElements10 ? 'puzzle__next-active' : 'puzzle__next-inactive'}`} onClick={VisibleElements10 ? navigateToAnticoagulants : undefined}>
          Антикоагулянты
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemCoagulationPuzzle;
