import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Form5 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <>
      <section style={{ minHeight: "60vh" }}>
        <div class="container">
          <div class="apply-joba">
            <h3>Applicant Qualifications</h3>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              >
                <span class="sr-only"></span>
              </div>
            </div>
            <div class="clr"></div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="apply-qualification">
                <h3>
                  Would you like to ask candidates to respond to any criteria
                  entered below when they apply for your job?
                </h3>
                <h3>
                  Here are a few recommendations to get you started. Edit them,
                  or add more below.
                </h3>
                <div class="clr"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <Row className="apply-qualification1">
            <Col md={7}>
              <div className="apply-minimum">
                <Row>
                  <Col md={2} className="apply-minimum1">
                    Minimum of
                  </Col>
                  <Col md={3}>
                    <select class="form-control">
                      <option>1 year</option>
                      <option>6 Months</option>
                      <option>3 Months</option>
                    </select>
                  </Col>
                  <Col md={1}>of</Col>
                  <Col md={4}>
                    <input type="text" class="form-control" />
                  </Col>
                  <Col md={2} className="apply-minimum1">
                    experience
                  </Col>
                  <div class="clr"></div>
                </Row>
              </div>
              <div className="apply-ra">
                <div class="radio">
                  <label>
                    <input type="radio" name="optradio4" checked="" />
                    <span className="ml-2">Preferred</span>
                  </label>
                </div>
              </div>
              <div className="radio radio1 ">
                <label className="ml-3">
                  <input type="radio" name="optradio4" />
                  <span className="ml-2">Required</span>
                </label>
              </div>
            </Col>
            <Col md={5}>
              <div class="apply-cross text-right">
                <i class="fa fa-close"></i>
              </div>
            </Col>
          </Row>

          <Row className="apply-qualification1">
            <Col md={7}>
              <div className="apply-minimum">
                <Row>
                  <Col md={4} className="apply-minimum1">
                    Minimum level of education:
                  </Col>
                  <Col md={7}>
                    <select class="form-control">
                      <option>Secondary(10th Pass)</option>
                      <option>12th pass</option>
                      <option>Graduation Pass</option>
                    </select>
                  </Col>

                  <div class="clr"></div>
                </Row>
              </div>
              <div className="apply-ra">
                <div class="radio">
                  <label>
                    <input type="radio" name="optradio4" checked="" />
                    <span className="ml-2">Preferred</span>
                  </label>
                </div>
              </div>
              <div className="radio radio1 ">
                <label className="ml-3">
                  <input type="radio" name="optradio4" />
                  <span className="ml-2">Required</span>
                </label>
              </div>
            </Col>
            <Col md={5}>
              <div class="apply-cross text-right">
                <i class="fa fa-close"></i>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <ul class="user-exper">
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Experience
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Education
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Location
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Licence
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Language
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-plus"></i> Shift Availability
              </a>
            </li>
            <div class="clr"></div>
          </ul>
        </Container>

        <Container>
          <div class="apply-ra">
            <p>
              only notify me of candidates who say they meet all my 'Required'
              criterea above.
            </p>
            <div class="radio">
              <label>
                <input type="radio" name="optradio" checked="" />
                <span className="ml-2">Yes</span>
              </label>
            </div>
            <div class="radio radio2">
              <label>
                <input type="radio" name="optradio1" />
                <span className="ml-2">No</span>
              </label>
            </div>
            <div class="clr"></div>
          </div>
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
                  <Link to="apply-job6">
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

export default Form5;
