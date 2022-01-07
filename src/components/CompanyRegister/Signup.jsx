import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountrySelect from "./CountrySelect";
const Signup = () => {
  const [optionsState] = useState("");
  return (
    <>
      <div className="login-regiser2">
        <h5>
          <i className="fa fa-user-plus" aria-hidden="true"></i> New User?
          Register Now
        </h5>
        <form method="post" action="https://merchant.easyhireme.com">
          <div className="form-group">
            <label form="company">Company Name</label>
            <input type="text" className="form-control" required="" />
          </div>
          <Row>
            <Col sm={6}>
              <div className="form-group">
                <label for="lname">Select Industry</label>
                <select type="text" value={optionsState}>
                  {" "}
                  className="form-control"
                  <option value="0" selected="">
                    Select Industry
                  </option>
                  <option value="0" selected="">
                    Hotels
                  </option>
                  <option value="0" selected="">
                    Property
                  </option>
                  <option value="0" selected="">
                    Hire Machinery & Other
                  </option>
                  <option value="0" selected="">
                    Hire Freelancer
                  </option>
                  <option value="0" selected="">
                    Hire Job Seeker
                  </option>
                  <option value="0" selected="">
                    Apply Jobs
                  </option>
                  <option value="0" selected="">
                    Hire Maintenance Company
                  </option>
                </select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label for="lname">Select category</label>
                <select type="text" value={optionsState}>
                  {" "}
                  className="form-control"
                  <option value="0" selected="">
                    Select Industry
                  </option>
                </select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="email" className="form-control" required="" />
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label>Last Name</label>
                <input type="password" className="form-control" required="" />
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control dlbld"
                  required=""
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control dlbld"
                  required=""
                />
              </div>
            </Col>

            <CountrySelect />
            <Col sm={6}>
              <div className="form-group">
                <label for="stat" id="dd">
                  State
                </label>
                <div id="state_name">
                  <select className="form-control" name="state_name">
                    <option selected="">Select State</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <div className="form-group">
                <label for="city">City</label>
                <div id="city">
                  <select className="form-control" name="city_name">
                    <option selected="">Select City</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label for="contact">Location</label>
                <input type="text" className="form-control" required="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="form-group">
                <label for="contact">Contact Number</label>
                <div className="row">
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control pcode"
                      required=""
                    />
                  </div>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" required="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="form-group">
                <label for="street">Landline Number</label>
                <div className="row">
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control pcode"
                      required=""
                    />
                  </div>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" required="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="form-group">
                <label for="street">Address</label>
                <textarea type="text" className="form-control"></textarea>
              </div>
            </Col>
          </Row>
          <button
            type="submit"
            name="submit"
            className="btn btn-warning font-weight-bold"
          >
            REGISTER NOW
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
