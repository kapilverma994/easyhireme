import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "../components/Freelancer/Profile";
import Sidebar from "../components/Freelancer/Sidebar";
import MachineryBanner from "../components/MachineryBanner";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

export default function FreeLancerHome() {
  return (
    <>
      <TopNavigation />
      <MachineryBanner img="images/freelancer-banner1.jpg" />
      <Container fluid>
        <Row className="mt-4">
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Profile />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
