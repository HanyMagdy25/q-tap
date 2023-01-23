import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

function ProductCard({ item }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const { addProductToCart, removeProductFromCart, cart } =
    useContext(GlobalContext);
  let storedCart = cart.find((o) => o.id === item.id);
  const allStoredCart = storedCart ? true : false;
  return (
    <div className="productCard">
      <Link to={`/product/${item.id}`}>
        <div className="productCard__image">
          <img src={item.image} alt="product" />
        </div>
      </Link>

      <div>
        <h3 className="mt-3 productCard__title"> {truncate(item.title, 70)}</h3>
        <h3 className="productCard__price">LE {item.price}</h3>
        {allStoredCart ? (
          <button
            onClick={() => removeProductFromCart(item.id)}
            className="btn btn-custom btn-fw mt-3 z"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => addProductToCart(item)}
            className="btn btn-custom btn-fw mt-3 z"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
