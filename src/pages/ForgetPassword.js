import React from "react";

function ForgetPassword() {
  return (
    <div className="ForgetPassword">
      <div className="container flex-center">
        <div className="forget__background col-12 col-md-8">
          <h2 className="text-center">Forgot Password</h2>
          <p className="text-center mt-4">Enter your email to reset your password.</p>
          <p className="text-center"> 
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </p>
          <div className="mb-3 col-12">
            <label htmlFor="exampleInputEmailforgot" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmailforgot"
              placeholder="Email"
            />
          </div>
          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-custom">Email Password Reset Link</button>
            <button className="btn btn-cancel-forget">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
