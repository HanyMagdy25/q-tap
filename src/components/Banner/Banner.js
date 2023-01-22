function Banner({bannerData}) {
  return (
    <section className="banner mt-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2>Menu</h2>
          </div>
        </div>
        <div className="banner__image ">
          <a href={bannerData.url} target="_blank" rel="noreferrer">
            <img src={bannerData.image} alt="banner" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
