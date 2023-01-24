import { useContext } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./CardProduct.css";

function CardProduct({ item }) {
  const [count, setCount] = useState(item[0]?.qty);
  return (
    <div className="cardProduct mb-5">
      <div className="cardProduct__container">
        <div className="cardProduct__image">
          <img src={item[0].image} alt={item[0].title} />
        </div>
        <div className="cardProduct__content ">
          <h4>{item[0].product}</h4>
          <div className="d-flex cardProduct__close">
            <span
              className="cardProduct__close__icon"
              // onClick={() => removeProductFromCart(item[0].id)}
            >
              <AiOutlineClose />
            </span>
            <div className="d-flex">
              <span className="dollar">$</span>
              <span className="cardProduct__price">{item[0].price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
