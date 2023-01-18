import { AiOutlineClose } from "react-icons/ai";
import "./CardProduct.css";

function CardProduct({ item }) {
  return (
    <div className="cardProduct mb-5">
      <div className="cardProduct__container">
        <div className="cardProduct__image ">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="cardProduct__content ">
          <h4>{item.title}</h4>
          <div className="d-flex cardProduct__close">
            <span className="cardProduct__close__icon">
              <AiOutlineClose />
            </span>
            <div className="d-flex">
              <span className="dollar">$</span>
              <span className="cardProduct__price">49</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
