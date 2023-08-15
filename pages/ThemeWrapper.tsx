import React from "react";

const ThemeWrapper = ({ children, isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
