import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobCard(props) {
  return (
    <div>
      <div className="">
        <Card className="servicecard">
          <div class="">
            <Card.Img
              variant="top"
              src={props.img}
              //   height="210px"
              alt="st-img1"
            />
          </div>

          <Card.Body style={{ padding: "0" }}>
            <Card.Title
              style={{ marginBottom: "0", marginLeft: "10px" }}
              className="mt-3"
            >
              {props.name}
              <h5 style={{ display: "inline-block", marginLeft: "124px" }}>
                Web Developer
              </h5>
            </Card.Title>
            <Card.Text style={{ padding: "0", margin: "0" }}>
              <Row>
                <Col md={5}>
                  <div class="home1-d2" style={{ marginLeft: "10px" }}>
                    {/* <h3>SUNIL KUMAR</h3> */}
                    <p>Notice Period</p>
                    <p>Experience</p>
                    <p>Job Seeking</p>
                  </div>
                </Col>
                <Col md={7}>
                  <div className=" home1-d2">
                    <p>{props.notice_period}</p>
                    <p>{props.Experience}</p>
                    <p>{props.Job_Seeking}</p>
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
    </div>
  );
}
JobCard.defaultProps = {
  name: "Rahul",
  img: "images/job-img1.jpg",
  notice_period: "1 Month",
  Job_Seeking: "Active",
  Experience: "1-3 Years",
};
