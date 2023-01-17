import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
function Register() {
  const [value, setValue] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  console.log(region);
  return (
    <div className="register">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="register__div col-11 col-md-8">
            <h2 className="register__div__title mb-5">Create an Account</h2>
            <form>
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputSecond" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSecond"
                    placeholder="Last Name"
                  />
                </div>
              </div>

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
                <div className="mb-3 col-12 col-md-6">
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
                <div className="mb-3 col-12 col-md-6">
                  <label
                    htmlFor="exampleInputConfirmPassword"
                    className="form-label"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputConfirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputPhone" className="form-label">
                    Phone
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
              {/* Job Title */}
              <div className="mb-3 col-12">
                <label htmlFor="exampleInputJob" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputJob"
                  placeholder="Job Title"
                />
              </div>

              {/* Country */}
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Country
                  </label>
                  <CountryDropdown
                    value={country}
                    onChange={(e) => setCountry(e)}
                    className="select-country"
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="exampleInputcity" className="form-label">
                    city
                  </label>
                  <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(e) => setRegion(e)}
                    className="select-country"
                  />
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
