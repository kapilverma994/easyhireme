import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MachineSlider from "../components/Machine/MachineSlider";
import PropertyDetailList from "../components/Property/PropertyDetailList";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

export default function PropertyDetail() {
  return (
    <div>
      <TopNavigation />
      <Container fluid>
        <div class="pro-fo-sa">Property for sale in Delhi</div>
        <Row>
          <Col md={7}>
            <div class="pro-fo-sa1">
              <Row>
                <Col md={11} style={{ paddingLeft: "0px" }}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Search Property"
                  />
                </Col>
                <Col md={1} style={{ paddingLeft: "0px" }}>
                  <button type="button" class="btn btn-success">
                    Sarch
                  </button>
                </Col>
              </Row>
              <div class="clr"></div>
            </div>
            <PropertyDetailList />
          </Col>
          <Col md={5}>
            <MachineSlider
              name="Similar Properties For Sale"
              img="images/property-img1.jpeg"
              title="Delhi"
              class="property3"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
