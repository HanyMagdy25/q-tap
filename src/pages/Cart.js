import React, { useState } from "react";
import CardProduct from "../components/CardProduct/CardProduct";
import emptyImage from "../assets/empty.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const url_main = "https://q-tap-dashboard.technomasrsystems.com";

function Cart({ lang, tokenQTap }) {
  const [total, setTotal] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  useEffect(() => {
    fetch(`${url_main}/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
        user: tokenQTap.user.id,
        Authorization: `Bearer ${tokenQTap.token}`,
        // withCredentials: true,
        // crossorigin: true,
        // mode: "no-cors",
        // 'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setLoadingProducts(false);
        setCartProducts(data.data);
      });
  }, [lang, tokenQTap.token, tokenQTap.user.id]);

  return (
    <>
      {!cartProducts.length > 0 ? (
        <div className="cart">
          <div className="container flex-center">
            <div className="col-12 col-md-6">
              <img src={emptyImage} alt="empty" className="cart__empty" />
              <h2 className="text-center">
                Your Cart Is Empty Please Add Product
              </h2>
              <div className="text-center mt-5">
                <Link to="/store">
                  <button className="btn btn-custom text-center">
                    Add Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart">
          <div className="container">
            <h1 className="cart__title text-center">Checkout</h1>
            <div className="cart__cards mt-5">
              {cartProducts.map((item, index) => (
                <CardProduct key={index} item={item} />
              ))}
            </div>
            <div className="flex-center mb-5">
              <div className="cart__checkout col-12 col-md-4 text-center">
                <h2>Your Cart Total</h2>
                <h1>US$ {total}</h1>
                <button className="btn btn-custom btn-fw">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
