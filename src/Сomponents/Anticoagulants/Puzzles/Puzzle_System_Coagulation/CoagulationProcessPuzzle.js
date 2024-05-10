import React from 'react';
import TextTyper from '../../../../Utils/TextTyper';

import { IX, NitiFibrina, X, V, Trombin, XI, Fibrinogen, VII, Fibrin, XII, KALIKREIN,
    PreKalikrein, XIIa, XIa, IXa, VIIa, Xa, ProTrombin,
    arrow_left, arrow_right, arrow_down, arrow_right_big, arrow_tray } from "./SystemCoagulationImports";

export  const initialDragList = [
    { id: 4,url: IX,},
    {id: 9,url: NitiFibrina,},
    { id: 5,url: X,},
    {id: 15,url: V,},
    {id: 6,url: Trombin,},
    {id: 3,url: XI,},
    {id: 7,url: Fibrinogen,},
    {id: 10,url: VII,},
    {id: 8,url: Fibrin,},
    {id: 2,url: XII,},
    {id: 1,url: KALIKREIN,},
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
    VisibleElements10
}) => {
    return (
        <>
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
    VisibleElements10
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
        </>
    );
};


