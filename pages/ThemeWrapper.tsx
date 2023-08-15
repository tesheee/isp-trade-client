import React from "react";
import "../styles/globals.scss";

const ThemeWrapper = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
