import React, { useState } from 'react';

// Create a context with a default value of an empty object
export const DarkModeContext = React.createContext({});

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState("light");
  

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};