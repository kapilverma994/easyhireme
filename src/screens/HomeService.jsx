import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import BrowseCategory from "../components/HomeService/BrowseCategory";
import Salon from "../components/HomeService/Salon";

import TopNavigation from "../components/TopNavigation";

export default function HomeService() {
  return (
    <>
      <TopNavigation />
      <div className="home_service">
        <Container fluid>
          <Row>
            <Col md={3}>
              <BrowseCategory />
            </Col>
            <Col md={9}>
              <Salon />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
