import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  // Массив с данными о роутах
  const routes = [
    { path: "/Elixired-Develop", element: <><Header /><MainContent /><Footer /></> },
    { path: "/theory", element: <><Header /><TheoryMain /><Footer /></> },
    { path: "/anticoagulants/main_Indicators", element: <><Header /><Anticoagulants_Slider_Main_Indicators /><Footer /></> },
    { path: "/anticoagulants/general_contraindications", element: <><Header /><Slider_General_Contraindications_Ant /><Footer /></> },
    { path: "/anticoagulants/interactions", element: <><Header /><Slider_Interactions_Ant /><Footer /></> },
    { path: "*", element: <><NotFoundPage /></> }
  ];

  return (
    <main className="app">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
};

export default App;