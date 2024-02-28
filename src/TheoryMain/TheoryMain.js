import React from 'react';
import './TheoryMain.css'; // Импорт CSS
import ImageButton from '../ImageButton/ImageButton';

import iconInfo from '../Media/TheoryMain/iconInfo.svg';
import iconBook from '../Media/TheoryMain/iconBook.svg';
import ThemeBumber1 from '../Media/TheoryMain/iconThemeNumber1.svg'

import theoryImage from '../Media/TheoryMain/logoTheory.svg'; 
import buttonBlocked from '../Media/TheoryMain/buttomBlocked.svg'


const TheoryMain = () => {
  return (
    <div className="theory_main">
      <div className="theory_main__inform">
        <img className = 'theory-logo'src={theoryImage} alt="Графика теории" />
        <div className='theory_main-container theory_inform-text'>
        <h1>Антикоагулянты</h1>
        <img className='iconInfo' src={iconInfo}></img>
        </div>
        <p className='theory_main__inform-subtext'>Нажмите на иконку для выбора интересующего урока.</p>
        <div className='theory_main-container theory_main__inform-subtext' >
        <img className='iconBook' src={iconBook}></img>
        <p className="lessons">10 уроков</p>
        </div>
      </div>
      <div className="theory_main__interact">
        <div className='theory_main-container'>
        <img src={ThemeBumber1}></img>
        <h2 className='theory_main__interact-text'>Механизм действия</h2>
        </div>
        <div className="interact_buttons">
          <div className="button_container">
            <ImageButton  buttonText='Начать'/>
            <p>Система коагуляции крови</p>
          </div>
          <div className="button_container">
            <img src={buttonBlocked} alt="Задача 1" />
            <p>Задача 1</p>
          </div>
          <div className="button_container">
            <img src={buttonBlocked} alt="Задача 2" />
            <p>Задача 2</p>
          </div>
          <div className="button_container">
            <img src={buttonBlocked} alt="Задача 3" />
            <p>Задача 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryMain;
