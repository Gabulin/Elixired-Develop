import React, { useState, useEffect, useRef } from "react";
//Анимация
import Lottie from 'react-lottie-player';
//Стили
import "./SystemCoagulationPuzzle.css";
import "./Puzzle_components.css";
//Утилиты
import TextTyper from "../../../../Utils/TextTyper";
import showAlert from "../../../../Utils/ShowAlert";

//Анимация рестарта
import AnimationDeleteRestart from "../../../../Media/PreLoader/deleteRestartAnimation.json"

//Импорт компонентов Пазла
import { 
  PreKalikrein, 
  arrow_left} from "./SystemCoagulationImports";


import { CoagulationProcessPuzzleText, CoagulationProcessPuzzleElements, initialDragList } from "./CoagulationProcessPuzzle";

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
    window.location.href = "/anticoagulants/mechanism";
  };

  // Массив перетаскиваемый элементов
 

  const [dragList, setDragList] = useState(initialDragList);
  const [board, setBoard] = useState([]);

  //Видимость элемента по таймеру
  const [visibleTimerStartElement, setvisibleTimerStartElement] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setvisibleTimerStartElement(true);
    }, 4000); 

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
  
    if (id === nextExpectedId) {
      const droppedPicture = dragList.find((picture) => picture.id === id);
      setBoard((prevBoard) => [...prevBoard, droppedPicture]);
      setDragList((prevList) => prevList.filter((item) => item.id !== id));
      const setVisibleElement = (id) => {
        switch (id) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            return true;
          case 10:
            return true;
          default:
            return false;
        }
      };
      setVisibleElement(id) && eval(`setVisibleElements${id}(true)`);
    }  else {
      showAlert();
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
  // Автоскролл
  useEffect(() => {
    let scrollInterval;

    const startScrollInterval = () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(() => {
            const textarea = document.querySelector(".puzzle__inform-click_textarea");
            if (textarea) {
                textarea.scrollTop += 15;
            }
        }, 25);
        setTimeout(() => clearInterval(scrollInterval), 1000);
    };

    const visibleElements = [visibleTimerStartElement, VisibleElements1, VisibleElements2, VisibleElements3, VisibleElements4, VisibleElements5, VisibleElements6, VisibleElements7, VisibleElements8, VisibleElements10];
    const visibleTimerStartOrElementVisible = visibleElements.some(element => element);

    if (visibleTimerStartOrElementVisible) {
        startScrollInterval();
    } else {
        clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
}, [visibleTimerStartElement, VisibleElements1, VisibleElements2, VisibleElements3, VisibleElements4, VisibleElements5, VisibleElements6, VisibleElements7, VisibleElements8, VisibleElements10]);


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

            <CoagulationProcessPuzzleElements
                VisibleElements1={VisibleElements1}
                VisibleElements2={VisibleElements2}
                VisibleElements3={VisibleElements3}
                VisibleElements4={VisibleElements4}
                VisibleElements5={VisibleElements5}
                VisibleElements6={VisibleElements6}
                VisibleElements7={VisibleElements7}
                VisibleElements8={VisibleElements8}
                VisibleElements10={VisibleElements10}
            />

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
                Внутренний путь происходит на поверхности тромбоцитов, где идет сборка комплекса, состоящего из плазменного прекалликреина,высокомолекулярного кининогена (ВМК) и   XII - го неактивного фактора.
                </li>
            </ul>)}
            <CoagulationProcessPuzzleText
                VisibleElements1={VisibleElements1}
                VisibleElements2={VisibleElements2}
                VisibleElements3={VisibleElements3}
                VisibleElements4={VisibleElements4}
                VisibleElements5={VisibleElements5}
                VisibleElements6={VisibleElements6}
                VisibleElements7={VisibleElements7}
                VisibleElements8={VisibleElements8}
                VisibleElements10={VisibleElements10}
            />
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
