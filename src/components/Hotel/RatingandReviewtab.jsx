import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RatingandReviewtab = () => {
  return (
    <>
      <div class="veryfied-sliverkey">
        <div class="veryfied-sliverkey1">
          Verified Ratings &amp; Reviews for Silverkey Executive stays 20013 OMR
          <span>
            Take a look at verified ratings &amp; reviews posted by guests
          </span>
        </div>
        <div class="veryfied-sliverkey2">
          <Container fluid>
            <div class="veryfied-sliverkey3">
              <Row>
                <div class="col-md-2">
                  <div class="very-sliver">
                    <div class="very-sliver1">3.7</div>
                    <div class="very-sliver2">
                      3 RATINGS<span>3 REVIEWS</span>
                    </div>
                    <div class="clr"></div>
                  </div>
                </div>
                <div class="col-md-1 very-sliver3">
                  3.0<span>Facilities</span>
                </div>
                <div class="col-md-1 very-sliver3">
                  3.7<span>Rooms</span>
                </div>
                <div class="col-md-1 very-sliver3">
                  3.0<span>Certificats</span>
                </div>
                <div class="col-md-1 very-sliverbt1">
                  <button type="button">All Reviews</button>
                </div>
                <div class="col-md-2 very-sliverbt2">
                  <button type="button">Place Cleanilness</button>
                </div>
              </Row>
            </div>
          </Container>
          <div class="psant-exp">
            <Row>
              <Col md={10} className="psant-exp1">
                <h3>
                  Plesant experience
                  <span>Ramachandra Nair, Dec 21, 2019</span>
                </h3>
                <p>
                  Staff were capable, very friendly and supportive. the room
                </p>
              </Col>
              <Col md={2} className="psant-exp2">
                <h3>5.0</h3>
              </Col>
            </Row>
          </div>
          <div class="psant-exp">
            <div class="row">
              <div class="col-md-10 psant-exp1">
                <h3>
                  Plesant experience
                  <span>Ramachandra Nair, Dec 21, 2019</span>
                </h3>
                <p>
                  Staff were capable, very friendly and supportive. the room
                </p>
              </div>
              <div class="col-md-2 psant-exp2">
                <h3>5.0</h3>
              </div>
            </div>
          </div>
          <div class="psant-exp">
            <div class="row">
              <div class="col-md-10 psant-exp1">
                <h3>
                  Plesant experience
                  <span>Ramachandra Nair, Dec 21, 2019</span>
                </h3>
                <p>
                  Staff were capable, very friendly and supportive. the room
                </p>
              </div>
              <div class="col-md-2 psant-exp2">
                <h3>5.0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingandReviewtab;
