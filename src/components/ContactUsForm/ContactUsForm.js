import React, { useState } from "react";
import "./ContactUsForm.css";

// const url_main =
//   "https://el-shrouk-hospital-dashboard.technomasrsystems.com/api";
function ContactUsForm({ language="en" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");
//   const handleContact = (e) => {
//     e.preventDefault();
//     const blog = { name, phone, content: text, email };
//     fetch(`${url_main}/sendContactMessage`, {
//       method: "POST",
//       // credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         lang: "en",
//       },
//       body: JSON.stringify(blog),
//     })
//       .then((data) => data.json())
//       .then((res) => {
//         setDone(res.status);

//         if (res.status === "success") {
//           setName("");
//           setText("");
//           setPhone("");
//           setEmail("");
//         }
//       });
//   };
  return (
    <div className="ContactUsForm ">
      <div className="contactUs__container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="main__title">
              {language === "en" ? "Keep In Touch" : "ابقى على اتصال"}
            </h2>
          </div>
        </div>
        <form
          className="contactUs__form "
        //   onSubmit={handleContact}
        >
          <input
            type="text"
            placeholder={language === "en" ? "Name" : "الأسم"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={language === "en" ? "Email" : "البريد الالكترونى"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder={language === "en" ? "Phone" : "رقم الهاتف"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder={language === "en" ? "Message" : "رسالتك"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-custom">
            SUBMIT
          </button>
          {done === "success" && (
            <p className="contact__done mt-2">
              {language === "en" ? "Sent Successfully" : "تم الارسال بنجاح"}
            </p>
          )}
          {done === "faild" && (
            <p className="contact__done mt-2">
              {language === "en" ? "Failed to send" : "لم يتم الارسال"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
