import React, { useState, useEffect, useRef } from "react";

import "./MechDirectVideo.css";

//Утилиты
import TextTyper from "../../../../Utils/TextTyper";

//Импорт компонентов видео
import {
  DirectMechStepTwoTwo,
  DirectMechStepTwoOne,
  DirectMechStepThreeTwo,
  DirectMechStepThreeOne,
  DirectMechStepOneTwo,
  DirectMechStepOneOne,
  DirectMechStepFourTwo,
  DirectMechStepFourThree,
  DirectMechStepFourOne,
  DirectMechStandart,
} from "../AnticoagulantsMechanismImports";

const AnticoagulantsMechanismDirectActionVideo = ({ handleContinue }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 1) {
      const timeoutId = setTimeout(() => {
        setShowSecondImage(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      // Если progress меньше 1, сбрасываем showSecondImage
      setShowSecondImage(false);
    }
  }, [progress]);

  useEffect(() => {
    const scrollAmount = 1000; // количество пикселей для прокрутки
    const scrollDuration = 1000; // время прокрутки в миллисекундах

    const startScroll = () => {
      const textarea = document.querySelector(".puzzle__inform-click_textarea");
      if (textarea) {
        const startTime = performance.now();
        const startY = textarea.scrollTop;
        const endY = startY + scrollAmount;

        const scrollStep = (timestamp) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / scrollDuration, 1); // ограничиваем прогресс максимумом 1

          textarea.scrollTop = startY + progress * (endY - startY);

          if (elapsed < scrollDuration) {
            requestAnimationFrame(scrollStep);
          }
        };

        requestAnimationFrame(scrollStep);
      }
    };

    startScroll();

    return () => {};
  }, [progress]);

  const handleRightClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
    setShowSecondImage(false);
  };

  const handleX2RightClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 100, 100));
  };

  const handleX2LeftClick = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 100, 0));
    setShowSecondImage(false);
  };

  const handleLeftClick = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 20, 0));
    setShowSecondImage(false);
  };

  return (
    <div className="puzzle__main_container">
      <h2 className="puzzle__name">
        МЕХАНИЗМЫ ДЕЙСТВИЯ АНТИКОАГУЛЯНТОВ ПРЯМОГО ДЕЙСТВИЯ
      </h2>
      <div className="puzzle__component">
        <div className="puzzle__workspace">
          <div className="puzzle__workspace_panel">
            <img
              className="fade-in back_step"
              src={DirectMechStandart}
              alt=""
            ></img>
            {progress >= 20 && (
              <>
                <img
                  className="fade-in back_step"
                  src={DirectMechStepOneOne}
                  alt=""
                ></img>
                {showSecondImage && (
                  <img
                    className="fade-in back_step"
                    src={DirectMechStepOneTwo}
                    alt=""
                  ></img>
                )}
              </>
            )}
            {progress >= 40 && (
              <>
                <img
                  className="fade-in back_step"
                  src={DirectMechStepTwoOne}
                  alt=""
                ></img>
                {showSecondImage && (
                  <img
                    className="fade-in back_step"
                    src={DirectMechStepTwoTwo}
                    alt=""
                  ></img>
                )}
              </>
            )}
            {progress >= 60 && (
              <>
                <img
                  className="fade-in back_step"
                  src={DirectMechStepThreeOne}
                  alt=""
                ></img>
                {showSecondImage && (
                  <img
                    className="fade-in back_step"
                    src={DirectMechStepThreeTwo}
                    alt=""
                  ></img>
                )}
              </>
            )}
            {progress >= 80 && (
              <>
                <img
                  className="fade-in back_step"
                  src={DirectMechStepFourOne}
                  alt=""
                ></img>
                {showSecondImage && (
                  <img
                    className="fade-in back_step"
                    src={DirectMechStepFourTwo}
                    alt=""
                  ></img>
                )}
                <div
                  className="explanation__button_cont"
                  onClick={handleRightClick}
                >
                  <button className="explanation__button">
                    Показать пояснение
                  </button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0157 6.13246H14.9876C12.7179 6.13246 10.5814 7.01746 8.97073 8.62528C8.17343 9.41655 7.54119 10.3583 7.11069 11.3958C6.68019 12.4333 6.46001 13.546 6.46292 14.6693C6.46292 16.865 7.29729 18.9472 8.81229 20.5325C9.57167 21.3275 9.98979 22.31 9.98979 23.299V24.019C9.98979 25.0015 10.7895 25.8003 11.771 25.8003H18.2295C19.212 25.8003 20.0107 25.0015 20.0107 24.019V23.299C20.0107 22.309 20.4289 21.3265 21.1882 20.5315C22.6998 18.9547 23.5418 16.8537 23.5376 14.6693C23.5405 13.546 23.3203 12.4333 22.8898 11.3958C22.4593 10.3583 21.8271 9.41655 21.0298 8.62528C20.2417 7.83314 19.3044 7.205 18.2722 6.77714C17.2399 6.34927 16.1331 6.13016 15.0157 6.13246ZM19.9685 19.3653C18.9073 20.4762 18.3223 21.8722 18.3223 23.2981V24.0181C18.3223 24.0304 18.3199 24.0426 18.3152 24.054C18.3104 24.0653 18.3035 24.0757 18.2948 24.0844C18.2861 24.0931 18.2758 24.1 18.2644 24.1047C18.253 24.1094 18.2409 24.1118 18.2285 24.1118H11.7701C11.7578 24.1118 11.7456 24.1094 11.7342 24.1047C11.7229 24.1 11.7125 24.0931 11.7038 24.0844C11.6951 24.0757 11.6882 24.0653 11.6835 24.054C11.6788 24.0426 11.6764 24.0304 11.6764 24.0181V23.2981C11.6764 21.8722 11.0914 20.4753 10.0301 19.3653C8.81968 18.1016 8.14567 16.4183 8.14948 14.6684C8.14948 12.8365 8.86386 11.1143 10.1614 9.81871C10.794 9.18311 11.5464 8.67914 12.3749 8.33591C13.2034 7.99269 14.0917 7.81701 14.9885 7.81903H15.011C16.8307 7.81903 18.5445 8.52871 19.8354 9.81871C20.4751 10.4537 20.9823 11.2093 21.3277 12.0418C21.673 12.8743 21.8497 13.7671 21.8473 14.6684C21.8529 16.4182 21.1794 18.102 19.9685 19.3653Z"
                      fill="#8F00FF"
                    />
                    <path
                      d="M13.8379 10.0218C12.9919 10.2314 12.2196 10.6689 11.6049 11.2867C10.9902 11.9046 10.5566 12.6791 10.3513 13.5261C10.3218 13.6348 10.3143 13.7484 10.3293 13.86C10.3443 13.9716 10.3815 14.0791 10.4388 14.1761C10.496 14.2732 10.5721 14.3577 10.6625 14.4249C10.7529 14.4921 10.8559 14.5404 10.9653 14.5672C11.0747 14.5939 11.1884 14.5984 11.2996 14.5805C11.4108 14.5626 11.5173 14.5227 11.6128 14.4629C11.7083 14.4032 11.7909 14.325 11.8557 14.2329C11.9205 14.1407 11.9662 14.0365 11.9901 13.9265C12.1267 13.3803 12.4085 12.8813 12.8056 12.4823C13.2027 12.0832 13.7003 11.799 14.2457 11.6596C14.4629 11.6055 14.6497 11.4674 14.765 11.2756C14.8804 11.0837 14.9148 10.854 14.8607 10.6368C14.8066 10.4196 14.6685 10.2328 14.4767 10.1174C14.2849 10.0021 14.0551 9.9677 13.8379 10.0218ZM17.302 27.2802H12.6988C12.4751 27.2802 12.2604 27.3691 12.1022 27.5273C11.944 27.6856 11.8551 27.9002 11.8551 28.124C11.8551 28.3477 11.944 28.5623 12.1022 28.7206C12.2604 28.8788 12.4751 28.9677 12.6988 28.9677H17.302C17.5257 28.9677 17.7403 28.8788 17.8986 28.7206C18.0568 28.5623 18.1457 28.3477 18.1457 28.124C18.1457 27.9002 18.0568 27.6856 17.8986 27.5273C17.7403 27.3691 17.5257 27.2802 17.302 27.2802ZM15.0004 4.36959C15.2242 4.36959 15.4388 4.28069 15.597 4.12246C15.7552 3.96423 15.8441 3.74961 15.8441 3.52584V1.87396C15.8441 1.65019 15.7552 1.43557 15.597 1.27734C15.4388 1.11911 15.2242 1.03021 15.0004 1.03021C14.7766 1.03021 14.562 1.11911 14.4038 1.27734C14.2455 1.43557 14.1566 1.65019 14.1566 1.87396V3.52584C14.1566 3.74961 14.2455 3.96423 14.4038 4.12246C14.562 4.28069 14.7766 4.36959 15.0004 4.36959ZM27.0145 12.1011H25.3626C25.1388 12.1011 24.9242 12.19 24.766 12.3483C24.6077 12.5065 24.5188 12.7211 24.5188 12.9449C24.5188 13.1687 24.6077 13.3833 24.766 13.5415C24.9242 13.6998 25.1388 13.7886 25.3626 13.7886H27.0145C27.2382 13.7886 27.4528 13.6998 27.6111 13.5415C27.7693 13.3833 27.8582 13.1687 27.8582 12.9449C27.8582 12.7211 27.7693 12.5065 27.6111 12.3483C27.4528 12.19 27.2382 12.1011 27.0145 12.1011ZM4.63727 12.1011H2.98633C2.76255 12.1011 2.54794 12.19 2.38971 12.3483C2.23147 12.5065 2.14258 12.7211 2.14258 12.9449C2.14258 13.1687 2.23147 13.3833 2.38971 13.5415C2.54794 13.6998 2.76255 13.7886 2.98633 13.7886H4.6382C4.86198 13.7885 5.07654 13.6995 5.23469 13.5412C5.39283 13.3829 5.48161 13.1682 5.48148 12.9444C5.48136 12.7207 5.39235 12.5061 5.23402 12.3479C5.0757 12.1898 4.86104 12.101 4.63727 12.1011ZM7.7432 6.88115C7.82138 6.96001 7.91441 7.0226 8.01691 7.06531C8.1194 7.10803 8.22935 7.13002 8.34039 7.13002C8.45143 7.13002 8.56138 7.10803 8.66388 7.06531C8.76637 7.0226 8.8594 6.96001 8.93758 6.88115C9.01604 6.80294 9.07829 6.71001 9.12077 6.6077C9.16325 6.50538 9.18511 6.39568 9.18511 6.2849C9.18511 6.17412 9.16325 6.06442 9.12077 5.9621C9.07829 5.85979 9.01604 5.76686 8.93758 5.68865L7.76852 4.51959C7.69084 4.43845 7.59775 4.37364 7.4947 4.32895C7.39164 4.28426 7.28071 4.2606 7.16839 4.25935C7.05607 4.25811 6.94464 4.2793 6.84062 4.32168C6.7366 4.36407 6.64209 4.4268 6.56263 4.5062C6.48318 4.58559 6.42037 4.68005 6.3779 4.78403C6.33543 4.88802 6.31416 4.99944 6.31531 5.11176C6.31647 5.22408 6.34005 5.33503 6.38465 5.43812C6.42926 5.54121 6.494 5.63435 6.57508 5.71209L7.7432 6.88115ZM22.2323 4.51959L21.0641 5.68771C20.9453 5.80541 20.8642 5.95584 20.8312 6.11981C20.7983 6.28378 20.8149 6.45386 20.8789 6.60835C20.943 6.76285 21.0516 6.89476 21.191 6.98726C21.3303 7.07976 21.4941 7.12866 21.6613 7.12771C21.7723 7.12789 21.8822 7.10612 21.9847 7.06364C22.0871 7.02116 22.1802 6.95882 22.2585 6.88021L23.4266 5.71209C23.7566 5.38302 23.7566 4.84865 23.4266 4.51959C23.0966 4.19053 22.5613 4.19053 22.2323 4.51959Z"
                      fill="#8F00FF"
                    />
                  </svg>
                </div>
              </>
            )}
            {progress >= 100 && (
              <>
                <img
                  className="fade-in back_step"
                  src={DirectMechStepFourThree}
                  alt=""
                ></img>

                <div
                  className="explanation__button_cont"
                  onClick={handleLeftClick}
                >
                  <button className="explanation__button">
                    Скрыть пояснение
                  </button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0157 6.13246H14.9876C12.7179 6.13246 10.5814 7.01746 8.97073 8.62528C8.17343 9.41655 7.54119 10.3583 7.11069 11.3958C6.68019 12.4333 6.46001 13.546 6.46292 14.6693C6.46292 16.865 7.29729 18.9472 8.81229 20.5325C9.57167 21.3275 9.98979 22.31 9.98979 23.299V24.019C9.98979 25.0015 10.7895 25.8003 11.771 25.8003H18.2295C19.212 25.8003 20.0107 25.0015 20.0107 24.019V23.299C20.0107 22.309 20.4289 21.3265 21.1882 20.5315C22.6998 18.9547 23.5418 16.8537 23.5376 14.6693C23.5405 13.546 23.3203 12.4333 22.8898 11.3958C22.4593 10.3583 21.8271 9.41655 21.0298 8.62528C20.2417 7.83314 19.3044 7.205 18.2722 6.77714C17.2399 6.34927 16.1331 6.13016 15.0157 6.13246ZM19.9685 19.3653C18.9073 20.4762 18.3223 21.8722 18.3223 23.2981V24.0181C18.3223 24.0304 18.3199 24.0426 18.3152 24.054C18.3104 24.0653 18.3035 24.0757 18.2948 24.0844C18.2861 24.0931 18.2758 24.1 18.2644 24.1047C18.253 24.1094 18.2409 24.1118 18.2285 24.1118H11.7701C11.7578 24.1118 11.7456 24.1094 11.7342 24.1047C11.7229 24.1 11.7125 24.0931 11.7038 24.0844C11.6951 24.0757 11.6882 24.0653 11.6835 24.054C11.6788 24.0426 11.6764 24.0304 11.6764 24.0181V23.2981C11.6764 21.8722 11.0914 20.4753 10.0301 19.3653C8.81968 18.1016 8.14567 16.4183 8.14948 14.6684C8.14948 12.8365 8.86386 11.1143 10.1614 9.81871C10.794 9.18311 11.5464 8.67914 12.3749 8.33591C13.2034 7.99269 14.0917 7.81701 14.9885 7.81903H15.011C16.8307 7.81903 18.5445 8.52871 19.8354 9.81871C20.4751 10.4537 20.9823 11.2093 21.3277 12.0418C21.673 12.8743 21.8497 13.7671 21.8473 14.6684C21.8529 16.4182 21.1794 18.102 19.9685 19.3653Z"
                      fill="#8F00FF"
                    />
                    <path
                      d="M13.8379 10.0218C12.9919 10.2314 12.2196 10.6689 11.6049 11.2867C10.9902 11.9046 10.5566 12.6791 10.3513 13.5261C10.3218 13.6348 10.3143 13.7484 10.3293 13.86C10.3443 13.9716 10.3815 14.0791 10.4388 14.1761C10.496 14.2732 10.5721 14.3577 10.6625 14.4249C10.7529 14.4921 10.8559 14.5404 10.9653 14.5672C11.0747 14.5939 11.1884 14.5984 11.2996 14.5805C11.4108 14.5626 11.5173 14.5227 11.6128 14.4629C11.7083 14.4032 11.7909 14.325 11.8557 14.2329C11.9205 14.1407 11.9662 14.0365 11.9901 13.9265C12.1267 13.3803 12.4085 12.8813 12.8056 12.4823C13.2027 12.0832 13.7003 11.799 14.2457 11.6596C14.4629 11.6055 14.6497 11.4674 14.765 11.2756C14.8804 11.0837 14.9148 10.854 14.8607 10.6368C14.8066 10.4196 14.6685 10.2328 14.4767 10.1174C14.2849 10.0021 14.0551 9.9677 13.8379 10.0218ZM17.302 27.2802H12.6988C12.4751 27.2802 12.2604 27.3691 12.1022 27.5273C11.944 27.6856 11.8551 27.9002 11.8551 28.124C11.8551 28.3477 11.944 28.5623 12.1022 28.7206C12.2604 28.8788 12.4751 28.9677 12.6988 28.9677H17.302C17.5257 28.9677 17.7403 28.8788 17.8986 28.7206C18.0568 28.5623 18.1457 28.3477 18.1457 28.124C18.1457 27.9002 18.0568 27.6856 17.8986 27.5273C17.7403 27.3691 17.5257 27.2802 17.302 27.2802ZM15.0004 4.36959C15.2242 4.36959 15.4388 4.28069 15.597 4.12246C15.7552 3.96423 15.8441 3.74961 15.8441 3.52584V1.87396C15.8441 1.65019 15.7552 1.43557 15.597 1.27734C15.4388 1.11911 15.2242 1.03021 15.0004 1.03021C14.7766 1.03021 14.562 1.11911 14.4038 1.27734C14.2455 1.43557 14.1566 1.65019 14.1566 1.87396V3.52584C14.1566 3.74961 14.2455 3.96423 14.4038 4.12246C14.562 4.28069 14.7766 4.36959 15.0004 4.36959ZM27.0145 12.1011H25.3626C25.1388 12.1011 24.9242 12.19 24.766 12.3483C24.6077 12.5065 24.5188 12.7211 24.5188 12.9449C24.5188 13.1687 24.6077 13.3833 24.766 13.5415C24.9242 13.6998 25.1388 13.7886 25.3626 13.7886H27.0145C27.2382 13.7886 27.4528 13.6998 27.6111 13.5415C27.7693 13.3833 27.8582 13.1687 27.8582 12.9449C27.8582 12.7211 27.7693 12.5065 27.6111 12.3483C27.4528 12.19 27.2382 12.1011 27.0145 12.1011ZM4.63727 12.1011H2.98633C2.76255 12.1011 2.54794 12.19 2.38971 12.3483C2.23147 12.5065 2.14258 12.7211 2.14258 12.9449C2.14258 13.1687 2.23147 13.3833 2.38971 13.5415C2.54794 13.6998 2.76255 13.7886 2.98633 13.7886H4.6382C4.86198 13.7885 5.07654 13.6995 5.23469 13.5412C5.39283 13.3829 5.48161 13.1682 5.48148 12.9444C5.48136 12.7207 5.39235 12.5061 5.23402 12.3479C5.0757 12.1898 4.86104 12.101 4.63727 12.1011ZM7.7432 6.88115C7.82138 6.96001 7.91441 7.0226 8.01691 7.06531C8.1194 7.10803 8.22935 7.13002 8.34039 7.13002C8.45143 7.13002 8.56138 7.10803 8.66388 7.06531C8.76637 7.0226 8.8594 6.96001 8.93758 6.88115C9.01604 6.80294 9.07829 6.71001 9.12077 6.6077C9.16325 6.50538 9.18511 6.39568 9.18511 6.2849C9.18511 6.17412 9.16325 6.06442 9.12077 5.9621C9.07829 5.85979 9.01604 5.76686 8.93758 5.68865L7.76852 4.51959C7.69084 4.43845 7.59775 4.37364 7.4947 4.32895C7.39164 4.28426 7.28071 4.2606 7.16839 4.25935C7.05607 4.25811 6.94464 4.2793 6.84062 4.32168C6.7366 4.36407 6.64209 4.4268 6.56263 4.5062C6.48318 4.58559 6.42037 4.68005 6.3779 4.78403C6.33543 4.88802 6.31416 4.99944 6.31531 5.11176C6.31647 5.22408 6.34005 5.33503 6.38465 5.43812C6.42926 5.54121 6.494 5.63435 6.57508 5.71209L7.7432 6.88115ZM22.2323 4.51959L21.0641 5.68771C20.9453 5.80541 20.8642 5.95584 20.8312 6.11981C20.7983 6.28378 20.8149 6.45386 20.8789 6.60835C20.943 6.76285 21.0516 6.89476 21.191 6.98726C21.3303 7.07976 21.4941 7.12866 21.6613 7.12771C21.7723 7.12789 21.8822 7.10612 21.9847 7.06364C22.0871 7.02116 22.1802 6.95882 22.2585 6.88021L23.4266 5.71209C23.7566 5.38302 23.7566 4.84865 23.4266 4.51959C23.0966 4.19053 22.5613 4.19053 22.2323 4.51959Z"
                      fill="#8F00FF"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          <div className="bar">
            <div className="status-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <button
              className="video__button_left-all"
              onClick={handleX2LeftClick}
            ></button>
            <button
              className="video__button_left"
              onClick={handleLeftClick}
            ></button>
            <button
              className="video__button_right"
              onClick={handleRightClick}
            ></button>
            <button className="video__button_right-all"></button>
          </div>
        </div>
        <div className="puzzle__inform-click">
          <div className="puzzle__inform-click_textarea">
            <div className="puzzle__task_main-text">
              <TextTyper>
                <h3>Интерактивная панель</h3>
              </TextTyper>
            </div>

            <div className="puzzle__task_sub-text">
              <TextTyper>
                <p>
                  Нажимайте на стрелки, чтобы просмотреть тему "Механизмы
                  действия антигоагулянтов прямого действия"
                </p>
              </TextTyper>
            </div>

            {progress >= 20 && (
              <>
                <div className="">
                  <h3 className="puzzle__task_main-text">Объяснение</h3>
                </div>
              </>
            )}
            {progress === 20 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Дабигатрана этексилат -</strong> пролекарство,
                    активируется в печени и крови.
                  </p>
                </div>
                <div className="fade-in">
                  <ul className="fade-in dot_subtext">
                    <li className="fade-in dot_subtext_point mech">
                      Напрямую ингибирует тромбин и препятствует образованию
                      тромба.
                    </li>
                    <li className="fade-in dot_subtext_point mech">
                      Активен при пероральном приеме.
                    </li>
                    <li className="fade-in dot_subtext_point mech">
                      Низкая биодоступность, повышается в кислой среде, поэтому
                      не применяют с ингибиторами протонной помпы, так как они
                      снижают кислотность.
                    </li>
                    <li className="fade-in dot_subtext_point mech">
                      Он действует быстро и вводится через 1-4 часа после
                      операции, а затем 1-2 раза в день в послеоперационном
                      периоде.
                    </li>
                  </ul>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Показания:</strong> профилактики венозной
                    тромбоэмболии после эндопротезирования тазобедренного или
                    коленного сустава, а также для профилактики инсульта и
                    системной эмболии при фибрилляции предсердий
                  </p>
                  <p className="puzzle__task_sub-text">
                    {" "}
                    <strong>Побочные эффекты:</strong> кровотечения, анемия,
                    тромбоцитопения
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Противопоказания:</strong> активное
                    кровотечение, почечная недостаточность (так как выводится
                    через почки)
                  </p>
                </div>
              </>
            )}

            {progress === 40 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Ривароксабан -</strong> обратимо блокирует фактор
                    Xa(Стюарта-Прауэра). Наиболее известен в практике, как
                    КСАРЕЛТО
                  </p>
                </div>
                <div className="fade-in">
                  <ul className="fade-in dot_subtext">
                    <li className="fade-in dot_subtext_point mech">
                      Биодоступность 80–100% вне зависимости от приема пищи.  
                    </li>
                    <li className="fade-in dot_subtext_point mech">
                      Окисляется в печени, выводится с метаболитами, одна
                      половина почками, а другая  с калом. Связывание с белками
                      плазмы, преимущественно с альбумином.
                    </li>
                    <li className="fade-in dot_subtext_point mech">
                      Назначается перорально.
                    </li>
                  </ul>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Показания:</strong> вторичная профилактика ИМ и
                    тромбоза сосудистого стента, лечение и профилактика тромбоза
                    глубоких вен
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Побочные эффекты:</strong> кровотечение, анемия,
                    тромбоцитопения
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Противопоказания:</strong> активные кровотечения,
                    заболевания связанные с опасностью кровотечения (язва
                    желудка, ДПК, злокачественные новообразования, туберкулез).
                  </p>
                </div>
              </>
            )}
            {progress === 60 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Апиксабан-</strong> обратимо блокирует Xa. ПЭ=3ч.{" "}
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Показания:</strong> профилактика венозной
                    тромбоэмболии, предупреждение инсульта, тромбоэмболии при
                    ФП, лечение ТЭЛА.
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Общие противопоказания:</strong> активное
                    кровотечение, механические протезы клапанов сердца и
                    митральным стенозом (Есть данные что наоборот увеличивает их
                    тромбоз).<br></br>
                    Если кровотечение на фоне передозировки -нужно пополнить
                    плазменные факторы, перелить свежезамороженную плазму.
                  </p>
                </div>
              </>
            )}
            {progress === 80 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>
                      Нефракционный гепарин (НФГ): гепарин натрия.
                    </strong>
                  </p>
                </div>
                <ul className="fade-in dot_subtext">
                  <li className="fade-in dot_subtext_point mech">
                    НФГ связывается с антитромбином III, который в свою очередь
                    ингибирует тромбин и Ха-фактор, а также IXa, XIa и XIIa.  
                  </li>
                  <li className="fade-in dot_subtext_point mech">
                    При в/в введении свертывание крови замедляется почти сразу,
                    при в/м - через 15-30 мин, при п/к - через 20-60 мин, после
                    ингаляции максимум эффекта - через сутки.
                  </li>
                  <li className="fade-in dot_subtext_point mech">
                    Продолжительность антикоагулянтного действия соответственно
                    - 4-5, 6, 8 ч.
                  </li>
                  <li className="fade-in dot_subtext_point mech">
                    Во время лечения гепарином необходим контроль показателей
                    свертывания крови (а именно АЧТВ)
                  </li>
                </ul>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Показания:</strong> профилактика и лечение тромбозов
                    и тромбоэмболий.
                  </p>
                  <p className="puzzle__task_sub-text">
                    <strong>Побочные эффекты:</strong> Кровоточивость,
                    тромбоцитопения, остеопороз, аллергия.
                  </p>
                  <p className="puzzle__task_sub-text">
                    <strong>Противопоказания:</strong> Неконтролируемая АГ,
                    гипокоагуляция, почечная и печеночная недостаточность,
                    заболевания связанные с опасностью кровотечения (язвы
                    желудка, ДПК, злокачественные новообразования, туберкулез)
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Низкомолекулярные гепарины(НМГ):</strong>{" "}
                    Надропарин, эноксопарин, дальтепарин.
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text mech">
                    - НМГ связываются с  антитромбином III, это связывание
                    приводит к ингибированию фактора Xа.
                  </p>
                  <p className="puzzle__task_sub-text mech">
                    - НМГ вводятся подкожно. Биодоступность практически полная
                    (около 98%). Период полувыведения у них более длительный,
                    чем у НФГ, прием препарата осуществляется реже (один или два
                    раза в день).
                  </p>
                  <p className="puzzle__task_sub-text mech">
                    -НМГ не продлевают АЧТВ, поэтому регулярный мониторинг не
                    требуется.
                  </p>
                  <p className="puzzle__task_sub-text mech">
                    - НМГ выводятся в основном путем почечной экскреции
                  </p>
                </div>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Показания:</strong> те же, что и у  НФГ.
                  </p>
                  <p className="puzzle__task_sub-text">
                    <strong>Побочные эффекты:</strong> кровотечения, гематомы в
                    месте инъекции, повышение активности АЛТ и АСТ в печени.
                  </p>
                  <p className="puzzle__task_sub-text">
                    <strong>Противопоказания:</strong> тромбоцитопения,
                    кровотечения или их риск, инфекционный эндокардит, почечная
                    недостаточность.
                  </p>
                </div>
              </>
            )}
            {progress === 100 && (
              <>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>
                      Высокомолекулярный (нефракционный) гепарин -
                    </strong>{" "}
                    это цепь мукополисахарида, состоящая из пентасахаридной
                    последовательности и хвоста. Молекулярная масса НФГ
                    составляет 16000Да.
                  </p>
                </div>
                <ul className="fade-in dot_subtext">
                  <li className="fade-in dot_subtext_point mech">
                    <strong>НФГ</strong> связывается с{" "}
                    <strong>антитромбином III</strong> и изменяет его
                    конформацию. Активный центр антитромбина III связывает{" "}
                    <strong>Х-ый активный фактор</strong>, что приводит к{" "}
                    <strong>остановке внешнего пути</strong> свертывания крови.
                    Также{" "}
                    <strong>антитромбин III связывается с тромбином</strong>(для
                    этого необходим не только активный центр антитромбина III,
                    но и цепь гепарина не короче определенной длины), приводя к
                    остановке как внешнего, так и внутреннего пути свертывания
                    крови.
                  </li>
                </ul>
                <div className="fade-in">
                  <p className="puzzle__task_sub-text">
                    <strong>Низкомолекулярный гепарин (НМК)</strong> - это цепь
                    мукополисахарида, состоящая из пентасахаридной
                    последовательности и хвоста (хвост у НМГ гораздо короче, чем
                    хвост у НФГ). Молекулярная масса НМГ составляет 5000Да.
                  </p>
                </div>
                <ul className="fade-in dot_subtext">
                  <li className="fade-in dot_subtext_point mech">
                    НМГ связывается с антитромбином III и изменяет его
                    конформацию. Активный центр антитромбина III связывает Х-ый
                    активный фактор, что приводит к остановке внешнего пути
                    свертывания крови. Но НМГ не могут связывать тромбин, так
                    как цепь НМГ недостаточной длины (это является основным
                    отличием от НФГ).
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="puzzle__inform-click_buttons">
            <button
              className={`puzzle__next ${
                progress >= 100
                  ? "puzzle__next-active"
                  : "puzzle__next-inactive"
              }`}
              onClick={progress >= 100 ? handleContinue : undefined}
            >
              Ч2: (Непрямого действия)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnticoagulantsMechanismDirectActionVideo;
