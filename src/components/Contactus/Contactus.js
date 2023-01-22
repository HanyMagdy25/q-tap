import "./Contactus.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import youtube from "../../assets/youtube.png";
import facebookImg from "../../assets/facebook.png";
import twitterImg from "../../assets/twitter.png";
function Contactus({ loadingContact, contactData, followUsData, lang }) {
  return (
    <div className="contactus mt-5">
      <div className="contactus__purple">
        <div className="container">
          <div className="flex-center">
            <div className="main__title-div">
              <h2 className="contactus__title">
                {lang === "en" ? "Contact Us" : "تواصل معنا"}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 contactus__content">
              <div className="mt-5 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <IoMdMail />
                </span>
                <span className="flex-center">{contactData.email}</span>
              </div>
              <div className="mt-3 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <BsFillTelephoneFill />
                </span>
                <span className="flex-center">{contactData.phone}</span>
              </div>
              <div className="mt-3 d-flex gap-2">
                <span className="icon-bg flex-center">
                  <FaTelegramPlane />
                </span>
                <span className="flex-center">{contactData.address}</span>
              </div>
              <div className="contactus__follow mt-4">
                <h3>{lang === "en" ? "Follow Us" : "تابعنا"}</h3>
                <div className="d-flex gap-3 mt-3">
                  <a
                    href={followUsData.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-center"
                  >
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a
                    href={followUsData.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-center"
                  >
                    <img src={facebookImg} alt="facebook" />
                  </a>
                  <a
                    href={followUsData.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-center"
                  >
                    <img src={twitterImg} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <form>
                <input
                  placeholder={lang === "en" ? "Name" : "اسمك"}
                  type="text"
                  className="form-control mt-5 p-3"
                />
                <input
                  placeholder={lang === "en" ? "Email" : "البريد الالكترونى"}
                  type="email"
                  className="form-control mt-3 p-3"
                />
                <textarea
                  placeholder={lang === "en" ? "Message" : "رسالتك"}
                  rows={4}
                  className="form-control mt-3 p-3"
                />
                <button type="submit" className="btn btn-custom mt-3">
                  {lang === "en" ? "Submit" : "ارسال"}
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
