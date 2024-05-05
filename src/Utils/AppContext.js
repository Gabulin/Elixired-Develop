import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <AppContext.Provider value={{ slideIndex, setSlideIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);