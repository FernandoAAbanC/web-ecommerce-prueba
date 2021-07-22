import React from 'react';
import Head from 'next/head';
import '../styles/tailwind.css';
import Header from "~/components/header"


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#317EFB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Evaluacion de prueba xcaret" key="title" />
    
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default App
