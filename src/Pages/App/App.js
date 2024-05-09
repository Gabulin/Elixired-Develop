import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//стили
import "./App.css";
//Хидер
import Header from "../Header/Header";
//Футер
import Footer from "../Footer/Footer";
//Стартовая страница
import MainContent from "../MainContent/MainContent";
//Страница не найдена
import NotFoundPage from "../NotFound/NotFound";
//Выбор темы Антикоагулянты
import TheoryMain from "../TheoryMain/TheoryMain";
//Основные показания Антикоагулянты
import SliderMainIndicators from "../Anticoagulants/SliderMainIndicators";
//Общие противопоказания Антикоагулянты
import SliderGeneralContraindicationsAnt from "../Anticoagulants/SliderGeneralContraindicationsAnt";
// Взимодейстаия Антикоагулянты
import SliderInteractionsAnt from "../Anticoagulants/SliderInteractionsAnt";
//
import SliderSystemCoagulationPuzzle from "../Anticoagulants/SliderSystemCoagulationPuzzle";
// Тест видео
import SystemCoagulationVideoTEST from "../../Сomponents/Anticoagulants/Puzzles/Puzzle_System_Coagulation/SystemCoagulationVideoTEST";
// Механизмы действия
import SliderMechAnt from "../Anticoagulants/SliderMechAnt";

const App = () => {
  // Массив с данными о роутах
  const routes = [
    { path: "", element: <><Header/><MainContent /><Footer /></> },
    { path: "/theory", element: <><Header /><TheoryMain /><Footer /></> },
    { path: "/anticoagulants/main_Indicators", element: <><SliderMainIndicators /><Footer /></> },
    { path: "/anticoagulants/general_contraindications", element: <><SliderGeneralContraindicationsAnt /><Footer /></> },
    { path: "/anticoagulants/interactions", element: <><SliderInteractionsAnt /><Footer /></> },
    { path: "*", element: <><NotFoundPage /></> },
    { path: "/notfoundpage", element: <><NotFoundPage /></> },
    { path: "/anticoagulants/puzzles", element: <><SliderSystemCoagulationPuzzle /><Footer /></> },
    { path: "/anticoagulants/mechanism", element: <><SliderMechAnt /><Footer /></> }
  ];

  return (
    <main className="app">
       <DndProvider backend={HTML5Backend}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      </DndProvider>
    </main>
  );
};

export default App;