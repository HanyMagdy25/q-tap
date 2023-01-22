import React from "react";
import ProductCard from "../components/Contactus/Products/ProductCard";
import Spinner from "../components/Spinner/Spinner";

function Store({ productsData, loadingProducts, lang }) {
  return (
    <div className="Store mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2> {lang === "en" ? "Store" : "خدماتنا"}</h2>
          </div>
        </div>
        {loadingProducts ? (
          <Spinner />
        ) : (
          <div className="products__cards-div d-flex flex-wrap mb-5">
            {productsData.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
