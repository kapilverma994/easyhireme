import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Form2 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <>
      <section id="apply-job" style={{ minHeight: "60vh" }}>
        <div class="container">
          <div class="apply-joba">
            <h3>Job Details</h3>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "28%" }}
              >
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="apply-joba2">
                <h3>What type of job is it?</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="apply-job-detail text-center">
            <Row>
              <div class="col-md-4">
                <label>Full-time</label>
              </div>
              <div class="col-md-4">
                <label>Part-time</label>
              </div>
              <div class="col-md-4">
                <label>Temporary</label>
              </div>
            </Row>
            <Row>
              <div class="col-md-4">
                <label>Contract</label>
              </div>
              <div class="col-md-4">
                <label>Internsip</label>
              </div>
              <div class="col-md-4">
                <label>Commission</label>
              </div>
            </Row>
            <Row>
              <div class="col-md-4">
                <label>Volunteer</label>
              </div>
              <div class="col-md-4">
                <label>Fresher</label>
              </div>
              <div class="col-md-4">
                <label>Walk-In</label>
              </div>
            </Row>
          </div>
        </div>
        <div class="container">
          <div class="apply-job-location">
            <div class="apply-job-location1">
              <Row>
                <Col md={4}>
                  <div class="apply-job-location2">
                    <h3>Country</h3>
                    <select class="form-control">
                      <option>select country</option>
                      <option>India</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </Col>
                <Col md={4}>
                  <div class="apply-job-location2">
                    <h3>City</h3>
                    <select class="form-control">
                      <option>select City</option>
                      <option>Delhi</option>
                      <option>Noida</option>
                    </select>
                  </div>
                </Col>
                <Col md={4}>
                  <div class="apply-job-location2">
                    <h3>Location</h3>
                    <input type="text" class="form-control" />
                  </div>
                </Col>

                <Col md={6} className=" location2-salary1">
                  <h3>How many hires do you want to make for this position</h3>
                  <select class="form-control">
                    <option>select position</option>
                    <option>position 1</option>
                    <option>position 2</option>
                  </select>
                  <div class="clr"></div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="apply-job-btn">
            <Row>
              <Col md={6}>
                <div class="apply-job-btn1">
                  <button type="button" onClick={action}>
                    Back
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div class="apply-job-btn2 text-right">
                  <Link to="apply-job3">
                    <button type="button">Continue</button>
                  </Link>
                </div>
              </Col>
              <div class="clr"></div>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form2;
