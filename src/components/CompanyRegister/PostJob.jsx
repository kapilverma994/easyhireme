import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopBar from "../job-seeker/TopBar";

const PostJob = () => {
  return (
    <>
      <TopBar />
      <Container fluid>
        <section id="apply-job" style={{ minHeight: "600px" }}>
          <div class="container">
            <div class="apply-joba">
              <h3>Tell us about you</h3>
              <div class="clr"></div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="apply-joba2">
                  <h3>Your company Name</h3>
                  <input type="text" class="form-control" />
                  <h3>Phone Number</h3>
                  <input type="text" class="form-control" />
                  <h3>Are you a recuiter hiring for a client?</h3>
                  <select class="form-control">
                    <option>recuiter hiring for a client</option>
                    <option>recuiter hiring for a client1</option>
                    <option>recuiter hiring for a client2</option>
                    <option>recuiter hiring for a client3</option>
                  </select>
                  <div class="clr"></div>
                </div>
                <div class="clr"></div>
              </div>
              <div class="col-md-6">
                <div class="apply-joba2">
                  <h3>Your Name</h3>
                  <input type="text" class="form-control" />
                  <h3>company size</h3>
                  <select class="form-control">
                    <option>select company size</option>
                    <option>1-49</option>
                    <option>50-100</option>
                    <option>100-150</option>
                  </select>
                  <h3>How did you hear about us?</h3>
                  <select class="form-control">
                    <option>hear about us</option>
                    <option>hear about us1</option>
                    <option>hear about us2</option>
                    <option>hear about us3</option>
                  </select>
                  <div class="clr"></div>
                </div>
                <div class="clr"></div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="apply-job-btn">
                <div class="col-md-6">
                  <div class="apply-job-btn1"></div>
                </div>
                <div class="col-md-6">
                  <div class="apply-job-btn2 text-right">
                    <Link to="apply-job1">
                      <button type="button">Continue</button>
                    </Link>
                  </div>
                </div>
                <div class="clr"></div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default PostJob;
