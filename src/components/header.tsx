import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { changeCurrency } from "~/redux/actions";
import { IInitialState } from "~/interfaces/stateRedux";
import { Tcurrency } from "~/interfaces/stateRedux";
import ShoppingCard from "~/components/shoppingCard";

const Header = (props) => {
  let dispatch = useDispatch();
  const [cartcount, setCartcount] = useState();

  useEffect(() => {
    setCartcount(props.cartcount);
  }, [props.cartcount]);

  return (
    <>
      <div className="flex justify-between fixed w-full h-20 bg-theme-base z-10">
        <div
          onClick={() => (location.href = "/")}
          className="flex cursor-pointer justify-center mt-auto mb-auto ml-3 items-center font-bold border-4 rounded border-white text-theme-base3 border-opacity-50 h-10 w-32"
        >
          Inicio
        </div>
        <div className="flex flex-row  h-20 w-50">
          <div className="flex border-4 justify-center items-center mr-1 h-10 w-30 border-opacity-50 rounded pl-2 pr-2 self-center">
            <label htmlFor="currency" className="text-theme-base2">
              {`Moneda : `}
            </label>
            <select
              id="currency"
              className="h-6 w-20 rounded ml-3"
              onChange={(e) => {
                let currency = e.target.value as Tcurrency;
                dispatch(changeCurrency(currency));
              }}
            >
              <option value="mx">Mx</option>
              <option value="us">Us</option>
            </select>
          </div>
          <div
            className="flex cursor-pointer relative h-20 w-20 "
            onClick={() => {
              let modal = document.getElementById("ShoppingCart");
              modal.style.display = "flex";
              modal.classList.remove("hidden");
              modal.classList.add("flex");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer h-20 w-20 text-white hover:bg-gray-100 hover:text-theme-base"
              fill="none"
              viewBox="-10 -10 50 50"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <label className="cursor-pointer flex w-4 h-4 justify-center items-center text-white text-xs font-bold fixed border-2 border-white right-6 top-3 bg-theme-base rounded-lg ">
              {cartcount}
            </label>
          </div>
        </div>
      </div>
      <ShoppingCard />
    </>
  );
};

const mapStateToProps = (state: IInitialState) => {
  return {
    currency: state.currency,
    cartcount: state.cartcount,
  };
};

export default connect(mapStateToProps)(Header);
