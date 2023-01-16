import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="productCard">
      <Link to={`/product/${item.id}`}>
        <div className="productCard__image">
          <img src={item.image} alt="product" />
        </div>
      </Link>

      <div>
        <h3 className="mt-3"> {truncate(item.title, 70)}</h3>
        <h3>LE {item.price}</h3>
        <button className="btn btn-custom btn-fw mt-3 z">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
