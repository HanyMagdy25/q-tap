import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
const url_main = "http://q-tap-dashboard.technomasrsystems.com";
function Register({ lang }) {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [job_title, setJob_title] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  // console.log("country",country);

  const handleContact = (e) => {
    e.preventDefault();
    const blog = {
      name,
      last_name,
      phone,
      job_title,
      password,
      confirm_password,
      email,
      country,
      city: region,
    };
    fetch(`${url_main}/api/user/register`, {
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
        console.log("res", res);
        if (res.status === true) {
          // setUserTokenQTap(res.user)
          localStorage.setItem("token-q-tap", JSON.stringify(res));
          localStorage.setItem("token", JSON.stringify(res.token));
          window.location.href = "/";
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="register__div col-11 col-md-8">
            <h2 className="register__div__title mb-5">
            {lang === "en" ? "Create an Account" : "انشئ حساب"}
            </h2>
            <form onSubmit={handleContact}>
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputFirstName" className="form-label">
                    {lang === "en" ? "First Name" : "الاسم الاول"}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFirstName"
                    placeholder={lang === "en" ? "First Name" : "الاسم الاول"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputSecond" className="form-label">
                    {lang === "en" ? "Last Name" : "الاسم الأخير"}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSecond"
                    placeholder={lang === "en" ? "Last Name" : "الاسم الأخير"}
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  {lang === "en" ? "Email" : "البريد الالكترونى"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={lang === "en" ? "Email" : "البريد الالكترونى"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Passwords */}
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    {lang === "en" ? "Password" : "كلمة السر"}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder={lang === "en" ? "Password" : "كلمة السر"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label
                    htmlFor="exampleInputConfirmPassword"
                    className="form-label"
                  >
                    {lang === "en" ? "Confirm Password" : "تأكيد كلمة السر"}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputConfirmPassword"
                    placeholder={
                      lang === "en" ? "Confirm Password" : "تأكيد كلمة السر"
                    }
                    value={confirm_password}
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputPhone" className="form-label">
                    {lang === "en" ? "Phone" : "رقم الهاتف"}
                  </label>
                  <PhoneInput
                    placeholder={
                      lang === "en" ? "Enter phone number" : "ادخل رقم الهاتف"
                    }
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
              </div>
              {/* Job Title */}
              <div className="mb-3 col-12">
                <label htmlFor="exampleInputJob" className="form-label">
                  {lang === "en" ? "Job Title" : "عنوان الوظيفة"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputJob"
                  placeholder={lang === "en" ? "Job Title" : "عنوان الوظيفة"}
                  value={job_title}
                  onChange={(e) => setJob_title(e.target.value)}
                />
              </div>

              {/* Country */}
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    {lang === "en" ? "Country" : "البلد"}
                  </label>
                  <CountryDropdown
                    value={country}
                    onChange={(e) => setCountry(e)}
                    className="select-country"
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputcity" className="form-label">
                    {lang === "en" ? "city" : "المدينة"}
                  </label>
                  <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(e) => setRegion(e)}
                    className="select-country"
                  />
                </div>
              </div>

              <div className="mb-3 form-check flex-center gap-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(e) => setCheckBtn(!checkBtn)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  {lang === "en" ? (
                    <>
                      By signing up you agree to our
                      <Link to="/terms"> Terms & Conditions</Link> &{" "}
                      <Link to="/policy">Privacy Policy</Link>.
                    </>
                  ) : (
                    <>
                      {" "}
                      بالتسجيل فإنك توافق على
                      <Link to="/terms"> الشروط والأحكام</Link> و{" "}
                      <Link to="/policy">سياسة الخصوصية</Link> الخاصة بنا.
                    </>
                  )}
                </label>
              </div>
              <button
                type="submit"
                disabled={checkBtn}
                className="btn btn-custom btn-fw"
              >
                {lang === "en" ? "Submit" : "ارسال"}
              </button>

              <div className="mt-3 already">
                <h6>
                
                  {lang === "en" ? (
                    <>
                        Already have an account? <Link to="/login">Sign in here</Link>
                    </>
                  ) : (
                    <>
                        هل لديك حساب؟ <Link to="/login">تسجيل الدخول هنا</Link>
                    </>
                  )}
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
