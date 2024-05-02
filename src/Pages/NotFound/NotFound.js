import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../../Media/NotFound/404animation.json';

import { Link } from 'react-router-dom';

import './NotFound.css'

const NotFoundPage = () => {
  return (
    <div className='notFoundPage__container'>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: '640px', height: '640px' }} 
      />
      <h1 className='notFound__text'>Страница не найдена</h1>
      <p className='notFound__subtext'>Или ещё не существует</p>
      <Link to="/">
      <button className="trial-button notFoundButton">Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;