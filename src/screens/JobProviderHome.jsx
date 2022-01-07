import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import CompanyCard from "../components/Applyjobs/CompanyCard";
import Jobcategory from "../components/Applyjobs/Jobcategory";
import Footer from "../components/Footer";
import MachineHeaderSlider from "../components/Machine/MachineHeaderSlider";
import MachineryBanner from "../components/MachineryBanner";
import PagiNation from "../components/PagiNation";
import SearchCompany from "../components/SearchCompany";
import TopNavigation from "../components/TopNavigation";

export default function JobProviderHome() {
  return (
    <div>
      <TopNavigation />

      <MachineryBanner img="images/jobseeker-banner.jpg" />
      <Container fluid>
        <SearchCompany />
        <MachineHeaderSlider />
        <Row>
          <Col md={10}>
            <div class="provider-com-hiring">
              <h3>Top companies hiring</h3>
              <div class="top-company-hire">
                <Row>
                  <CompanyCard name="Hike" img="images/hike.png" />
                  <CompanyCard name="NOKIA" img="images/nokia.png" />
                  <CompanyCard name="HP" img="images/hp.png" />
                  <CompanyCard name="NOKIA" img="images/nokia.png" />

                  <CompanyCard />
                  <CompanyCard />
                  <CompanyCard name="HP" img="images/hp.png" />
                  <CompanyCard name="NOKIA" img="images/nokia.png" />
                  <CompanyCard />
                  <CompanyCard />
                  <CompanyCard name="Hike" img="images/hike.png" />
                  <CompanyCard name="NOKIA" img="images/nokia.png" />
                </Row>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <Jobcategory />
          </Col>
        </Row>
        <div className="a-to-z-heading">
          <h3>Search as per Company</h3>
        </div>
        <div className="a-to-z-job">
          <Tabs defaultActiveKey="second">
            <Tab eventKey="first" title="Top100">
              Hii, I am 1st tab content
            </Tab>
            <Tab eventKey="second" title="A">
              Hii, I am 2nd tab content
            </Tab>
            <Tab eventKey="third" title="B">
              Hii, I am 3rd tab content
            </Tab>
          </Tabs>
        </div>
      </Container>
      <PagiNation />
      <Footer />
    </div>
  );
}
