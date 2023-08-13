import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "./mainLayout";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default App;
