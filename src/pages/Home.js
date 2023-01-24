import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Contactus from "../components/Contactus/Contactus";
import Products from "../components/Contactus/Products/Products";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Spinner from "../components/Spinner/Spinner";

const url_main = "http://q-tap-dashboard.technomasrsystems.com";

function Home({ lang, productsData, loadingProducts ,tokenQTap}) {
  const [loadingHero, setLoadingHero] = useState(true);
  const [loadingContact, setLoadingContact] = useState(true);

  const [heroData, setHeroData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [bannerData, setBannerData] = useState({});
  const [contactData, setContactData] = useState({});
  const [followUsData, setFollowUsData] = useState({});
  useEffect(() => {
    fetch(`${url_main}/api/mainpage`, {
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
        setLoadingHero(false);
        setHeroData(data.data.mainpage);
        setFeaturesData(data.data.features);
        setBannerData(data.data.banner);
      });
  }, [lang]);

  // To Fetch Contact Data In The Home Page
  useEffect(() => {
    fetch(`${url_main}/api/contactus`, {
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
        setLoadingContact(false);
        setContactData(data.data.contactus);
        setFollowUsData(data.data.followUs);
      });
  }, [lang]);

  return (
    <div className="home__page">
      {loadingHero ? (
        <Spinner />
      ) : (
        <>
          <Hero heroData={heroData} lang={lang} />
          <Features featuresData={featuresData} />
          <Products
            productsData={productsData}
            loadingProducts={loadingProducts}
            lang={lang}
            tokenQTap={tokenQTap}
          />
          <Banner bannerData={bannerData} lang={lang} />
          <Contactus
            contactData={contactData}
            loadingContact={loadingContact}
            followUsData={followUsData}
            lang={lang}
          />
        </>
      )}
    </div>
  );
}

export default Home;
