import React from "react";
import Footer from "../components/Footer";

import TopNavigation from "../components/TopNavigation";

import Login from "../components/CompanyRegister/Login";
import { Col, Container, Row } from "react-bootstrap";

import Signup from "../components/CompanyRegister/Signup";

export default function RegisterCompany() {
  return (
    <>
      <TopNavigation />
      <div className="main-content">
        <Container>
          <div className="login-regiser">
            <Row className="login-register-padding">
              <Col md={6} className="">
                <Login />
              </Col>
              <Col md={6} className="">
                <Signup />
              </Col>
            </Row>

            <div className="clr"></div>
            {/* Modal  */}
            <div id="myModal" className="modal fade" role="dialog">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title">Change Password</h4>
                  </div>
                  <div className="modal-body">
                    <p style={{ marginBottom: "3%" }}>
                      Enter Your Registerd Email
                    </p>
                    <p>
                      <input type="text" className="form-control" />
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
