import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Form3 = () => {
  //   const [addData, setdata] = useState("");
  //   const handlechange = (e, editor) => {
  //     const val = editor.getData();
  //     setdata(val);
  //   };
  const history = useHistory();

  const action = () => {
    history.goBack();
  };
  return (
    <>
      <Container>
        <div class="apply-joba">
          <h3>Job Description</h3>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "42%" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
          <Row className="mt-4">
            <Col md={6}>
              <div class="job-descript-editor1">
                <div class="apply-joba2">
                  <div class="" style={{ width: "100%" }}>
                    <Row>
                      <div class="col-md-3 app-job1n">Describe the role of</div>
                      <div class="col-md-9">
                        <select class="form-control">
                          <option>Web Desginer</option>
                          <option>PHP Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </Row>
                  </div>
                </div>
                <div class="job-descript">
                  <p>Job Summary</p>
                  <p>Describe the position and its role within your company.</p>
                </div>
                <CKEditor editor={ClassicEditor} />
              </div>
            </Col>

            <Col md={6}>
              <div class="job-descript-editor1">
                <div class="apply-joba2">
                  <h3>Responsibileties and Duties</h3>
                </div>
                <div class="job-descript">
                  <p>
                    Describe the work that the candidate is supposed to perform
                  </p>
                </div>
                <div class="job-descript-editor" style={{ marginTop: "11.5%" }}>
                  <CKEditor editor={ClassicEditor} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div class="job-descript-editor1">
                <div class="apply-joba2">
                  <h3>Required Experience, Skills and Qualifications</h3>
                </div>
                <div class="job-descript">
                  <p>
                    This may include education, previous job experience,
                    certificat
                  </p>
                </div>
                <div class="job-descript-editor" style={{ marginTop: "2%" }}>
                  <CKEditor editor={ClassicEditor} />
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div class="job-descript-editor1">
                <div class="apply-joba2">
                  <h3>Benefits</h3>
                </div>
                <div class="job-descript">
                  <p>
                    This may include training, mentoring, heath insurance,
                    commutin
                  </p>
                  <div class="job-descript-editor" style={{ marginTop: "2%" }}>
                    <CKEditor editor={ClassicEditor} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

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
                <Link to="apply-job4">
                  <button type="button">Continue</button>
                </Link>
              </div>
            </Col>
            <div class="clr"></div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Form3;
