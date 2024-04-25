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
import Anticoagulants_Slider_Main_Indicators from "../../Pages/Anticoagulants/Slider_Main_Indicators";
//Общие противопоказания Антикоагулянты
import Slider_General_Contraindications_Ant from "../Anticoagulants/Slider_General_Contraindications_Ant";
// Взимодейстаия Антикоагулянты
import Slider_Interactions_Ant from "../Anticoagulants/Slider_Interactions_Ant";
// Тест пазла
import System_coagulation_Puzzle from "../../Сomponents/Anticoagulants/Puzzles/Puzzle_System_Coagulation/System_coagulation_Puzzle";

const App = () => {
  // Массив с данными о роутах
  const routes = [
    { path: "/Elixired-Develop", element: <><Header /><System_coagulation_Puzzle /><Footer /></> },
    { path: "/theory", element: <><Header /><TheoryMain /><Footer /></> },
    { path: "/anticoagulants/main_Indicators", element: <><Header /><Anticoagulants_Slider_Main_Indicators /><Footer /></> },
    { path: "/anticoagulants/general_contraindications", element: <><Header /><Slider_General_Contraindications_Ant /><Footer /></> },
    { path: "/anticoagulants/interactions", element: <><Header /><Slider_Interactions_Ant /><Footer /></> },
    { path: "*", element: <><NotFoundPage /></> }
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