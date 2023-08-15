import React from "react";
import "../styles/globals.scss";

const ThemeWrapper = ({ children, isDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
