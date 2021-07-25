import React from "react";
import Head from "next/head";
import "../styles/tailwind.css";
import Header from "~/components/header";

import { Provider } from "react-redux";
import store from "~/redux/store";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#317EFB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Evaluacion de prueba xcaret"
          key="title"
        />
      </Head>

      <Provider store={store}>
        <Header />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
