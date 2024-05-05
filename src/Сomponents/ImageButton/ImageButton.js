import React, { useState } from "react";
import "./ImageButton.css";
import defaultImage from "../../Media/TheoryMain/buttonStandart.svg";
import pressedImage from "../../Media/TheoryMain/buttonPressed.svg";
import popupButton from "../../Media/TheoryMain/popupButton.svg";
import popupButtonHover from '../../Media/TheoryMain/popupButtonHover.svg'

const ImageButton = ({ buttonText, onClick, isOpen, route, activeIndex = 0 }) => {
  const [image, setImage] = useState(defaultImage);
  const [isPopupHovered, setIsPopupHovered] = useState(false);

  const handlePopupMouseEnter = () => {
    setIsPopupHovered(true);
  };

  const handlePopupMouseLeave = () => {
    setIsPopupHovered(false);
  };

  const handleClick = () => {
    onClick();
    setImage(pressedImage);
    setTimeout(() => setImage(defaultImage), 200);
  };

  const handlePopupClick = () => {
    if (route) {
      window.location.href = `${route}?activeIndex=${activeIndex}`;
    }
  };

  return (
    <div className="image-button-container">
      {isOpen && (
        <div className="popup_container">
          <svg
            className="popup-svg"
            onClick={handlePopupClick} 
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            <image href={isPopupHovered ? popupButtonHover : popupButton} width="100" height="50" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
            >
              {buttonText}
            </text>
          </svg>
        </div>
      )}
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
