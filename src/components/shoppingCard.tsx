import React, { useEffect, useState } from "react";
import { IInitialState } from "~/interfaces/stateRedux";
import { useDispatch, connect } from "react-redux";
import { ICars } from "~/interfaces/cars";
import { removeFromCart, emptyCart } from "~/redux/actions";

const ShoppingCard = (props: IInitialState) => {
  let dispatch = useDispatch();
  const [shoppingCart, setShoppingCart] = useState<ICars[]>();
  useEffect(() => {
    setShoppingCart(props.cart);
  }, [props]);
  const { cart } = props;

  return (
    <div
      id="ShoppingCart"
      className="hidden fixed flex-col  items-center top-20 w-80 right-0 h-72 bg-theme-base3 "
    >
      <div
        className="flex justify-center items-center font-bold bg-theme-base border-2 border-theme-base3 text-theme-base3 w-full h-8"
        onClick={() => {
          let modal = document.getElementById("ShoppingCart");
          modal.style.display = "none";
          modal.classList.remove("flex");
          modal.classList.add("hidden");
        }}
      >
        Cerrar
      </div>
      <div className="overflow-y-auto h-52 ">
        {shoppingCart?.map((item, index) => {
          return (
            <div
              className="flex w-72 text-sm flex-row mb-1 text-theme-base shadow-2xl rounded"
              key={`shoppincart-${index}`}
            >
              <div className="w-20 h-20 rounded-l">
                <img
                  className="w-20 h-20 rounded-l"
                  src="/img/car_mini.webp"
                  alt="car"
                ></img>
              </div>
              <div className="flex space-y-11 h-20 w-52 flex-col">
                <div className="flex w-full justify-between">
                  <span className="w-20">{item?.name}</span>
                  <span className="w-20">{item?.modeloSelect}</span>
                </div>

                <div className="flex justify-end flex-row">
                  <span className="flex justify-center items-center font-semibold w-24 h-4 bg-theme-base text-theme-base2">{`$ : ${
                    props.currency === "mx"
                      ? item?.cantidad * item.price_mxn
                      : item.cantidad * item.price_usd
                  }`}</span>
                  <span className="flex justify-center items-center font-semibold bg-red-700 text-theme-base2 w-4 h-4">
                    {item?.cantidad}
                  </span>
                </div>
              </div>
              <div
                className="flex rounded-tr justify-center items-center stick w-4 h-4 bg-theme-base text-theme-base2"
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                {" "}
                x
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        {`Total : ${shoppingCart?.reduce((sum, item) => {
          return (
            sum +
            (props.currency === "mx"
              ? item.price_mxn * item.cantidad
              : item.price_usd * item.cantidad)
          );
        }, 0)}`}
      </div>
      <div className="">
        <button
          className="bg-theme-base2 text-theme-base w-32 h-8 m-2"
          onClick={() => {
            dispatch(emptyCart());
          }}
        >
          vaciar
        </button>
        <button
        onClick={() => (location.href = "/detail")} 
        className="bg-theme-base text-theme-base2 w-32 h-8 m-2">
          comprar
        </button>
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

export default connect(mapStateToProps)(ShoppingCard);
