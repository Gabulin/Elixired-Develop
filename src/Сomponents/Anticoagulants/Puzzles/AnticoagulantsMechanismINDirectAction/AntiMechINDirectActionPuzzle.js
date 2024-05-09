import React, { useState, useEffect, useRef } from "react";

import Lottie from 'react-lottie-player';

import "./AntiMechINDirectActionPuzzle.css";
import TextTyper from "../../../../Utils/TextTyper";

//Анимация рестарта
import AnimationDeleteRestart from "../../../../Media/PreLoader/deleteRestartAnimation.json"

//Импорт компонентов ра
import { Varfarin,
    Rivaroksaban,
    Fenidion,
    Dabigatrana,
    Apiksaban,
    Acenokumarol,
    DirectMechStandart } from "../AnticoagulantsMechanismImports";

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

const AntiMechINDirectActionPuzzle = () => {
  //Функция роута
  const navigateToAnticoagulants = () => {
    window.location.href = "/theory";
  };

  // Массив перетаскиваемый элементов
  const initialDragList = [
    {
      id: 4,
      url: Varfarin,
    },
    {
      id: 9,
      url: Rivaroksaban,
    },
    {
      id: 5,
      url: Fenidion,
    },
    {
      id: 15,
      url: Dabigatrana,
    },
    {
      id: 6,
      url: Apiksaban,
    },
    {
      id: 3,
      url: Acenokumarol,
    }
  ];

  const [dragList, setDragList] = useState(initialDragList);
  const [board, setBoard] = useState([]);

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
            <img className="back_step" src={DirectMechStandart}></img>

            {VisibleElements1 && (
                <></>
            )}

            {VisibleElements2 && (
              <>
              </>
            )}

            {VisibleElements3 && (
              <>
              </>
            )}

            {VisibleElements4 && (
              <>
              </>
            )}

            {VisibleElements5 && (
              <>
              </>
            )}

            {VisibleElements6 && (
              <>
              </>
            )}

            {VisibleElements7 && (
              <>
              </>
            )}

            {VisibleElements8 && (
              <>
              </>
            )}

            {VisibleElements10 && (
              <>
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
                Переместите из приведенного ниже списка препаратов те, которые являются непрямыми антикоагулянтами
                </p>
              </TextTyper>

            </div>

            
            {VisibleElements1 && (
<></>
            )}

            {VisibleElements2 && (
<></>
            )}

            {VisibleElements3 && (
<></>
            )}

            {VisibleElements4 && (
<></>
            )}

            {VisibleElements5 && (
              <>
              </>
            )}

            {VisibleElements6 && (
                <>

              </>
            )}

            {VisibleElements7 && (
<></>
            )}

            {VisibleElements8 && (
<></>
            )}

            {VisibleElements10 && (
              <>
               
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

export default AntiMechINDirectActionPuzzle;
