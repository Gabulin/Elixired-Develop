import React from "react";
import SliderPages from "../../Сomponents/SliderPages/SliderPages";

import SystemCoagulationVideo from "../../Сomponents/Anticoagulants/Puzzles/Puzzle_System_Coagulation/SystemCoagulationVideo";
import SystemCoagulationPuzzle from "../../Сomponents/Anticoagulants/Puzzles/Puzzle_System_Coagulation/SystemCoagulationPuzzle";
const SliderSystemCoagulationPuzzle = () => {
  const components = [SystemCoagulationVideo, SystemCoagulationPuzzle];
  return <SliderPages components={components} sliderWidth="290px" sliderHeight="9px"/>;
};

export default SliderSystemCoagulationPuzzle;