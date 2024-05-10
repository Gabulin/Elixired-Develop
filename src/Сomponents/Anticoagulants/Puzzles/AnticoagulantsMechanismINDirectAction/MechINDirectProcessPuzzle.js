import React from 'react';
import TextTyper from '../../../../Utils/TextTyper';

import { Varfarin,
    Rivaroksaban,
    Fenidion,
    Dabigatrana,
    Apiksaban,
    Acenokumarol,
    PuzzleMechStepOneOne,
    PuzzleMechStepOneTwo,
    PuzzleMechStepOneThree,
    IXaStepOneOne,
    IXaStepOneTwo,
    ProTrombinStepOneOne,
    ProTrombinStepOneTwo,
    XaStepOneOne,
    XaStepOneTwo,
    VIIaStepOneOne,
    VIIaStepOneTwo } from "../AnticoagulantsMechanismImports";

import { IX, NitiFibrina, X, V, Trombin, XI, Fibrinogen, VII, Fibrin, XII, KALIKREIN,
        PreKalikrein, XIIa, XIa, IXa, VIIa, Xa, ProTrombin,
        arrow_left, arrow_right, arrow_down, arrow_right_big, arrow_tray } from "../Puzzle_System_Coagulation/SystemCoagulationImports";

export  const initialDragList = [
    { id: 3,url: Fenidion,},
    {id: 9,url: Rivaroksaban,},
    { id: 1,url: Varfarin,},
    {id: 15,url: Dabigatrana,},
    {id: 6,url: Apiksaban,},
    {id: 2,url: Acenokumarol,},
  ];

export const MechINDirectProcessPuzzleText = ({ 
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
                <></>
            )}

            {VisibleElements2 && (
              <></>
            )}

            {VisibleElements3 && (
              <>
              <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>ЗАДАНИЕ № 2</h3>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Кликните по тем факторам свёртывания крови, на которые действуют эти препараты
                </p>
              </TextTyper>
            </div>
              </>
            )}

            {VisibleElements4 && (
              <>
              <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Фактор Xa - Правильно!
                </p>
              </TextTyper>
            </div>
              </>
            )}

            {VisibleElements5 && (
              <>
<div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Фактор II (Протромбин) - Правильно!
                </p>
              </TextTyper>
            </div>
              </>
            )}

            {VisibleElements6 && (
              <>
              <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Фактор IXa - Правильно!
                </p>
              </TextTyper>
            </div>
              </>
            )}

            {VisibleElements7 && (
              <>
              <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Фактор VIIa - Правильно!
                </p>
              </TextTyper>
            </div>
              </>
            )}

            {VisibleElements8 && (
              <></>
            )}

            {VisibleElements10 && (
              <>
                <div className="puzzle__task_sub-text">
              <TextTyper order>
                <p>
                Кликните по тем факторам свёртывания крови, на которые действуют эти препараты
                </p>
              </TextTyper>
            </div>
              </>
            )}
        </>
    );
};

export const MechINDirectProcessPuzzleElements = ({ 
    VisibleElements1,
    VisibleElements2,
    VisibleElements3,
    VisibleElements4,
    VisibleElements5,
    VisibleElements6,
    VisibleElements7,
    VisibleElements8,
    VisibleElements10,
    handleXaClick,
    handleProTrombinClick,
    handleIXaClick,
    handleVIIaClick
}) => {
    return (
        <>
            {VisibleElements1 && (
              <img className="fade-in back_step" src={PuzzleMechStepOneOne} ></img>
            )}

            {VisibleElements2 && (
              <>
              <img className="fade-in back_step" src={PuzzleMechStepOneTwo} ></img>

              </>
            )}

            {VisibleElements3 && (
              <>
                <img className="back_con_el_6 back_con_interactive back_con_stat" src={Trombin} alt="" ></img>
                <img className="back_con_7 back_con_interactive back_con_stat" src={XIIa} alt=""></img>
                <img className="back_con_10 back_con_interactive back_con_stat" src={XIa} alt=""></img>
                <img className="back_con_20 back_con_interactive back_con_stat" src={Xa} alt="" onClick={handleXaClick}></img>
                <img className="back_con_23 back_con_interactive back_con_stat" src={ProTrombin} alt="" onClick={handleProTrombinClick}></img>
                <img className="back_con_13 back_con_interactive back_con_stat" src={IXa} alt="" onClick={handleIXaClick}></img>
                <img className="back_con_17 back_con_interactive back_con_stat" src={VIIa} alt="" onClick={handleVIIaClick}></img>
                <img className="fade-in back_step" src={PuzzleMechStepOneThree}></img>
                

              </>
            )}

            {VisibleElements4 && (
              <>
                <img className="fade-in back_step" src={XaStepOneOne}></img>
                <img className="fade-in back_step" src={XaStepOneTwo}></img>
              </>
            )}

            {VisibleElements5 && (
              <>
                <img className="fade-in back_step" src={ProTrombinStepOneOne}></img>
                <img className="fade-in back_step" src={ProTrombinStepOneTwo}></img>
              </>
            )}

            {VisibleElements6 && (
              <>
                <img className="fade-in back_step" src={IXaStepOneOne}></img>
                <img className="fade-in back_step" src={IXaStepOneTwo}></img>
              </>
            )}

            {VisibleElements7 && (
              <>
                <img className="fade-in back_step" src={VIIaStepOneOne}></img>
                <img className="fade-in back_step" src={VIIaStepOneTwo}></img>
              </>
            )}

            {VisibleElements8 && (
              <>
                <img></img>
              </>
            )}

            {VisibleElements10 && (
              <>
                <img></img>
              </>
            )}
        </>
    );
};


