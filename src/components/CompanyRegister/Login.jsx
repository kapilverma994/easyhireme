import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-regiser1">
        <h5>
          <i className="fa fa-user" aria-hidden="true"></i> Already Registered ?
        </h5>
        <form method="post" action="https://merchant.easyhireme.com">
          <div className="form-group">
            <select name="" className="form-control" id="" required>
              <option value="">Choose Login As</option>
              <option value="">Hotel</option>
              <option value="">Property</option>
              <option value="">Hire Job Seeker</option>
              <option value="">Hire Maintaince</option>
            </select>
          </div>
          <div className="form-group">
            <label for="email">Enter Your Email Address</label>
            <input
              value=""
              type="email"
              className="form-control dlbld"
              required=""
            />
            <span className="err"></span>
          </div>
          <div className="form-group">
            <label for="pwd">Enter Your Password:</label>
            <input type="password" className="form-control dlbld" required="" />
            <span className="err"></span>
            <p>
              <a href="" data-toggle="modal" data-target="#myModal">
                Forgot Password ?
              </a>
            </p>
          </div>

          <div className="err"></div>

          <button
            type="submit"
            name="login"
            className="btn btn-warning font-weight-bold"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
