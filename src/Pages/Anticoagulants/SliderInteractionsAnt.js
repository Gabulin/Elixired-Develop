import React from "react";
import SliderPages from "../../Сomponents/SliderPages/SliderPages";

import OneInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/OneInteractionAnticoagulants";
import TwoInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/TwoInteractionAnticoagulants";
import ThreeInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/ThreeInteractionAnticoagulants";
import FourInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/FourInteractionAnticoagulants";
import FiveInteractionAnticoagulants from "../../Сomponents/Anticoagulants/Interaction/FiveInteractionAnticoagulants";

const SliderInteractionsAnt = () => {
  const components = [OneInteractionAnticoagulants, TwoInteractionAnticoagulants, ThreeInteractionAnticoagulants, FourInteractionAnticoagulants, FiveInteractionAnticoagulants];
  return <SliderPages components={components} sliderWidth="83px" sliderHeight="9px"/>;
};

export default SliderInteractionsAnt;
