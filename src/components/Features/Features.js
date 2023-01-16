import React from "react";
import { featuresCardsData } from "../../utils/data";
import "./Features.css";
import FeaturesCards from "./FeaturesCards";
function Features() {
  return (
    <div className="features mt-5">
      <div className="container">
        {/* Features Top */}
        <div className="features__top">
          <div className="flex-center">
            <div className="main__title-div">
              <h2>Make Smart Business Card</h2>
            </div>
          </div>
          <p className="features__paragraph  px-5 py-3">
            Make Your Own Smart business Card with us and grow your business
            easily. Create your business digital card with lots of information
          </p>

          <div className="features__cards-div d-flex flex-wrap">
            {featuresCardsData.map((item, index) => (
              <FeaturesCards item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
