import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showData, setShowData] = useState(false);
  console.log(showData);
  return (
    <div>
      <>
        <footer>
          <div className="footer-detail">
            {
              showData === true && (
                // <div className="footer_dwn">
                <Container>
                  <div className="ft-footer">
                    <Row className="pt-3">
                      <Col md={3}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">COMPANY</div>
                          <ul className="ft-footer-d">
                            <li>
                              <a href="#">Home </a>
                            </li>
                            <li>
                              <a href="#">About </a>
                            </li>
                            <li>
                              <a href="#">Register Your Company </a>
                            </li>
                            <li>
                              <a href="#">Register job seeker </a>
                            </li>
                            <li>
                              <a href="#">Membership </a>
                            </li>
                            <li>
                              <a href="#">Banner </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">HOT LINKS </div>
                          <ul className="ft-footer-d">
                            <li>
                              <Link to="privacy-policy">
                                Terms & Conditions
                              </Link>
                            </li>
                            <li>
                              <Link to="privacy-policy">Privacy Policy </Link>
                            </li>
                            <li>
                              <Link to="privacy-policy">Disclaimer </Link>
                            </li>
                            <li>
                              <a href="#">API Policy </a>
                            </li>
                            <li>
                              <a href="#">Security </a>
                            </li>
                            <li>
                              <a href="#">Sitemap </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="ft-footer-detail">
                          <div className="ft-footer-h">COUNTRIES </div>
                          <ul className="ft-footer-d">
                            <li>
                              <a href="#">India </a>
                            </li>
                            <li>
                              <a href="#">United Arab Emirates </a>
                            </li>
                            <li>
                              <a href="#">United Kingdom </a>
                            </li>
                            <li>
                              <a href="#">United Sates of America </a>
                            </li>
                            <li>
                              <a href="#">Australia </a>
                            </li>
                            <li>
                              <a href="#">China </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div
                          className="ftr_dwn"
                          onClick={() => setShowData(false)}
                        >
                          <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="ft-footer-app">
                          <div className="ft-footer-app1">
                            <img
                              src="images/ios-app-logo.png"
                              alt="ios-app-logo"
                            />
                          </div>
                          <div className="ft-footer-app1">
                            <img
                              src="images/android-app-logo.png"
                              alt="android-app-logo"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="fb-footer">
                    <Row>
                      <Col md={2}>
                        <Link to="/">
                          <div className="ft-footer-img">
                            <img
                              src="img/easyhrie1.png"
                              alt="easyhire1"
                              width="70%"
                              height="100px"
                            />
                          </div>
                        </Link>
                      </Col>
                      <Col md={5}>
                        <div className="fb-footer1">
                          <p className="fbp1">
                            © POSVAT PVT LTD. All Rights Reserved. Powered by{" "}
                            <a href="https://www.posvat.com" target="_blank">
                              posvat.com
                            </a>
                          </p>
                          <p className="fbp1">
                            Note : If you continue to utilize our services, you
                            agree to the Terms and Conditions, Content Policies,
                            Cookie Policy &amp; Privacy Policy of POSVAT. All
                            Trademark are properties of the respective
                            merchants.{" "}
                          </p>
                          <div className="clr"></div>
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className="footer-social">
                          <div className="footer-social1">
                            <ul>
                              <li className="fa-twit">
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li className="fa-lin">
                                <a href="#">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    src="images/naukri.png"
                                    className="naukri"
                                  />
                                </a>
                              </li>
                              <li className="fa-shine">
                                <a href="#">
                                  <img
                                    src="images/shine.png"
                                    className="shine"
                                  />
                                </a>
                              </li>
                            </ul>
                            <div className="clr"></div>
                          </div>
                        </div>
                      </Col>
                      {/* <Col md={1}>
                    <div className="ftr_up" onClick={() => setShowData(true)}>
                      <i className="fa fa-caret-up"></i>
                    </div>
                  </Col> */}
                    </Row>
                    <div className="clr"></div>
                  </div>
                </Container>
              )
              // </div>
            }
            {showData === false && (
              <Container>
                <div className="fb-footer">
                  <Row>
                    <Col md={2}>
                      <Link to="/">
                        <div className="ft-footer-img">
                          <img
                            src="img/easyhrie1.png"
                            alt="easyhire1"
                            height="100px"
                            width="70%"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={4}>
                      <div className="fb-footer1">
                        <p className="fbp1">
                          © POSVAT PVT LTD. All Rights Reserved. Powered by{" "}
                          <a href="https://www.posvat.com" target="_blank">
                            posvat.com
                          </a>
                        </p>
                        <p className="fbp1">
                          Note : If you continue to utilize our services, you
                          agree to the Terms and Conditions, Content Policies,
                          Cookie Policy &amp; Privacy Policy of POSVAT. All
                          Trademark are properties of the respective merchants.{" "}
                        </p>
                        <div className="clr"></div>
                      </div>
                    </Col>
                    <Col md={5}>
                      <div className="footer-social">
                        <div className="footer-social1">
                          <ul>
                            <li className="fa-twit">
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="fa-lin">
                              <a href="#">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="images/naukri.png"
                                  className="naukri"
                                />
                              </a>
                            </li>
                            <li className="fa-shine">
                              <a href="#">
                                <img src="images/shine.png" className="shine" />
                              </a>
                            </li>
                          </ul>
                          <div className="clr"></div>
                        </div>
                      </div>
                    </Col>
                    <Col md={1}>
                      <div className="ftr_up" onClick={() => setShowData(true)}>
                        <i className="fa fa-caret-up"></i>
                      </div>
                    </Col>
                  </Row>
                  <div className="clr"></div>
                </div>
              </Container>
            )}
          </div>
        </footer>
      </>
    </div>
  );
}
