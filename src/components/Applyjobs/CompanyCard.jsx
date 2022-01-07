import React from "react";
import { Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export default function CompanyCard(prop) {
  return (
    <>
      <Col md={3}>
        <div class="top-company-hire1">
          <Link to="job-provider-profile">
            <div class="top-company-hire1-img">
              <img src={prop.img} alt="hcl" />
            </div>
          </Link>
          <h4>{prop.name}</h4>
          <p>{prop.addr}</p>
        </div>
      </Col>
    </>
  );
}
CompanyCard.defaultProps = {
  name: "HCL",
  img: "images/hcl.png",
  addr: "Delhi NCR",
};
