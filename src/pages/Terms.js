import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
const url_main = "http://q-tap-dashboard.technomasrsystems.com";

function Terms({ lang }) {
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [termsData, setTermsData] = useState({});
  // *********** NOT COMPLETED ***********
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
        console.log(data);
        setLoadingAbout(false);
        setTermsData(data.data);
      });
  }, [lang]);
  return (
    <div className="terms">
      {loadingAbout ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1>Terms and Conditions</h1>
          <h3>Welcome to Qtap!</h3>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of 401XD Group's Website, located at mycoding.id. By accessing
            this website we assume you accept these terms and conditions. Do not
            continue to use infyom if you do not agree to take all of the terms
            and conditions stated on this page. The following terminology
            applies to these Terms and Conditions, Privacy Statement and
            Disclaimer Notice and all Agreements: "Client", "You" and "Your"
            refers to you, the person log on this website and compliant to the
            Companys terms and conditions. "The Company", "Ourselves", "We",
            "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
            refers to both the Client and ourselves. All terms refer to the
            offer, acceptance and consideration of payment necessary to
            undertake the process of our assistance to the Client in the most
            appropriate manner for the express purpose of meeting the Client’s
            needs in respect of provision of the Company’s stated services,
          </p>
        </div>
      )}
    </div>
  );
}

export default Terms;
