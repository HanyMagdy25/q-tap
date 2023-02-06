import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
const url_main = 'https://qtap-dashboard.qutap.co'
function Product({ lang, productsData,tokenQTap }) {
  const [count, setCount] = useState(1);

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [oneProduct, setOneProduct] = useState({});

  const param = useParams();

  useEffect(() => {
    fetch(`${url_main}/api/products/${parseInt(param.id)}/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadingProduct(false);
        setOneProduct(data.data);
      });
  }, [lang, param.id]);

  const [msg, setMsg] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    const blog = {
      product_id: oneProduct.id,
      price: oneProduct.price,
      quantity:count,
    };
    fetch(`${url_main}/api/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
        user: tokenQTap.user.id,
        Authorization: `Bearer ${tokenQTap.token}`,
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status === true) {
          setMsg(true);
        }
      });
  };

  return (
    <div className="product">
      {loadingProduct ? (
        <Spinner />
      ) : (
        <div className="container">
          {/* Product Top */}
          <div className="product__top row">
            <div className="product__top-image col-12 col-md-6 flex-center">
              <img src={oneProduct.image} alt={oneProduct.title} />
            </div>
            <div className="col-12 col-md-6">
              <h2>{oneProduct.title}</h2>
              <p className="mt-4">{oneProduct.content}</p>
              <h3>
                {lang === "en" ? "LE" : "جنيها"} {oneProduct.price}
              </h3>
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
                <button onClick={handleOrder} className="btn btn-custom btn-fw">
                  {lang === "en" ? "Add To Cart" : "أضف إلى السلة"}
                </button>
              </div>
            </div>
          </div>
          {/* Products Bottom */}
          <div className="product__bottom ">
            <h2 className="mb-5 mt-5">
              {lang === "en" ? "You Might Also like" : "قد يعجبك ايضا"}
            </h2>
            <div className="row mb-5 ">
              {productsData?.slice(0, 3).map((item, index) => (
                <Link key={index} to={`/product/${item.id}`} className="col-4">
                  <div>
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
      )}
    </div>
  );
}

export default Product;
