import React, { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import "./Task_General_Contraindications_Anticoagulants.css";

const Task_One_General_Contraindications_Anticoagulants = ({ handleContinue }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef(null);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleWheelScroll = (event) => {
      const delta = event.deltaY > 0 ? 50 : -50;

      listRef.current.scrollTop += delta;

      event.preventDefault();
    };

    const list = listRef.current;
    list.addEventListener("wheel", handleWheelScroll);

    return () => {
      list.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const list = listRef.current;
      const isScrollable = list.scrollHeight > list.clientHeight;
      setIsVisible(isScrollable && list.scrollTop === list.scrollHeight - list.clientHeight);
      setScrollPosition(list.scrollTop);
    };

    const list = listRef.current;
    list.addEventListener("scroll", handleScroll);

    return () => {
      list.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="challenge__container">
      <div className="challenge__container-text">
        <div className="challenge__start-title">
          <h2 className="challenge__start-title_text">Практика</h2>
        </div>
        <h2 className="challenge__heading">Задача 1</h2>
        <ul className="challenge__list">
          <li>
          Мужчина, 62 года, полгода назад перенес ишемический инсульт с связи с тромбозом мозговой артерии. В анамнезе: хронический алкогольный гепатит и нефротический синдром. На приеме в поликлинике участковым терапевтом выписан эноксапарин натрия с профилактической целью повторного ишемического инсульта.
          </li>
        </ul>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="challenge__container-pract front">
          <ol className="challenge__list-pract" ref={listRef}>
            <li>
            Как вы считаете, правильное назначение сделано терапевтом? Объясните свой вариант ответа.
            </li>
            <li>Какой препарат назначили бы вы? Объясните свой вариант ответа.</li>
          </ol>
          <div className="challenge__text-input-container">
            <textarea
              className="challenge__text-input"
              placeholder="Ввести свой ответ"
            ></textarea>
            <div className="challenge__scrollbar"></div>
          </div>
          <div className="challenge__buttons">
            <button className="challenge__button_cont" onClick={handleContinue}>Продолжить</button>
            <button className="challenge__button_explan" onClick={handleClick}>
              Показать объяснение
            </button>
          </div>
        </div>
        <div className="challenge__container-pract back">
          <h2 className="challenge__heading explan">Объяснение</h2>
            <ol className="challenge__list-pract back__list" ref={listRef}>
              <li>
              Терапевт сделал неверное назначение, так как в связи с хроническим алкогольным гепатитом и нефротическим синдромом в анамнезе пациент имеет дефицит антитромбина 3, следовательно активность эноксопарина (который является НМГ) будет минимальная. 
              </li>
              <li>
              Альтернативными препаратами в данном случае являются: 1) прямые пероральные ингибиторы тромбина: Дабигатран (селективный антагонист тромбина); 2) Прямые пероральные ингибиторы фактора Ха: Апиксабан, ривароксабан, эдоксабан (селективное и прямое ингибирование фактора Ха). Недостатки препаратов: высокая стоимость, ограниченный клинический опыт препаратов, не подходит пациентам с искуственными клапанами сердца и клапанной фибрилляцией.
              </li>
            </ol>
          <div className="challenge__buttons flip__buttons">
            <button
              className="challenge__button_explan flip__button"
              onClick={handleClick}
            >
              Перевернуть
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Task_One_General_Contraindications_Anticoagulants;
