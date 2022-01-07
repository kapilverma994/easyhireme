import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Form7 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <>
      <Container>
        <div class="apply-joba">
          <h3>Billing Address</h3>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </Container>

      <Container>
        <div class="apply-joba">
          <h3>
            Prices do not include taxes, which will be additionally charged
            where appropriate.
          </h3>
          <div class="clr"></div>
        </div>

        <Row>
          <Col md={6}>
            <div class="billing-address">
              <h3>Country: </h3>
              <select class="form-control">
                <option>India</option>
                <option>Australia</option>
                <option>New Zeland</option>
                <option>America</option>
              </select>
            </div>
            <div class="billing-address">
              <h3>PAN/GSTIN number: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
          <Col md={6}>
            <div class="billing-address">
              <p class="bill-add">Currency: INR ₹ (Indian Rupee)</p>
            </div>
          </Col>

          <Col md={6}>
            <div class="billing-address">
              <h3>Address Line 1: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
          <Col md={6}>
            <div class="billing-address">
              <h3>Address Line 2: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
          <Col md={4}>
            <div class="billing-address">
              <h3>City: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
          <Col md={4}>
            <div class="billing-address">
              <h3>State: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
          <Col md={4}>
            <div class="billing-address">
              <h3> Pincode: </h3>
              <input type="text" class="form-control" />
            </div>
          </Col>
        </Row>
      </Container>
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
                <Link to="apply-job7">
                  <button type="button">Continue</button>
                </Link>
              </div>
            </Col>
            <div class="clr"></div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Form7;
