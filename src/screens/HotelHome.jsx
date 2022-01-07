import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import HotelBanner from "../components/HotelBanner";
import HotelDetailCard from "../components/HotelDetailCard ";
import HotelLiveDeal from "../components/HotelLiveDeal";
import ModalCountry from "../components/ModalCountry";
import PagiNation from "../components/PagiNation";

import TopNavigation from "../components/TopNavigation";

function HotelHome() {
  return (
    <>
      <TopNavigation />
      <div className="main-content">
        {/* Search Hotel check in check out  */}
        <section>
          {/* Hotel Banner */}
          <HotelBanner />
          <div className="descover-hot-deal">
            <h3>Discover Hot Deals</h3>
          </div>
          {/* Hotel Live deals */}
          <HotelLiveDeal />
        </section>
        <Container fluid style={{ padding: "0 10rem" }}>
          <Row>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
            <Col md={3}>
              <HotelDetailCard />
            </Col>
          </Row>
          <PagiNation />
        </Container>

        {/* <!-- Modal Country--> */}
        <ModalCountry />
      </div>
      <Footer />
    </>
  );
}

export default HotelHome;
