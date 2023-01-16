import React from "react";
import ProductCard from "../components/Contactus/Products/ProductCard";
import Products from "../components/Contactus/Products/Products";
import { ProductsCards } from "../utils/data";

function Store() {
  return (
    <div className="Store mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2>Store</h2>
          </div>
        </div>

        <div className="products__cards-div d-flex flex-wrap mb-5">
          {ProductsCards.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
