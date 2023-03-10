import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const url_main = 'https://qtap-dashboard.qutap.co'

function ProductCard({ item, lang, tokenQTap }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [msg, setMsg] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    const blog = {
      product_id: item.id,
      price: item.price,
      quantity,
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
          // setMsg(true);
          setTimeout(() => {
            setMsg(false);
          }, 4000);
          setTimeout(() => {
            setMsg(true);
          }, 500);
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="productCard">
      <Link to={`/product/${item.id}`}>
        <div className="productCard__image">
          <img src={item.image} alt="product" />
        </div>
      </Link>

      <div>
        <h3 className="mt-3 productCard__title"> {truncate(item.title, 70)}</h3>
        <h3 className="productCard__price">
          {lang === "en" ? `LE ${item.price}` : `${item.price} جنيها `}
        </h3>
        {msg && (
          <div class="alert alert-primary mb-0 p-2" role="alert">
            {lang === "en"
              ? "The Item Added To Your Cart!"
              : "تمت إضافة العنصر إلى عربة التسوق  !"}
          </div>
        )}
        {tokenQTap ? (
          <button
            onClick={handleOrder}
            className="btn btn-custom btn-fw mt-3 z"
          >
            {lang === "en" ? `Add To Cart` : `أضف إلى السلة`}
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn btn-custom btn-fw mt-3 z"
          >
            {lang === "en" ? `Add To Cart` : `أضف إلى السلة`}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
