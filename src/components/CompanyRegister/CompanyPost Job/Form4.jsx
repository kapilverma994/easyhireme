import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Form4Tab1 from "./Form4Tab1";
import Form4Tab2 from "./Form4Tab2";

const Form4 = () => {
  const history = useHistory();
  const action = () => {
    history.goBack();
  };
  return (
    <>
      <Container>
        <div class="apply-joba">
          <h3>Application Settings </h3>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <div class="apply-joba2">
              <h3>How do you want to receive applications?</h3>

              <div class="apply-appliction">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Nav variant="pills" className="flex-row">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Email</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">In Person</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form4Tab1 />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Form4Tab2 />
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>

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
                <Link to="apply-job5">
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

export default Form4;
