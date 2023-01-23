import { useContext } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";
import "./CardProduct.css";

function CardProduct({ item }) {
  const [count, setCount] = useState(item?.qty);
  const { changeProductQty, removeProductFromCart } = useContext(GlobalContext);
  return (
    <div className="cardProduct mb-5">
      <div className="cardProduct__container">
        <div className="cardProduct__image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="cardProduct__content ">
          <h4>{item.title}</h4>
          <div className="d-flex cardProduct__close">
            <span
              className="cardProduct__close__icon"
              onClick={() => removeProductFromCart(item.id)}
            >
              <AiOutlineClose />
            </span>
            <div className="d-flex">
              <span className="dollar">$</span>
              <span className="cardProduct__price">{item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
