import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
const url_main = "http://q-tap-dashboard.technomasrsystems.com";

function About({ lang }) {
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    fetch(`${url_main}/api/aboutus`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoadingAbout(false);
        setAboutData(data.data.aboutus);
        // setFeaturesData(data.data.features);
        // setBannerData(data.data.banner);
      });
  }, [lang]);
  return (
    <div className="about">
      {loadingAbout ? (
        <Spinner />
      ) : (
        <div className="container">
          {/* About Top */}
          <div className="flex-center">
            <div className="main__title-div">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="mt-5 pb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-3 ">
                <img
                  src={aboutData.upperPart.image}
                  alt="about"
                  className="about__image"
                />
              </div>
              <div className="col-10 col-md-8 d-flex align-items-center">
                <p>{aboutData.upperPart.description}</p>
              </div>
            </div>
          </div>
          {/* About Bottom */}
          <div className="mt-5 mb-5 ">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-7 ">
                <p>{aboutData.upperPart.description}</p>
                <div className="about__feat">
                  {/* Tap */}
                  <div className="d-flex mt-5 gap-4">
                    <div className="flex-center">
                      <span className="flex-center">
                        <img
                          src={aboutData.features.box1.icon}
                          alt={aboutData.features.box1.title}
                        />
                      </span>
                    </div>
                    <div>
                      <h3 className="fw-bold">
                        {aboutData.features.box1.title}
                      </h3>
                      <p>{aboutData.features.box1.description}</p>
                    </div>
                  </div>
                  {/* Scan */}
                  <div className="d-flex mt-5 gap-4">
                    <div className="flex-center">
                      <span className="flex-center">
                        <img
                          src={aboutData.features.box2.icon}
                          alt={aboutData.features.box2.title}
                        />
                      </span>
                    </div>
                    <div>
                      <h3 className="fw-bold">
                        {aboutData.features.box2.title}
                      </h3>
                      <p>{aboutData.features.box2.description}</p>
                    </div>
                  </div>
                  {/* Send */}
                  <div className="d-flex mt-5 gap-4">
                    <div className="flex-center">
                      <span className="flex-center">
                        <img
                          src={aboutData.features.box3.icon}
                          alt={aboutData.features.box3.title}
                        />
                      </span>
                    </div>
                    <div>
                      <h3 className="fw-bold">{aboutData.features.box3.title}</h3>
                      <p>
                      {aboutData.features.box3.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-4 ">
                <img
                  src={aboutData.sidePart.image}
                  alt="about"
                  className="about__image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
