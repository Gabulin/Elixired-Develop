import React from "react";
import TextTyper from "../../../../Utils/TextTyper";

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

export const initialDragList = [
  { id: 4, url: IX },
  { id: 9, url: NitiFibrina },
  { id: 5, url: X },
  { id: 6, url: ProTrombin },
  { id: 3, url: XI },
  { id: 7, url: Fibrinogen },
  { id: 10, url: VII },
  { id: 8, url: Fibrin },
  { id: 2, url: XII },
  { id: 1, url: KALIKREIN },
];

export const CoagulationProcessPuzzleText = ({
  VisibleElements1,
  VisibleElements2,
  VisibleElements3,
  VisibleElements4,
  VisibleElements5,
  VisibleElements6,
  VisibleElements7,
  VisibleElements8,
  VisibleElements10,
}) => {
  return (
    <>
      {VisibleElements1 && (
        <ul className="fade-in dot_subtext">
          <li>
            Плазменный прекалликреин под действием ВМК превращается в
            калликреин.
          </li>
        </ul>
      )}

      {VisibleElements2 && (
        <ul className="fade-in dot_subtext">
          <li>Калликреин активирует XII - ый фактор.</li>
        </ul>
      )}

      {VisibleElements3 && (
        <ul className="fade-in dot_subtext">
          <li>
            Активный XII - ый фактор  взаимодействует с XI - ым фактором
            неактивным и отщепляет от него часть. После чего XI - ый фактор
            становится активным.
          </li>
        </ul>
      )}

      {VisibleElements4 && (
        <ul className="fade-in dot_subtext">
          <li>
            XI - ый активный фактор взаимодействует с IX -ым неактивным фактором
            и с <strong>ионами кальция,</strong> благодаря чему{" "}
            <strong>IX - ый фактор</strong> тоже активируется.
          </li>
        </ul>
      )}

      {VisibleElements5 && (
        <>
          <ul className="fade-in dot_subtext">
            <li className="fade-in dot_subtext_point">
              IX - ый фактор взаимодействует с VIII - ым активным фактором и
              ионами кальция, образуя комплекс (IXa-VIIIa-Са2+), который
               активируют X - ый фактор.
            </li>
          </ul>
          <ul className="fade-in dot_subtext">
            <li className="fade-in dot_subtext_point">
              Сам VIII - ой фактор активируется{" "}
              <strong>II - ым фактором (тромбином).</strong>
            </li>
          </ul>
        </>
      )}

      {VisibleElements6 && (
        <ul className="fade-in dot_subtext">
          <li className="fade-in dot_subtext_point">
            <strong>X - ый активированный фактор</strong> взаимодействует с
            ионами кальция и со вспомогательным <strong>V - ым фактором</strong>{" "}
            (данный фактор тоже активируется тромбином), образуя{" "}
            <strong>комплекс</strong> (Xa-Va-Ca2+), который превращает II - ой
            неактивный фактор <strong>(протромбин)</strong> во  II - ой активный
            фактор
            <strong>(тромбин)</strong>
          </li>
        </ul>
      )}

      {VisibleElements7 && (
        <ul className="fade-in dot_subtext">
          <li className="fade-in dot_subtext_point">
            Тромбин преобразует <strong>фибриноген в фибрин - мономер</strong>
          </li>
        </ul>
      )}

      {VisibleElements8 && (
        <ul className="fade-in dot_subtext">
          <li className="fade-in dot_subtext_point">
            Фибрин в дальнейшем полимеризуется и образует фибрин - полимер{" "}
            <strong>(нити фибрина). </strong>
          </li>
        </ul>
      )}

      {VisibleElements10 && (
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
              Активный фактор VIIа  взаимодействует с фактором{" "}
              <strong>III</strong>  и ионами кальция, образуя{" "}
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
    </>
  );
};

export const CoagulationProcessPuzzleElements = ({
  VisibleElements1,
  VisibleElements2,
  VisibleElements3,
  VisibleElements4,
  VisibleElements5,
  VisibleElements6,
  VisibleElements7,
  VisibleElements8,
  VisibleElements10,
}) => {
  return (
    <>
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
          <img className="fade-in back_con_16" src={arrow_right_big}></img>
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
          <img className="fade-in back_con_404" src={Trombin} alt=""></img>
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
    </>
  );
};
