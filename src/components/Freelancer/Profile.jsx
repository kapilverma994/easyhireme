import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import PagiNation from "../PagiNation";

import SubcategorySlider from "./SucategorySlider";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <SubcategorySlider />
      <Col className="mt-4" md={6}>
        <div class="hfreelancer-btn ">
          <Link to="hire-freelancer">
            <button type="button" class="btn1 ">
              I Want to Hire
            </button>
          </Link>
          <button type="button" class="btn2 ml-2">
            I Want to Work
          </button>
        </div>
        <div class="freelancer-seller">
          <h3>
            Seller Location <span>Clear</span>
          </h3>
          <input
            type="text"
            class="form-control"
            placeholder=" Auto location search city"
          />
        </div>
      </Col>
      <Row>
        <Col md={4}>
          <ProfileCard name="Kapil Verma" />
        </Col>

        <Col md={4}>
          <ProfileCard name="Sandeep Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Sandeep Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Sandeep Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Sandeep Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Sameer Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Rupesh Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Sunil Kumar" />
        </Col>
        <Col md={4}>
          <ProfileCard name="Ravi Kumar" />
        </Col>
      </Row>
      <PagiNation />
    </>
  );
}
