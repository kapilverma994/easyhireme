import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import MachineHeaderSlider from "../components/Machine/MachineHeaderSlider";
import MachineSlider from "../components/Machine/MachineSlider";
import Product from "../components/Machine/Product";

import MachineryBanner from "../components/MachineryBanner";
import PagiNation from "../components/PagiNation";
import SearchCompany from "../components/SearchCompany";
import TopNavigation from "../components/TopNavigation";

function MachineryHome() {
  return (
    <>
      <TopNavigation />
      <MachineryBanner img="images/machinery-banner3.jpg" />
      <SearchCompany />
      <MachineHeaderSlider />
      <Container fluid>
        <Row>
          <Col md={7}>
            <Product />
            <Product />
            <Product />
            <PagiNation />
          </Col>
          <Col md={5}>
            <MachineSlider />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MachineryHome;
