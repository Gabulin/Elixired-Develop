import React, { useState, useEffect, useRef } from "react";
//Анимация
import Lottie from 'react-lottie-player';
//Стили
import "./AntiMechINDirectActionPuzzle.css";
//Утилиты
import TextTyper from "../../../../Utils/TextTyper";

//Анимация рестарта
import AnimationDeleteRestart from "../../../../Media/PreLoader/deleteRestartAnimation.json"
// Импорты
import { MechINDirectProcessPuzzleText, MechINDirectProcessPuzzleElements, initialDragList } from "./MechINDirectProcessPuzzle";
import { DirectMechStandart } from "../AnticoagulantsMechanismImports";

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
      className={`picture picture-${id} picture-none-${id}`}
    />
  );
}

const SystemCoagulationPuzzle = () => {
  //Функция роута
  const navigateToAnticoagulants = () => {
    window.location.href = "/anticoagulants/main_Indicators";
  };

  // Массив перетаскиваемый элементов
 

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
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const boardImages = board.map((picture) => (
    <Picture key={picture.id} url={picture.url} id={picture.id} />
  ));

  const toggleInteractiveClass = () => {
    const elements = document.querySelectorAll('.back_con_stat');
  
    elements.forEach(element => {
      element.classList.remove('back_con_interactive');
    });
  
    const timeoutId = setTimeout(() => {
      elements.forEach(element => {
        element.classList.add('back_con_interactive');
      });
    }, 5000);
  
    return () => clearTimeout(timeoutId);
  };
  // Создаём состояния для отслеживания использования каждой функции
const [xaClicked, setXaClicked] = useState(false);
const [proTrombinClicked, setProTrombinClicked] = useState(false);
const [ixaClicked, setIxaClicked] = useState(false);
const [viiaClicked, setViiaClicked] = useState(false);

  const handleXaClick = () => {
    setVisibleElements4(true);
    toggleInteractiveClass();
    setXaClicked(true);
    setTimeout(() => {
      setVisibleElements4(false)
    }, 5000)
  }
  const handleProTrombinClick = () => {
    setVisibleElements5(true);
    toggleInteractiveClass();
    setProTrombinClicked(true);
    setTimeout(() => {
      setVisibleElements5(false)
    }, 5000)
  }
  const handleIXaClick = () => {
    setVisibleElements6(true);
    toggleInteractiveClass();
    setIxaClicked(true);
    setTimeout(() => {
      setVisibleElements6(false)
    }, 5000)
  }
  const handleVIIaClick = () => {
    setVisibleElements7(true);
    toggleInteractiveClass();
    setViiaClicked(true);
    setTimeout(() => {
      setVisibleElements7(false)
    }, 5000)
  }
  
  const isAnticoagulantsButtonActive = xaClicked && proTrombinClicked && ixaClicked && viiaClicked;

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
              <img className="fade-in back_step" src={DirectMechStandart} ></img>
            <MechINDirectProcessPuzzleElements
                handleXaClick={handleXaClick}
                handleProTrombinClick={handleProTrombinClick}
                handleIXaClick={handleIXaClick}
                handleVIIaClick={handleVIIaClick}
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
                Переместите из приведенного ниже списка препаратов те, которые являются непрямыми антикоагулянтами
                </p>
              </TextTyper>
            </div>

            <MechINDirectProcessPuzzleText
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
            <button className={`puzzle__next ${isAnticoagulantsButtonActive ? 'puzzle__next-active' : 'puzzle__next-inactive'}`} onClick={isAnticoagulantsButtonActive ? navigateToAnticoagulants : undefined}>
          Показания
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemCoagulationPuzzle;
