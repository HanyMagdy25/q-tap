import { ProductsCards } from "../../../utils/data";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  return (
    <section className="products mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2>choose the right product for you</h2>
          </div>
        </div>
        <div className="products__cards-div d-flex flex-wrap ">
          {ProductsCards.slice(0,4).map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
