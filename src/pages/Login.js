import React, { useState } from "react";
import { Link } from "react-router-dom";
const url_main = 'https://qtap-dashboard.qutap.co'

function Login({ lang }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseFailed, setResponseFailed] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const blog = {
      password,
      email,
    };
    fetch(`${url_main}/api/user/login`, {
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
        console.log(res);
        if (res.status === true) {
          // setUserTokenQTap(res.user)

          localStorage.setItem("token-q-tap", JSON.stringify(res));
          window.location.href = "/";
        } else {
          setResponseFailed(true);
        }
      });
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="register__div col-11 col-md-8">
            <h2 className="register__div__title mb-5">
              {lang === "en"
                ? "Sign in to your account"
                : "تسجيل الدخول إلى حسابك"}
            </h2>
            <form onSubmit={handleLogin}>
              {responseFailed && (
                <div className="alert alert-danger text-center" role="alert">
                  {lang === "en"
                    ? "Email & Password does not match with our record."
                    : "البريد الإلكتروني وكلمة المرور لا يتطابقان مع سجلنا."}
                </div>
              )}

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
                <div className="mb-3 col-12">
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
              </div>

              <div className="d-flex justify-content-between remember">
                <div className="mb-3 form-check flex-center gap-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    //   onChange={(e) => setCheckBtn(!checkBtn)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    {lang === "en" ? "Remember me" : "تذكرنى"}
                  </label>
                </div>
                <Link to="/forget-password">
                  {lang === "en"
                    ? "Forget your password?"
                    : "نسيت كلمة المرور؟"}
                </Link>
              </div>

              <button type="submit" className="btn btn-custom btn-fw">
                {lang === "en" ? "Submit" : "ارسال"}
              </button>

              <div className="mt-3 already">
                <h6>
                  {lang === "en" ? (
                    <>
                      Don`t have an account?
                      <Link to="/register"> create your account</Link>
                    </>
                  ) : (
                    <>
                      ليس لديك حساب؟
                      <Link to="/register"> أنشئ حسابك</Link>
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

export default Login;
