import React, { useState, useContext, useEffect } from "react";
import { ICars } from "~/interfaces/cars";
import { useDispatch, connect } from "react-redux";
import { addToCart } from "~/redux/actions";
import { IInitialState, Tcurrency } from "~/interfaces/stateRedux";
import { ToastContainer, toast } from "react-toastify";
import { formatoCurrency } from "~/utils/utils";
interface IProps {
  product: ICars;
  key: string;
  currency: Tcurrency;
}
const Card = (props: IProps) => {
  let dispatch = useDispatch();
  const [product, setProduct] = useState<ICars>();

  useEffect(() => {
    if (product?.models.length) {
      product.modeloSelect = product.models[0];
    }
  }, [product]);

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  return (
    <div className="wrapper m-2 w-72 bg-theme-base2 text-theme-base rounded-b-md shadow-lg overflow-hidden">
      <ToastContainer />
      <div>
        <img src="/img/car.webp" alt="car" />
      </div>
      <div className="p-3 space-y-3">
        <h3 className="text-gray-700 font-semibold text-md">{product?.name}</h3>
        <div className="flex justify-between">
          <p className="flex  text-sm  leading-sm">{product?.maker}</p>
          {product?.models.length ? (
            <select
              name=""
              id=""
              onChange={(e) => (product.modeloSelect = e.target.value)}
            >
              {product?.models?.map((item, index) => {
                return (
                  <option key={`model-${index}`} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          ) : null}
        </div>

        <p className="text-sm  leading-sm">{product?.car_type}</p>
        <p className="text-sm  leading-sm">
          {" "}
          $
          {product
            ? props.currency === "mx"
              ? formatoCurrency(product?.price_mxn)
              : formatoCurrency(product?.price_usd)
            : null}
        </p>
        <p className="text-sm leading-sm">
          {product
            ? props.currency === "mx"
              ? product?.description_es
              : product?.description_en
            : null}
        </p>
      </div>
      <button
        className="bg-theme-base w-full flex justify-center py-2 text-theme-base2 font-semibold transition duration-300 hover:bg-teal-500"
        onClick={() => {
          toast.success(
            `Se agrego : ${product.maker} Modelo :${product.name}`,
            {
              position: toast.POSITION.BOTTOM_RIGHT,
            }
          );
          dispatch(addToCart(product));
        }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-6 mr-1 text-white"
        >
          <path
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
        </svg>
        reservation
      </button>
    </div>
  );
};
const mapStateToProps = (state: IInitialState) => {
  return {
    currency: state.currency,
  };
};
export default connect(mapStateToProps)(Card);
