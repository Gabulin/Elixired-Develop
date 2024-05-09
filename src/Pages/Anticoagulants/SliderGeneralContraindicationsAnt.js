import React from "react";
import SliderPages from "../../Сomponents/SliderPages/SliderPages";

import GeneralContraindicationsAnticoagulants from "../../Сomponents/Anticoagulants/General_Contraindications/GeneralContraindicationsAnticoagulants";
import TaskOneGeneralContraindicationsAnticoagulants from "../../Сomponents/Anticoagulants/General_Contraindications/TaskOneGeneralContraindications";
import TaskTwoGeneralContraindicationsAnticoagulants from "../../Сomponents/Anticoagulants/General_Contraindications/TaskTwoGeneralContraindications";
import TaskThreeGeneralContraindicationsAnticoagulants from "../../Сomponents/Anticoagulants/General_Contraindications/TaskThreeGeneralContraindications";

const SliderGeneralContraindicationsAnt = () => {
  const components = [GeneralContraindicationsAnticoagulants, TaskOneGeneralContraindicationsAnticoagulants, TaskTwoGeneralContraindicationsAnticoagulants, TaskThreeGeneralContraindicationsAnticoagulants];
  return <SliderPages components={components} sliderWidth="140px" sliderHeight="9px"/>;
};


export default SliderGeneralContraindicationsAnt;
