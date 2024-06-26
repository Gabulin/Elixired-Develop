import React from 'react';
import './Header.css';
import header_logo from "../../Media/logo_header.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
       <Link to="/">
        <div className="header_logo">
        <img src={header_logo} alt="Logo"></img>
        </div>
      </Link>
    </header>
  );
};

export default Header;