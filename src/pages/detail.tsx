import React, { useEffect, useState } from "react";
import { IInitialState } from "~/interfaces/stateRedux";
import { useDispatch, connect } from "react-redux";
import { ICars } from "~/interfaces/cars";
import { removeFromCart, emptyCart } from "~/redux/actions";

const Detail = (props: IInitialState) => {
  const [detailCart, setDetailCart] = useState<ICars[]>();

  useEffect(() => {
    setDetailCart(props.cart);
  }, [props.cart]);
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex w-11/12 h-full flex-row  justify-center items-center min-h-screen py-2 top-32 text-theme-base">
        <div className="w-3/5 h-full ">
          <h1>1. Resumen de compra</h1>
          <div className="max-h-80 overflow-y-auto">
            {detailCart?.map((item, index) => {
              return (
                <div
                  key={`detail-order${index}`}
                  className="flex flex-row ml-4 mb-2 w-11/12 h-32 shadow-md"
                >
                  <div>
                    <img
                      className="w-32 h-32 rounded-l"
                      src="/img/car_detail.webp"
                      alt="car"
                    ></img>
                  </div>
                  <div className="flex ">
                    {item.name}
                    <button className="w-72 h-10  bg-theme-base text-theme-base3">Eliminar</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-2/5 h-full flex justify-center items-center   ">
          <div className=" flex-col  items-center top-20 w-80 right-0 h-72 bg-theme-base3 ">
            {detailCart?.map((item, index) => {
              return (
                <div
                  className=" shadow-2xl h-10 flex justify-between items-center m-1"
                  key={`payment-${index}`}
                >
                  <div className="flex justify-end flex-row">
                    <span className="flex justify-center items-center font-semibold bg-red-700 text-theme-base2 w-4 h-4">
                      {item?.cantidad}
                    </span>
                    <span className="flex justify-left items-center font-semibold w-36 h-4 bg-theme-base text-theme-base2">{`$ : ${
                      props.currency === "mx"
                        ? item?.cantidad * item.price_mxn
                        : item.cantidad * item.price_usd
                    } ${props.currency}`}</span>
                  </div>
                  {item.name}
                </div>
              );
            })}
            <div className="" >{`Total : ${detailCart?.reduce((sum, item) => {
          return (
            sum +
            (props.currency === "mx"
              ? item.price_mxn * item.cantidad
              : item.price_usd * item.cantidad)
          );
        }, 0)}`}</div>
            <div className="" >
                <button className="w-full h-10  bg-theme-base text-theme-base3">Pagar</button>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(Detail);
