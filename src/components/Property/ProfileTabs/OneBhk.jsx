import React from "react";
import { Col, Row } from "react-bootstrap";
import BhkSlider from "./BhkSlider";

const OneBhk = () => {
  return (
    <div>
      <BhkSlider />
      <div className="pro-project-size">
        <h3>Project Size</h3>
      </div>
      <Row>
        <Col md={6}>
          <div class="pro-project-size1">
            <p>Total Project Area</p>
            <h3>60 Acres</h3>
          </div>
        </Col>
        <Col md={6}>
          <div class="pro-project-size1">
            <p>Total Planned units</p>
            <h3>60 Acres</h3>
          </div>
        </Col>
        <Col md={6}>
          <div class="pro-project-size1">
            <p>Towera</p>
            <h3>6</h3>
          </div>
        </Col>
        <Col md={6}>
          <div class="pro-project-size1">
            <p>Floors</p>
            <h3>9</h3>
          </div>
        </Col>
        <div className="clr"></div>
        <Col md={12}>
          <div class="project-st">
            <h3>Construction Status</h3>

            <div class="pro-project-size1">
              <p>Current Status</p>
              <h3>Ready To Move</h3>
            </div>

            <div class="clr"></div>
          </div>
        </Col>
        <Col md={12}>
          <div class="project-st">
            <h3>RERA Registration Number</h3>

            <div class="pro-rera-reg">
              <p>PRM/KA/RERA/1251/310/PR/181022/002096</p>
            </div>

            <div class="clr"></div>
          </div>
        </Col>
        <Col md={12}>
          <div class="pro-cons-matrial">
            <h3>Construction Material</h3>
            <div class="pro-cons-matrial1">
              <h3>Flooring</h3>
              <p></p>
              <ul class="pro-cons1">
                <li>All rooms are provided with vitrified tiles</li>
                <li>
                  Anti-skid ceramic tiles in balcony, toilets and powder room
                </li>
                <span id="dots">...</span>
                <span id="more">
                  <li>
                    The common areas like entrance lobby and corridors have
                    granite/vitrified tiles
                  </li>
                </span>
                <p></p>
                <button onclick="myFunction()" id="myBtn">
                  Read more...
                </button>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OneBhk;
