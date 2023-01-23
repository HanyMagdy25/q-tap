import React, { useState } from "react";
import CardProduct from "../components/CardProduct/CardProduct";
import emptyImage from "../assets/empty.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

function Cart() {
  const [products, setProducts] = useState([]);
  
  const [total, setTotal] = useState(null);
  const [cartLocal, setCartLocal] = useState([]);
  const { cart } = useContext(GlobalContext);
  useEffect(() => {
    setCartLocal(
      localStorage.getItem("q-tap-cart")
      ? JSON.parse(localStorage.getItem("q-tap-cart"))
      : []
      );
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);
      const [count, setCount] = useState(cartLocal?.qty);
  

  return (
    <>
      {!cart.length > 0 ? (
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
              {cartLocal.map((item, index) => (
                <CardProduct key={index} item={item} />
              ))}
            </div>
            <div className="flex-center">
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
