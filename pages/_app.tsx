import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "./mainLayout";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false); // Добавьте состояние для темы

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
      <Provider store={store}>
        <div className={isDarkMode ? 'dark-theme' : ''}> {/* Примените класс темы */}
          <button className="theme-toggle-button" onClick={toggleTheme}>
          Переключить тему
        </button>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </Provider>
  );
}

export default App;
