import React from "react";
import "./Contactus.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import youtube from "../../assets/youtube.png";
import facebookImg from "../../assets/facebook.png";
import twitterImg from "../../assets/twitter.png";
function Contactus() {
  return (
    <div className="contactus mt-5">
      <div className="contactus__purple">
        <div className="container">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="contactus__title">Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 contactus__content">
              <div className="mt-5 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <IoMdMail />
                </span>
                <span className="flex-center">test@gmail.com</span>
              </div>
              <div className="mt-3 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <BsFillTelephoneFill />
                </span>
                <span className="flex-center">+02 010 12 1000</span>
              </div>
              <div className="mt-3 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <FaTelegramPlane />
                </span>
                <span className="flex-center">
                  C-333 Atlanta Shopping Mall, Nr. Sudama Chowk
                </span>
              </div>
              <div className="contactus__follow mt-4">
                <h3>Follow Us</h3>
                <div className="d-flex gap-3 mt-3">
                  <a href="https://www.google.com/" className="flex-center">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href="https://www.google.com/" className="flex-center">
                    <img src={facebookImg} alt="facebook" />
                  </a>
                  <a href="https://www.google.com/" className="flex-center">
                    <img src={twitterImg} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <form>
                <input
                  placeholder="Name"
                  type="text"
                  class="form-control mt-5 p-3"
                />
                <input
                  placeholder="Email"
                  type="email"
                  class="form-control mt-3 p-3"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  class="form-control mt-3 p-3"
                />
                <button type="submit" className="btn btn-custom mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
