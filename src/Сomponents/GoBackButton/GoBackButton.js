import React from 'react';
import {useNavigate} from 'react-router-dom';
import './GoBackButton.css'

const GoBackButton = ({ route }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(route);
  };

  return (
    <button className='goBackButton' onClick={handleGoBack}></button> 
  );
};

export default GoBackButton;