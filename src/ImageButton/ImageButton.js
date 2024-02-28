import React, { useState } from 'react';
import './ImageButton.css';
import defaultImage from '../Media/TheoryMain/buttonStandart.svg';
import pressedImage from '../Media/TheoryMain/buttonPressed.svg';
import popupButton from '../Media/TheoryMain/popupButton.svg'

const ImageButton = ({ buttonText }) => {
  const [image, setImage] = useState(defaultImage);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setImage(pressedImage);

    if (showPopup) {
      setShowPopup(false);
      setTimeout(() => setShowPopup(true), 0);
    } else {
      setShowPopup(true);
    }

    setTimeout(() => setImage(defaultImage), 200);
  };

  return (
    <div className="image-button-container">
      {showPopup && 
        <svg className="popup-svg" onClick={() => alert('Переход на следующую страницу')}>
          {/* Исправлено: Переместите <text> внутрь <svg> */}
          <image href={popupButton} width="100" height="50" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{buttonText}</text>
        </svg>
      }
      <img 
        src={image} 
        alt="Button" 
        className="button-image"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageButton;