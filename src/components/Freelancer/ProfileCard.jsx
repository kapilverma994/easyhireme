import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfileCard(props) {
  return (
    <>
      <div className="">
        <Card className="servicecard">
          <div class="freelancer-home1-img">
            <Card.Img
              variant="top"
              src="images/st-img1.png"
              //   height="210px"
              alt="st-img1"
            />
          </div>

          <Card.Body style={{ padding: "0" }}>
            <Card.Title style={{ marginBottom: "0", marginLeft: "10px" }}>
              {props.name}
              <h5 style={{ display: "inline-block" }} className="ml-5">
                Web Developer
              </h5>
            </Card.Title>
            <Card.Text style={{ padding: "0", margin: "0" }}>
              <Row>
                <Col md={5}>
                  <div class="home1-d2" style={{ marginLeft: "10px" }}>
                    {/* <h3>SUNIL KUMAR</h3> */}
                    <p>Skills</p>
                    <p>Experience</p>
                    <p>Project Handled</p>
                    <p>Reviews</p>
                    <p>Per hour</p>
                  </div>
                </Col>
                <Col md={7}>
                  <div className=" home1-d2">
                    <p>PHP, Javascript</p>
                    <p>1 - 5 years</p>
                    <p>25</p>
                    <p>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>{" "}
                      <i class="fa fa-star-o"></i>
                    </p>
                    <p>25 us</p>
                  </div>
                </Col>
              </Row>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={6}>
                <div class="job-seeker-button">
                  <Link to="job-seeker-profile">
                    <button type="button">more detail</button>
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <div class="job-seeker-place1">
                  <p>Delhi</p>
                </div>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
