import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "./mainLayout";
import ThemeWrapper from "./ThemeWrapper";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
      <Provider store={store}>
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
          <button className="theme-toggle-button" onClick={() => setIsDarkMode(!isDarkMode)}>
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
