import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div className="machinery1">
        <div className="machinery-ren">
          <Container>
            <Row>
              <Col md={3}>
                <div className="machinery-ren1">
                  <div className="machinery-ren1-img"></div>
                </div>
              </Col>
              <Col md={9}>
                <div className="machinery-ren2">
                  <h3>
                    Western Heavy Equipment Rental LLC{" "}
                    <Link to="machinery-store">
                      <button type="button">
                        More Info <i className="fa fa-angle-double-right"></i>
                      </button>
                    </Link>
                  </h3>
                  <div className="clr"></div>
                </div>
                <div className="machinery-ren6">
                  <p></p>
                  <h3>Products &amp; Services :</h3> Construction Equipment
                  Machinery and Rental, Plant Hire, Crane
                  <span id="dots">...</span>
                  <span id="more">
                    and Lifting Solutions, Construction Equipment and Machinery
                    Rental, Crane Hire, Forklift Suppliers, Generators Hire,
                    Heavy Duty
                  </span>
                  <p></p>
                  <button onclick="myFunction()" id="myBtn">
                    Read more...
                  </button>
                </div>
                <div className="pt-2 ">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fa fa-heart"></i> Favourite
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    data-toggle="modal"
                    data-target="#myEnquiry"
                  >
                    <i className="fa fa-list-alt"></i> Add to Enquiry
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    data-toggle="modal"
                    data-target="#myDemo"
                  >
                    Demo
                  </button>
                </div>
              </Col>
            </Row>
            <div className="clr"></div>
          </Container>
        </div>

        <div className="clr"></div>
      </div>
    </>
  );
}
