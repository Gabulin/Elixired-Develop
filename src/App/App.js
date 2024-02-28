import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import TheoryMain from '../TheoryMain/TheoryMain';
import './App.css';

const App = () => {
  return (
      <div className="app">
        {/* Use Routes as the top-level container */}
        <Routes>
          {/* Route for MainContent */}
          <Route path="/Elixired-Develop" element={<>
            <Header />
            <MainContent />
            <Footer />
          </>} />

          {/* Route for TheoryMain */}
          <Route path="/theory" element={<>
            <Header />
            <TheoryMain />
            <Footer />
          </>} />
        </Routes>
      </div>
  );
};

export default App;
