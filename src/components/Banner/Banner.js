import bannerImage from "../../assets/banner.jpg";

function Banner() {
  return (
    <section className="banner mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2>Menu</h2>
          </div>
        </div>
        <div className="banner__image ">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img src={bannerImage} alt="banner" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
