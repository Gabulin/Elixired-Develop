import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import TheoryMain from '../TheoryMain/TheoryMain';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Use Routes as the top-level container */}
        <Routes>
          {/* Route for MainContent */}
          <Route path="/main" element={<>
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
    </Router>
  );
};

export default App;
