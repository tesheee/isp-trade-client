import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "./mainLayout";
import { Provider } from "react-redux";
import React, { useState } from "react";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
      const storedTheme = window.localStorage.getItem('currentTheme');
      setIsDarkMode(storedTheme === 'true');
  }, []);

  function OnIsDarkMode() {
      const newMode = !isDarkMode;
      window.localStorage.setItem('currentTheme', newMode.toString()); // Convert boolean to string
      setIsDarkMode(newMode);
  }

  return (
    <Provider store={store}>
      <div className={isDarkMode ? "dark-theme" : "light-theme"}>
        <MainLayout isDarkMode={isDarkMode} setIsDarkMode={OnIsDarkMode}>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </Provider>
  );
}

export default App;

