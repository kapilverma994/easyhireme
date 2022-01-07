import React from "react";
import { Col, Row } from "react-bootstrap";
import Salonslider from "./Salonslider";

export default function Salon() {
  return (
    <div>
      <div className="home_salonwomen">
        <div className="salonfwmn">
          <strong>Salon for Women</strong>
        </div>
        <Row>
          <Col md={6}>
            <div class="mani_peds">
              <div class="mani_pedis">
                <img src="images/pedi.jpg" class="pedi_img" />
                <div class="mani_pedi">
                  <h4>Mani Pedi Dellght</h4>
                  <div class="mani_pedi-star">
                    <Row>
                      <Col md={8}>
                        <p class="mani_pedi-rating">
                          <span>
                            <i class="fa fa-star"></i> 4.67
                          </span>{" "}
                          95k rating
                        </p>
                        <p class="home_linthough">
                          AED219 <span>AED350</span>
                        </p>
                        <p>OPI = 130 Min</p>
                      </Col>
                      <Col md={4}>
                        <div class="book_save">
                          <button type="button">Book now</button>
                        </div>
                      </Col>
                    </Row>
                    <div class="manicure">
                      <Row>
                        <Col md={9}>
                          <div>
                            <strong>MANICURE</strong> - Classic Maincure (Shade:
                            The Nudes)
                          </div>
                          <div>
                            <strong>PEDICURE</strong>- Classic Pedicure (Shade:
                            The Nudes)
                          </div>
                          <div>
                            <strong>FREE EYEBROW THREADING</strong> - Eyebrows
                            Threading Upper Lip Threading
                          </div>
                        </Col>
                        <Col md={3}>
                          <div class="book_save">
                            <button type="button">Save</button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mani_pedis">
                <img src="images/pedi1.png" class="pedi_img" />
                <div class="mani_pedi">
                  <h4>Mani Pedi Dellght</h4>
                  <div class="mani_pedi-star">
                    <Row>
                      <Col md={8}>
                        <p class="mani_pedi-rating">
                          <span>
                            <i class="fa fa-star"></i> 4.67
                          </span>{" "}
                          95k rating
                        </p>
                        <p class="home_linthough">
                          AED219 <span>AED350</span>
                        </p>
                        <p>OPI = 130 Min</p>
                      </Col>
                      <Col md={4}>
                        <div class="book_save">
                          <button type="button">Book now</button>
                        </div>
                      </Col>
                    </Row>
                    <div class="manicure">
                      <Row>
                        <Col md={9}>
                          <div>
                            <strong>MANICURE</strong> - Classic Maincure (Shade:
                            The Nudes)
                          </div>
                          <div>
                            <strong>PEDICURE</strong>- Classic Pedicure (Shade:
                            The Nudes)
                          </div>
                          <div>
                            <strong>FREE EYEBROW THREADING</strong> - Eyebrows
                            Threading Upper Lip Threading
                          </div>
                        </Col>
                        <Col md={3}>
                          <div class="book_save">
                            <button type="button">Save</button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div class="salon_safety">
              <h3>Salon at the Safety of Home</h3>
              <p>At Home Comfort | Personalized Service</p>
              <Salonslider />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
