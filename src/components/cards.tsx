import React from "react";
import { ICars } from "~/interfaces/cars";

interface IProps {
  product: ICars;
  key: string;
}
export const Card = (props: IProps) => {
  const { _id, name } = props.product;
  return (
    <div className="wrapper m-2 w-72 bg-theme-base2 text-theme-base rounded-b-md shadow-lg overflow-hidden">
      <div>
        <img
          src="/img/card.webp"
          alt="car"
        />
      </div>
      <div className="p-3 space-y-3">
        <h3 className="text-gray-700 font-semibold text-md">{name}</h3>
        <p className="text-sm text-gray-900 leading-sm">
          Bienvenido a la montaña de nepal un maravilloso lugar en el que podras
          escalar y repirar aire limpio, serás acompoañado por profesonales en
          alpinismo.
        </p>
      </div>
      <button className="bg-theme-base w-full flex justify-center py-2 text-theme-base2 font-semibold transition duration-300 hover:bg-teal-500">
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
