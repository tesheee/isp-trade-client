import React from "react";

const ThemeWrapper = ({ children, isDarkMode }) => {
  return (
    <div className={isDarkMode ? "dark-theme" : ""}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
