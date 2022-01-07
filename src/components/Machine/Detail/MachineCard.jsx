import React from "react";
import { Col, Row } from "react-bootstrap";

const MachineCard = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <div class="store-product1-list">
            <img src="images/m-img4.jpg" alt="m-img4" />
            <h3>Machinery1</h3>
            <button type="button">VIEW DETAILS</button>
            <div class="clr"></div>
          </div>
        </Col>
        <Col md={2}>
          <div class="store-product1-list">
            <img src="images/m-img4.jpg" alt="m-img4" />
            <h3>Machinery1</h3>
            <button type="button">VIEW DETAILS</button>
            <div class="clr"></div>
          </div>
        </Col>
        <Col md={2}>
          <div class="store-product1-list">
            <img src="images/m-img4.jpg" alt="m-img4" />
            <h3>Machinery1</h3>
            <button type="button">VIEW DETAILS</button>
            <div class="clr"></div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MachineCard;
