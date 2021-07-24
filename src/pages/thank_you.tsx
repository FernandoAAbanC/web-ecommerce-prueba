import React, { useEffect } from "react";
import Head from "next/head";
import { IInitialState } from "~/interfaces/stateRedux";
import { useDispatch, connect } from "react-redux";
import { ICars } from "~/interfaces/cars";
import { emptyCart } from "~/redux/actions";
const ThankYou = (props: IInitialState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart());
  }, []);
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
      <h1 className="text-theme-base text-8xl">¡Gracias por tu compra!</h1>
    </div>
  );
};
const mapStateToProps = (state: IInitialState) => {
  return {
    cart: state.cart,
    currency: state.currency,
    cartcount: state.cartcount,
  };
};

export default connect(mapStateToProps)(ThankYou);
