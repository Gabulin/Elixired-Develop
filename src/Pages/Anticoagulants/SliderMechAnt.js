import React from "react";
import SliderPages from "../../Сomponents/SliderPages/SliderPages";

import AnticoagulantsMechanismDirectActionVideo from "../../Сomponents/Anticoagulants/Puzzles/AnticoagulantsMechanismDirectAction/AnticoagulantsMechanismDirectAction";
import AnticoagulantsMechanismINDirectActionVideo from "../../Сomponents/Anticoagulants/Puzzles/AnticoagulantsMechanismINDirectAction/AnticoagulantsMechanismINDirectAction";
import AntiMechINDirectActionPuzzle from "../../Сomponents/Anticoagulants/Puzzles/AnticoagulantsMechanismINDirectAction/AntiMechINDirectActionPuzzle";

const SliderMechAnt = () => {
  const components = [AnticoagulantsMechanismDirectActionVideo, AnticoagulantsMechanismINDirectActionVideo, AntiMechINDirectActionPuzzle];
  return <SliderPages components={components} sliderWidth="170px" sliderHeight="9px"/>;
};

export default SliderMechAnt;