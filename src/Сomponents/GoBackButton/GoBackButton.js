import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoBackButton.css'

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button className='goBackButton' onClick={handleGoBack}></button> 
  );
};

export default GoBackButton;