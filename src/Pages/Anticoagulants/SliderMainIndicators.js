import React from "react";
import SliderPages from "../../Сomponents/SliderPages/SliderPages";

import MainIndicatorsAnticoagulants from "../../Сomponents/Anticoagulants/MainIndicators/MainIndicatorsAnticoagulants";
import TaskMainIndicatorsAnticoagulantsOne from "../../Сomponents/Anticoagulants/MainIndicators/TaskMainIndicatorsAnticoagulantsOne";
import TaskMainIndicatorsAnticoagulantsTwo from "../../Сomponents/Anticoagulants/MainIndicators/TaskMainIndicatorsAnticoagulantsTwo";
import TaskMainIndicatorsAnticoagulantsThree from "../../Сomponents/Anticoagulants/MainIndicators/TaskMainIndicatorsAnticoagulantsThree";

  const SliderMainIndicators = () => {
    const components = [MainIndicatorsAnticoagulants, TaskMainIndicatorsAnticoagulantsOne, TaskMainIndicatorsAnticoagulantsTwo, TaskMainIndicatorsAnticoagulantsThree];
    return <SliderPages components={components} sliderWidth="140px" sliderHeight="9px"/>;
  };
export default SliderMainIndicators;
