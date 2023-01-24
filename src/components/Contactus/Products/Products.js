// import { ProductsCards } from "../../../utils/data";
import Spinner from "../../Spinner/Spinner";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products({ productsData, loadingProducts, lang,tokenQTap}) {
  return (
    <section className="products mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2>
              {lang === "en"
                ? "choose the right product for you"
                : "اختر المنتج المناسب لك"}
            </h2>
          </div>
        </div>
        {loadingProducts ? (
          <Spinner />
        ) : (
          <div className="products__cards-div d-flex flex-wrap ">
            {productsData.slice(0, 4).map((item, index) => (
              <ProductCard key={index} item={item} tokenQTap={tokenQTap} lang={lang}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
