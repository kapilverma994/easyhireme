import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hire = () => {
  return (
    <div>
      <div class="freelancer ">
        <Container fluid>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div class="freelancer-req">
                <h3>Please share your requirement</h3>
                <div class="freelancer-project">
                  <h3>Name for your project</h3>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" e.g. Build me a website"
                  />
                  <h3>Description of your Project</h3>
                  <textarea
                    rows="5"
                    type="text"
                    class="form-control"
                    placeholder=" Describe your project here..."
                  ></textarea>
                  <div class="clr"></div>
                </div>
                <div class="freelancer-upload">
                  <div class="freelancer-upload1">
                    <div class="col-md-3">
                      <label for="file-upload" class="custom-file-upload">
                        Upload Files
                      </label>
                      <input id="file-upload" type="file" />
                    </div>
                    <div class="col-md-9">
                      <p>
                        Drag &amp; drop any images or documents that might be
                        helpful in explaining your project brief here.
                      </p>
                    </div>
                    <div class="clr"></div>
                  </div>
                  <button type="button" class="btn btn-default">
                    Next
                  </button>
                  <div class="clr"></div>
                </div>
                <div class="freelancer-skill">
                  <h3>skills required</h3>
                  <p>
                    Enter up to 5 skills that will help interested and
                    experienced freelancers to create your project
                  </p>
                  <div class="clr"></div>
                </div>
                <section id="section-examples" class="attireBlock mod1">
                  <div class="inner">
                    <form class="attireCodeToggleBlock" action="">
                      <div class="fstElement fstMultipleMode fstNoneSelected">
                        <div class="fstControls">
                          <input
                            class="fstQueryInput fstQueryInputExpanded"
                            placeholder="Choose option"
                          />
                        </div>
                        <select
                          class="multipleSelect"
                          multiple=""
                          name="language"
                        >
                          <option value="php">PHP developer</option>
                          <option value="wdesign">Web Design</option>
                          <option value="gdesign">Graphics Design</option>
                          <option value="android">Android Developer</option>
                          <option value="dtdeveloper">.Net Developer</option>
                        </select>
                      </div>
                      <button class="submitBtn" type="submit">
                        Submit
                      </button>

                      <script>$('.multipleSelect').fastselect();</script>
                      <div class="clr"></div>
                    </form>
                  </div>
                </section>
                <div class="freelancer-suggested">
                  <p>
                    Suggested skills: <span>MySQL</span>,{" "}
                    <span>Web Hosting</span>, <span>Software Testing</span>,{" "}
                    <span>Engineering</span>, <span>Software Architecture</span>
                  </p>
                  <button type="button" class="btn btn-info">
                    Next
                  </button>
                </div>
                <div class="clr"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hire;
