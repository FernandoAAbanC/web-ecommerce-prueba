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
      <div className="flex w-11/12 h-full flex-col mt-32 bg-theme-base2  min-h-screen py-2 top-32 text-theme-base">
        <h1 className="flex item-center m-4 self-center font-bold text-2xl ">
          1. Resumen de compra
        </h1>
        <div className="flex flex-row">
          <div className="w-3/5 max-h-96 h-full ">
            <div className="ml-5 pt-3 max-h-80 overflow-y-auto bg-theme-base3">
              {detailCart?.map((item, index) => {
                return (
                  <div
                    key={`detail-order${index}`}
                    className="relative flex flex-row mb-1 w-full h-32 shadow-md"
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
          <div className="relative w-2/5  flex justify-center   ">
            <div className="relative  flex-col  w-80 right-0 h-72 bg-theme-base3 ">
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
                      <span className="flex justify-left items-center font-semibold w-42 h-4 text-theme-base">{` $ ${
                        props.currency === "mx"
                          ? formatoCurrency(item.cantidad * item.price_mxn)
                          : formatoCurrency(item.cantidad * item.price_usd)
                      } ${props.currency}`}</span>
                    </div>
                    {item.name}
                  </div>
                );
              })}
              <div className="">
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
              <div className="">
                <button
                  className="absolute bottom-0 w-full h-10  bg-theme-base text-theme-base3"
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
