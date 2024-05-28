import React from 'react';
import './MainContent.css';
import logoMain from "../../Media/logoMain.svg"
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className='main-content_text-container'>
      <h1 className='main_text'>ОБЩАЯ <br></br>ФАРМАКОЛОГИЯ <br></br>С ЛЁГКОСТЬЮ</h1>
      <p className='main_subtext'>Уроки и задачи для эффективного <br></br>запоминания фармакологии в <br></br>интерактивном режиме</p>
      <Link to="/theory">
      <button className="trial-button"><strong>НАЧАТЬ ПРОБНЫЙ УРОК</strong></button>
      </Link>
      <div className='feedback'>
        <a className='feedback-ref' href='https://t.me/+ioTxRYcApMxjZTYy' target="_blank"></a>
      <button className="feedback-button"><strong>ОСТАВИТЬ ОБРАТНУЮ СВЯЗЬ</strong></button>
      </div>
      </div>
      <div className='main-content_media-container'>
        <img className='main-content_media__img' src={logoMain}></img>
      </div>
    </div>
  );
};

export default MainContent;