import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Form6 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <>
      <Container>
        <div class="apply-joba">
          <h3>Preview Job</h3>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </Container>
      <Container>
        <Row>
          <div class="preview-job">
            <p>
              By pressing confirm, you agree that this job will be posted and
              applications will be processed in
            </p>
            <p>
              accordance with Easyhirme <span>Cookie Policy</span>.
              <span>Privacy Policy</span>. and <span>Terms of Service</span> you
              consent to esayhireme
            </p>
            <p>
              informing a user that you have opened, viewed or made a decision
              regarding the user's application.
            </p>
            <div class="clr"></div>
          </div>
        </Row>
      </Container>
      <Container>
        <div className="preview-job1">
          <Row>
            <Col md={6}>
              <div class="preview-job2">
                <div class="job-preview-detail">
                  <h3>
                    Job Title <button type="button">- Edit</button>
                  </h3>
                  <p>test</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Company <button type="button">- Edit</button>
                  </h3>
                  <p>posvat.com</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Job Title <button type="button">- Edit</button>
                  </h3>
                  <p>test</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Location <button type="button">- Edit</button>
                  </h3>
                  <p>110059</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Salary <button type="button">- Edit</button>
                  </h3>
                  <p>10000</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Job type <button type="button">- Edit</button>
                  </h3>
                  <p>Full-time</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Job Description <button type="button">- Edit</button>
                  </h3>
                  <p>Job Summary</p>
                  <p>test</p>
                  <p>Responsibilities and Duties</p>
                  <p>test</p>
                  <p>Required Experience, Skills and Qulifications</p>
                  <p>test</p>
                  <p>Benefits</p>
                  <p>test</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div class="preview-job2">
                <div class="job-preview-detail">
                  <h3>
                    Edit Image <input type="file" name="myFile" multiple="" />
                  </h3>
                  <p></p>
                  <div class="sel-image">
                    <img src="images/no-img.png" alt="no-img" />
                  </div>
                  <p></p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Applecation Qualification{" "}
                    <button type="button">- Edit</button>
                  </h3>
                  <p>
                    You have requested that Easyhireme ask candidates the
                    following questions:
                  </p>
                  <ul>
                    <li>How many years of work experience do you have?</li>
                    <li>
                      What is the highest level of education you have completed?
                    </li>
                  </ul>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Applecation Settings <button type="button">- Edit</button>
                  </h3>
                  <p>Apply method:Email(xyz@gmail.com)</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Language <button type="button">- Edit</button>
                  </h3>
                  <p>English</p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Advertiser Settings <button type="button">- Edit</button>
                  </h3>
                  <p>Company: posvat.com</p>
                  <p>Company Size:1-49</p>
                  <p>Contact: 123456</p>
                  <p>Phone: 878678666</p>
                  <p>How did you hear avout us? Podcast</p>
                  <p>
                    Are you a recruiter hiring for a client? Yes - I am hiring
                    for a client
                  </p>
                </div>
                <div class="job-preview-detail">
                  <h3>
                    Selected Assessment Type{" "}
                    <button type="button">- Edit</button>
                  </h3>
                  <p>No assessments will be sent.</p>
                </div>
              </div>
            </Col>
          </Row>
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

export default Form6;
