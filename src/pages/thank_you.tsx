import React from "react";
import Head from "next/head";
const ThankYou = () => {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen py-2 top-32 text-theme-base">
     
     <Head>
        <title>Gracias por tu compra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-28 w-28"
        fill="none"
        viewBox="0 0 28 28"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h1 className="text-theme-base text-8xl" >¡Gracias por tu compra!</h1>
    </div>
  );
};
export default ThankYou;
