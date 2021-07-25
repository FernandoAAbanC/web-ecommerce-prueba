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
            className="border-2 border-theme-base rounded "
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
          {`$ ${
            product
              ? props.currency === "mx"
                ? formatoCurrency(product?.price_mxn)
                : formatoCurrency(product?.price_usd)
              : null
          } ${props.currency}`}
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
        className="bg-theme-base w-full flex justify-center items-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
        onClick={() => {
          toast.success(
            `Se agrego : ${product.maker} ${product.name}`,
            {
              position: toast.POSITION.BOTTOM_RIGHT,
            }
          );
          dispatch(addToCart(product));
        }}
      >        
        Agregar al carrito
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
