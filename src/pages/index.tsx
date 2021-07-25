import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetAllProducts } from "~/api/endpoints/products";
import { ICars } from "~/interfaces/cars";
import Card from "~/components/cards";
import { connect } from "react-redux";

import { IInitialState } from "~/interfaces/stateRedux";

const Home = () => {
  const [products, setProducts] = useState<ICars[]>();

  useEffect(() => {
    GetAllProducts().then((product) => {
      setProducts(product);
    });
  }, [products === []]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ecommerce car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap items-center justify-center   w-3/4 mt-32">
        {products?.map((product, index) => {
          return <Card key={`card-${index}`} product={product} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IInitialState) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(Home);
