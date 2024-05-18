import React, { useState, useEffect } from 'react';
import TextTyper from "../../../../Utils/TextTyper";

import {
  Varfarin,
  Rivaroksaban,
  Fenidion,
  Dabigatrana,
  Apiksaban,
  Acenokumarol,
  PuzzleMechStart,
  PuzzleMechStepOneOne,
  PuzzleMechStepOneTwo,
  PuzzleMechStepOneThree,
  IXaStepOneOne,
  IXaStepOneTwo,
  XStepOne,
  XStepTwo,
  ProTrombinStepOneOne,
  ProTrombinStepOneTwo,
  IXStepOne,
  IXStepTwo,
  VIIStepOne,
  VIIStepTwo,
  XaStepOneOne,
  XaStepOneTwo,
  VIIaStepOneOne,
  VIIaStepOneTwo,
} from "../AnticoagulantsMechanismImports";

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
} from "../Puzzle_System_Coagulation/SystemCoagulationImports";

export const initialDragList = [
  { id: 3, url: Fenidion },
  { id: 9, url: Rivaroksaban },
  { id: 1, url: Varfarin },
  { id: 15, url: Dabigatrana },
  { id: 6, url: Apiksaban },
  { id: 2, url: Acenokumarol },
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
  VisibleElements10,
}) => {
  return (
    <>
      {VisibleElements1 && <></>}

      {VisibleElements2 && <></>}

      {VisibleElements1 && VisibleElements2 && VisibleElements3 && (
        <>
          <div className="puzzle__task_main-text">
            <TextTyper>
              <h3>ЗАДАНИЕ № 2</h3>
            </TextTyper>
          </div>

          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>
                Кликните по тем факторам свёртывания крови, на которые действуют
                эти препараты
              </p>
            </TextTyper>
          </div>
        </>
      )}

      {VisibleElements4 && (
        <>
          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>Фактор X - Правильно!</p>
            </TextTyper>
          </div>
        </>
      )}
      {VisibleElements5 && (
        <>
          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>Фактор II (Протромбин) - Правильно!</p>
            </TextTyper>
          </div>
        </>
      )}

      {VisibleElements6 && (
        <>
          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>Фактор IX - Правильно!</p>
            </TextTyper>
          </div>
        </>
      )}

      {VisibleElements7 && (
        <>
          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>Фактор VII - Правильно!</p>
            </TextTyper>
          </div>
        </>
      )}

      {VisibleElements8 && <></>}

      {VisibleElements10 && (
        <>
          <div className="puzzle__task_sub-text">
            <TextTyper order>
              <p>
                Кликните по тем факторам свёртывания крови, на которые действуют
                эти препараты
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
  handleVIIaClick,
  handleWrongClick,
}) => {
  
  const [showXStepTwo, setShowXStepTwo] = useState(false);
  const [showProTrombinStepOneTwo, setShowProTrombinStepOneTwo] = useState(false);
  const [showIXStepTwo, setShowIXStepTwo] = useState(false);
  const [showVIIStepTwo, setShowVIIStepTwo] = useState(false);

  const handleVisibility = (element, setShow) => {
      if (element) {
          const timer = setTimeout(() => setShow(true), 1000);
          return () => clearTimeout(timer);
      } else {
          setShow(false);
      }
  };

  useEffect(() => handleVisibility(VisibleElements4, setShowXStepTwo), [VisibleElements4]);
  useEffect(() => handleVisibility(VisibleElements5, setShowProTrombinStepOneTwo), [VisibleElements5]);
  useEffect(() => handleVisibility(VisibleElements6, setShowIXStepTwo), [VisibleElements6]);
  useEffect(() => handleVisibility(VisibleElements7, setShowVIIStepTwo), [VisibleElements7]);


  return (
    <>
      {VisibleElements1 && <></>}

      {VisibleElements2 && <></>}

      {VisibleElements1 && VisibleElements2 && VisibleElements3 && (
        <>
          <img
            className="back_con_el_6 back_con_interactive back_con_stat"
            src={Trombin}
            alt=""
            onClick={handleWrongClick}
          />
          <img
            className="back_con_7 back_con_interactive back_con_stat"
            src={XIIa}
            alt=""
            onClick={handleWrongClick}
          />
          <img
            className="back_con_el_3 back_con_interactive back_con_stat"
            src={XI}
            alt=""
            onClick={handleWrongClick}
          />
          <img
            className="back_con_el_5 back_con_interactive back_con_stat"
            src={X}
            alt=""
            onClick={handleXaClick}
          />
          <img
            className="back_con_23 back_con_interactive back_con_stat"
            src={ProTrombin}
            alt=""
            onClick={handleProTrombinClick}
          />
          <img
            className="back_con_el_4 back_con_interactive back_con_stat"
            src={IX}
            alt=""
            onClick={handleIXaClick}
          />
          <img
            className="back_con_el_10 back_con_interactive back_con_stat"
            src={VII}
            alt=""
            onClick={handleVIIaClick}
          />
          <img className="fade-in back_step" src={PuzzleMechStart} />
        </>
      )}

{VisibleElements4 && (
                <>
                    <img className="fade-in back_step" src={XStepOne} alt="Step One"></img>
                    {showXStepTwo && (
                        <img className="fade-in back_step" src={XStepTwo} alt="Step Two"></img>
                    )}
                </>
            )}

            {VisibleElements5 && (
                <>
                    <img className="fade-in back_step" src={ProTrombinStepOneOne} alt="ProTrombin Step One"></img>
                    {showProTrombinStepOneTwo && (
                        <img className="fade-in back_step" src={ProTrombinStepOneTwo} alt="ProTrombin Step Two"></img>
                    )}
                </>
            )}

            {VisibleElements6 && (
                <>
                    <img className="fade-in back_step" src={IXStepOne} alt="IX Step One"></img>
                    {showIXStepTwo && (
                        <img className="fade-in back_step" src={IXStepTwo} alt="IX Step Two"></img>
                    )}
                </>
            )}

            {VisibleElements7 && (
                <>
                    <img className="fade-in back_step" src={VIIStepOne} alt="VII Step One"></img>
                    {showVIIStepTwo && (
                        <img className="fade-in back_step" src={VIIStepTwo} alt="VII Step Two"></img>
                    )}
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
    </>
  );
};
