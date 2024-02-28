import React from 'react';
import './Header.css';
import header_logo from "../Media/logo_header.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={header_logo}></img>
      </div>
      {/* Дополнительная навигация или элементы, если необходимо */}
    </header>
  );
};

export default Header;