import React, { useState } from "react";
import "./ContactUsForm.css";

const url_main = "http://q-tap-dashboard.technomasrsystems.com";
function ContactUsForm({ lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");
  const handleContact = (e) => {
    e.preventDefault();
    const blog = {
      name,
      email,
      phone,
      content: text,
    };
    fetch(`${url_main}/api/sendContactMessage`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        setDone(res.status);

        console.log("res", res);
        if (res.status === true) {
          setName("")
          setPhone("")
          setText("")
          setEmail("")
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="ContactUsForm ">
      <div className="contactUs__container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">
              {lang === "en" ? "Keep In Touch" : "ابقى على اتصال"}
            </h2>
          </div>
        </div>
        <form
          className="contactUs__form "
            onSubmit={handleContact}
        >
          <input
            type="text"
            placeholder={lang === "en" ? "Name" : "الأسم"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={lang === "en" ? "Email" : "البريد الالكترونى"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder={lang === "en" ? "Phone" : "رقم الهاتف"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder={lang === "en" ? "Message" : "رسالتك"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-custom">
            {lang === "en" ? "SUBMIT" : "إرسال"}
          </button>
          {done === "success" && (
            <p className="contact__done mt-2">
              {lang === "en" ? "Sent Successfully" : "تم الارسال بنجاح"}
            </p>
          )}
          {done === "failed" && (
            <p className="contact__done mt-2">
              {lang === "en" ? "Failed to send" : "لم يتم الارسال"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
