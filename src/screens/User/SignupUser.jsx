import React, { useState } from "react";
import axios from "axios";
import Config from "../../Config";
import { decryptData } from "../../libs/storage";
const SignupUser = () => {
  const [user, setuser] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    countryId: "",
    stateId: "",
    cityId: "",
    phone: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: [value] });
  };

  const RegisterSubmit = (e) => {
    e.preventDefault();
    const { name, lname, email, password, countryId, stateId, cityId, phone } =
      user;
    const headers = {
      "x-api-key": Config().apiKey,
      deviceToken: decryptData(
        localStorage.getItem("deviceToken"),
        Config().apiKey
      ),
    };
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("countryId", 1);
    formData.append("stateId", 2);
    formData.append("cityId", 3);
    formData.append("phone", phone);

    axios
      .post(
        "https://api2.121directory.com/api/v1/auth/register",
        formData,
        headers
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <form method="post" id="userregister">
        <div className="row mt-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="first name"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="last name"
                name="lname"
                value={user.lname}
                onChange={handleInputs}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <label>Password</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i className="fa fa-key"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                className="form-control"
                name="countryId"
                value={user.countryId}
                onChange={handleInputs}
              >
                <option value="1">Yemen</option>
                <option value="1">Yugoslavia</option>
                <option value="1">Zambia</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <label>State</label>
            <select
              className="form-control"
              name="stateId"
              value={user.stateId}
              onChange={handleInputs}
            >
              <option selected value>
                Select State
              </option>

              <option value="2">Vaishali</option>
              <option value="2">West Bengal</option>
              <option value="2">WESTBENGAL</option>
            </select>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <label>City</label>
            <select
              className="form-control"
              name="cityId"
              value={user.cityId}
              onChange={handleInputs}
            >
              <option selected value>
                Select City
              </option>
              <option value="3">BAHADURGARH</option>
              <option value="3">Delhi</option>
            </select>
          </div>
        </div>
        <label>Contact Number</label>
        <div class="input-group mb-3">
          <div class="input-group-append">
            <span class="input-group-text">
              <select className="country_code">
                <option value="">+091</option>
              </select>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="contact number"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning font-weight-bold"
          onClick={RegisterSubmit}
        >
          REGISTER
        </button>
      </form>
    </>
  );
};

export default SignupUser;
