import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HotelDetailSlider from "./HotelDetailSlider";

const HotelBannerProfile = () => {
  return (
    <>
      <div class="hotel-banner-profile">
        <Container>
          <Row>
            <Col md={6}>
              <div class="hotel-banner-profile1">
                <HotelDetailSlider />
              </div>
            </Col>
            <Col md={6}>
              <div class="hotel-banner-profile2">
                <Row>
                  <Col md={6}>
                    <div class="banner-profile3">
                      <img src="images/banner-pro2.jpg" al="banner-pro2" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="banner-profile3">
                      <img src="images/banner-pro1.jpg" al="banner-pro1" />
                    </div>
                  </Col>
                </Row>
                <Col md={12}>
                  <div class="profile-classic">
                    <Row>
                      <Col md={3} className="profile-sapace-remove">
                        <div class="profile-classic1">
                          <h3>Classic Room</h3>
                          <p>Free Cancellation</p>
                          <p>Room Only</p>
                        </div>
                      </Col>
                      <Col md={3} className="profile-sapace-remove">
                        <div class="profile-classic2">
                          <p>Pixa Per xyz of</p>
                          <p>1Adult</p>
                          <p class="pro-clas">₹4500</p>
                          <p class="pro-clas1">₹3000</p>
                          <p>Saving ₹1500</p>
                          <p>Code Used MMTOYOOFT</p>
                        </div>
                      </Col>
                      <Col md={3} className="profile-sapace-remove">
                        <div class="profile-classic3">
                          <p>OTHER ROOMS</p>
                        </div>
                      </Col>
                      <Col md={3} className="profile-sapace-remove">
                        <div className="profile-classic4">
                          <button type="button">BOOK THIS NOW</button>
                        </div>
                      </Col>
                    </Row>
                    <div class="clr"></div>
                  </div>
                </Col>
              </div>
            </Col>
            <div class="clr"></div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HotelBannerProfile;
