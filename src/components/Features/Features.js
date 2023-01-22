import React from "react";
import { featuresCardsData } from "../../utils/data";
import "./Features.css";
import FeaturesCards from "./FeaturesCards";
function Features({ featuresData }) {
  return (
    <div className="features mt-5">
      <div className="container">
        {/* Features Top */}
        <div className="features__top">
          <div className="flex-center">
            <div className="main__title-div">
              <h2>{featuresData.title}</h2>
            </div>
          </div>
          <p className="features__paragraph text-center  px-5 py-3">
            {featuresData.description}
          </p>

          <div className="features__cards-div d-flex flex-wrap">
            {featuresData?.boxes?.map((item, index) => (
              <FeaturesCards item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
