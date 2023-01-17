import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="register">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="register__div col-11 col-md-8">
            <h2 className="register__div__title mb-5">Sign in to your account</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              {/* Passwords */}
              <div className="row">
                <div className="mb-3 col-12">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between remember">
                <div className="mb-3 form-check flex-center gap-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    //   onChange={(e) => setCheckBtn(!checkBtn)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <Link to="/">Forget your password?</Link>
              </div>

              <button type="submit" className="btn btn-custom btn-fw">
                Submit
              </button>

              <div className="mt-3 already">
                <h6>
                  Don`t have an account?
                  <Link to="/register"> create your account</Link>
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
