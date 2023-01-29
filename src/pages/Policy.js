import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";
const url_main = "https://q-tap-dashboard.technomasrsystems.com";
function Policy({lang}) {
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [termsData, setTermsData] = useState({});
  // *********** Fetch Terms ***********
  useEffect(() => {
    fetch(`${url_main}/api/termsConditions`, {
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
        setLoadingAbout(false);
        setTermsData(data.data[1]);
      });
  }, [lang]);
  return (
    <div className="terms">
    {loadingAbout ? (
      <Spinner />
    ) : (
      <div className="container">
        <h1>{termsData.title}</h1>
        {/* <h3>Welcome to Qtap!</h3> */}
        <div dangerouslySetInnerHTML={{ __html: termsData.content }} />
      </div>
    )}
  </div>
  );
}

export default Policy;
