import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "./mainLayout";
import ThemeWrapper from "./ThemeWrapper";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
      <Provider store={store}>
        <ThemeWrapper isDarkMode={isDarkMode}>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            Переключить тему
          </button>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeWrapper>
      </Provider>
  );
}

export default App;
