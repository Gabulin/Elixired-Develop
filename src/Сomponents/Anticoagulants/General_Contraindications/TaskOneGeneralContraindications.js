import React, { useState} from "react";
import ReactCardFlip from "react-card-flip";
import "./TaskGeneralContraindicationsAnticoagulants.css";

import useScrollDetection from "../../../Utils/UseScrollDetection";

const TaskOneGeneralContraindicationsAnticoagulants = ({ handleContinue }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

//Фикс ошибки скролла для компонента задачи внутри компонента слайдера, на случай, если он понадобится
const { listRef} = useScrollDetection();

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

export default TaskOneGeneralContraindicationsAnticoagulants;
