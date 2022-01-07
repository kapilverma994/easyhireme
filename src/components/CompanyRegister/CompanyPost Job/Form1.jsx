import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Form1 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <div>
      <div class="container" style={{ minHeight: "550px" }}>
        <div class="apply-joba">
          <h3>Tell us about you</h3>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "14%" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="apply-joba2">
              <h3>Job Title</h3>
              <input type="text" class="form-control" />
              <h3>Location</h3>
              <input type="text" class="form-control" />
            </div>
            <div class="apply-job-img">
              <p>
                Upload Image <input type="file" name="myFile" multiple="" />
              </p>
              <div class="sel-image">
                <img src="images/no-img.png" alt="no-img" />
              </div>
            </div>
            <div class="apply-get-start">
              <p>
                India - <a href="">Change</a>
              </p>
              <p>
                Job posting will be displayed in : English
                <a href="">Change</a>
              </p>
            </div>
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
                <Link to="apply-job2">
                  <button type="button">Continue</button>
                </Link>
              </div>
            </Col>
            <div class="clr"></div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Form1;
