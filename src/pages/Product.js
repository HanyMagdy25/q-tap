import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsCards } from "../utils/data";

function Product() {
  const [count, setCount] = useState(0);
  const param = useParams();
  const oneProduct = ProductsCards.find((a) => a.id === parseInt(param.id));

  return (
    <div className="product">
      <div className="container">
        {/* Product Top */}
        <div className="product__top row">
          <div className="product__top-image col-12 col-md-6 flex-center">
            <img src={oneProduct.image} alt={oneProduct.title} />
          </div>
          <div className="col-12 col-md-6">
            <h2>{oneProduct.title}</h2>
            <p className="mt-4">{oneProduct.content}</p>
            <h3>LE {oneProduct.price}</h3>
            <p>Quantity</p>
            <div className="d-flex gap-3">
              <div className="div-btns-increase">
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="increase"
                >
                  +
                </button>
                <span className="increase">{count}</span>
                <button
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  disabled={count < 1}
                  className="increase"
                >
                  -
                </button>
              </div>
              <button className="btn btn-custom btn-fw">Add To Cart</button>
            </div>
          </div>
        </div>
        {/* Products Bottom */}
        <div className="product__bottom">
          <h2 className="mb-5 mt-5">You Might Also like</h2>
          <div className="row mb-5 ">
            {ProductsCards?.slice(0, 3).map((item, index) => (
              <Link key={index} to={`/product/${item.id}`} className="col-4">
                <div >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="imageCover "
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
