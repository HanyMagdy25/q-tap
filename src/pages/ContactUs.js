import React from "react";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";

function ContactUs({lang}) {
  return (
    <div className="ContactUs">
      <div className="container">
        <ContactUsForm lang={lang}/>
      </div>
    </div>
  );
}

export default ContactUs;
