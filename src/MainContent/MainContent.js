import React from 'react';
import './MainContent.css';
import grayBox from '../Media/gray-box.jpg'

const MainContent = () => {
  return (
    <main className="main-content">
      <div className='main-content_text-container'>
      <h1 className='main_text'>ФАРМАКОЛОГИЯ <br></br>С ЛЁГКОСТЬЮ</h1>
      <p className='main_subtext'>Уроки и задачи для эффективного <br></br>запоминания фармакологии в <br></br>интерактивном режиме</p>
      <button className="trial-button">НАЧАТЬ ПРОБНЫЙ УРОК</button>
      </div>
      <div className='main-content_media-container'>
        <img className='main-content_media__img' src={grayBox}></img>
      </div>
    </main>
  );
};

export default MainContent;