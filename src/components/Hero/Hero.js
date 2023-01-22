import "./Hero.css";
function Hero({ heroData, lang }) {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="row">
          <div className="hero__content col-12 col-md-6">
            <h1>Q TAP</h1>
            <h1>{heroData.title}</h1>
            <p>{heroData.description}</p>
            <button className="btn btn-custom">
              {lang === "en" ? "Get Started" : "البدء"}
            </button>
          </div>
          <div className="col-12 col-md-6">
            <img src={heroData.image} alt="logo" className="imageContain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
