import React, { useEffect, useState } from "react";
import { IInitialState } from "~/interfaces/stateRedux";
import { useDispatch, connect } from "react-redux";
import { ICars } from "~/interfaces/cars";
import {
  removeFromCart,
  addToCart,
  minusToCart,
  emptyCart,
} from "~/redux/actions";
import { formatoCurrency } from "~/utils/utils";

const Detail = (props: IInitialState) => {
  const dispatch = useDispatch();
  const [detailCart, setDetailCart] = useState<ICars[]>();

  useEffect(() => {
    setDetailCart(props.cart);
  }, [props.cart]);
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex p-4 w-11/12 h-full flex-col mt-32 bg-white min-h-screen py-2 top-32 text-theme-base">
        <h1 className="flex item-center m-4 self-center font-bold text-2xl ">
          1. Resumen de compra
        </h1>
        <div className="flex w-full flex-col-reverse md:flex-col-reverse lg:flex-row">
          <div className="w-full  h-full  lg:w-3/5">
            <div className="border-2 p-3 m-3 lg:p-5 lg:pt-3">
              {detailCart?.map((item, index) => {
                return (
                  <div
                    className="flex flex-row bg-theme-base3 mb-5 w-full h-32 shadow-md"
                    key={`detail-order${index}`}
                  >
                    <div className="w-32 h-32 rounded-l">
                      <img
                        className="w-32 h-32 rounded-l"
                        src="/img/car_detail.webp"
                        alt="car"
                      ></img>
                    </div>
                    <div className="w-10/12 relative flex flex-col">
                      <span className="flex flex-col">{item.name}</span>
                      <span className="flex flex-col">{`Marca : ${item.maker}`}</span>
                      {item?.models.length ? (
                        <span className="flex flex-col">{`Modelo Seleccionado : ${item.modeloSelect} `}</span>
                      ) : null}

                      <div className="absolute w-full justify-between bottom-0 flex flex-row">
                        <button
                          className="w-3/6 h-10  bg-theme-base text-theme-base3"
                          onClick={() => dispatch(removeFromCart(item._id))}
                        >
                          Eliminar
                        </button>
                        <div className="ml-4 flex flex-row  right-0  ">
                          <button
                            className=" w-12   h-10  bg-theme-base text-theme-base3"
                            onClick={() => dispatch(minusToCart(item))}
                          >
                            -
                          </button>
                          <div className="flex justify-center items-center w-20 h-10 bg-theme-base2">
                            {item.cantidad}
                          </div>
                          <button
                            className=" w-12  h-10  bg-theme-base text-theme-base3"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-2/5 ">
            <div className="flex w-full p-3 border-2 m-3  flex-col h-72 lg:p-5 lg:pt-3">
              {detailCart?.map((item, index) => {
                return (
                  <div
                    className="flex shadow-2xl h-10 justify-between items-center mb-1 p-2 bg-theme-base3"
                    key={`payment-${index}`}
                  >
                    <div className="flex justify-end flex-row">
                      <span className="flex justify-center items-center font-semibold bg-red-700 text-theme-base2 w-4 h-4">
                        {item?.cantidad}
                      </span>
                      <span className="flex justify-left items-center font-semibold w-42 h-4 text-theme-base">{` $ ${
                        item
                          ? props.currency === "mx"
                            ? formatoCurrency(item.cantidad * item.price_mxn)
                            : formatoCurrency(item.cantidad * item.price_usd)
                          : null
                      } ${props.currency}`}</span>
                    </div>
                    {item.name}
                  </div>
                );
              })}
              <div className=" p-3">
                {detailCart
                  ? `Total : ${formatoCurrency(
                      detailCart.reduce((sum, item) => {
                        return (
                          sum +
                          (props.currency === "mx"
                            ? item.price_mxn * item.cantidad
                            : item.price_usd * item.cantidad)
                        );
                      }, 0)
                    )}`
                  : null}
              </div>
              <div className=" w-full h-10">
                <button
                  className=" w-full h-10  bg-theme-base text-theme-base3"
                  onClick={() => (location.href = "/thank_you")}
                >
                  Pagar
                </button>
              </div>
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
