import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RatingReview = () => {
  return (
    <>
      <Container>
        <div class="rating-review1">
          <Row>
            <Col md={5}>
              <div class="rating-review2">
                <Row>
                  <Col md={2}>
                    <h3 class="reviewn1">1.7</h3>
                  </Col>
                  <Col md={10}>
                    <h3 class="reviewn3">3 Ratings 4.3 Reviews</h3>
                    <div class="clr"></div>
                  </Col>
                </Row>
                <div class="clr"></div>
              </div>
              <div class="rating-review-p">
                <p>
                  Staff were capable, very friendly and supportive. The rooms
                </p>
                <div class="rating-review-p1">
                  <p class="review-p1">Ramaschandrs Nair</p>
                  <p class="review-p2">
                    <a href="#">More Reviews</a>
                  </p>
                </div>
                <div class="clr"></div>
              </div>
              <div class="rating-review-gift">
                <div class="review-gift">
                  <p>Save ₹ 555 more</p>
                  <p>
                    Login &amp; use wallet{" "}
                    <i class="fa fa-gift" aria-hidden="true"></i>
                  </p>
                  <p>balance for booking</p>
                </div>
                <div class="clr"></div>
              </div>
              <div class=""></div>
            </Col>
            <div class="clr"></div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default RatingReview;
