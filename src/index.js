import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App/App';

import { BrowserRouter } from "react-router-dom";
import WebFont from 'webfontloader';

const FontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter', 'Chilanka']
      }
    });
  }, []);

  return null;
};


const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <FontLoader />
    <MainApp />
  </>,
);