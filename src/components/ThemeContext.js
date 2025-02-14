import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: { backgroundColor: '#f5f5f5', color: '#363636', name: 'Light' },
  dark: { backgroundColor: '#363636', color: '#f5f5f5', name: 'Dark' },
  blue: { backgroundColor: '#209cee', color: '#fff', name: 'Blue' },
  green: { backgroundColor: '#23d160', color: '#fff', name: 'Green' }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    theme: themes[currentTheme],
    currentTheme,
    changeTheme,
    availableThemes: Object.keys(themes)
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};