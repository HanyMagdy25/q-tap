import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/about2.png";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineQrCode } from "react-icons/hi2";
import { FcNfcSign } from "react-icons/fc";

function About() {
  return (
    <div className="about">
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
              <img src={aboutImg} alt="about" className="about__image" />
            </div>
            <div className="col-10 col-md-8 d-flex align-items-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
        {/* About Bottom */}
        <div className="mt-5 mb-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-md-7 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat
              </p>
              <div className="about__feat">
                {/* Tap */}
                <div className="d-flex mt-5 gap-4">
                  <div className="flex-center">
                    <span className="flex-center">
                      <FcNfcSign />
                    </span>
                  </div>
                  <div>
                    <h3 className="fw-bold">Tap</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                {/* Scan */}
                <div className="d-flex mt-5 gap-4">
                  <div className="flex-center">
                    <span className="flex-center">
                      <HiOutlineQrCode />
                    </span>
                  </div>
                  <div>
                    <h3 className="fw-bold">Scan</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                {/* Send */}
                <div className="d-flex mt-5 gap-4">
                  <div className="flex-center">
                    <span className="flex-center">
                      <FaTelegramPlane />
                    </span>
                  </div>
                  <div>
                    <h3 className="fw-bold">Send</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 ">
              <img src={aboutImg2} alt="about" className="about__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
