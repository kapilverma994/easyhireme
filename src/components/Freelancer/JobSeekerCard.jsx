import React from "react";
import { Col } from "react-bootstrap";

const JobSeekerCard = (props) => {
  return (
    <>
      <Col md={2}>
        <div class="job-seeker-city1">
          <div class="job-seeker-city1-img">
            <img src={props.img} alt="amazon" />
            <p>NCR</p>
            <div class="job-seeker-city1-btn">
              <button type="button">VIEW DETAILS</button>
            </div>
            <div class="clr"></div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default JobSeekerCard;
JobSeekerCard.defaultProps = {
  img: "images/amazon.jpg",
};
