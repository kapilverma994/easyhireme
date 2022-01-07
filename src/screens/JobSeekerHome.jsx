import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import JobCard from "../components/job-seeker/JobCard";
import TopBar from "../components/job-seeker/TopBar";
import MachineHeaderSlider from "../components/Machine/MachineHeaderSlider";
import MachineryBanner from "../components/MachineryBanner";
import PagiNation from "../components/PagiNation";
import SearchCompany from "../components/SearchCompany";
import TopNavigation from "../components/TopNavigation";
export default function JobSeekerHome() {
  return (
    <>
      <TopNavigation />
      <Container fluid>
        <TopBar />
      </Container>
      <MachineryBanner img="images/job-banner.jpg" />
      <SearchCompany />
      <MachineHeaderSlider />
      <Container fluid>
        <div class="hrt-skill">
          <p>
            <marquee>
              Hire the Rights talent with Rights skill regester here wover 2
              crore qualified candidates
              <span>
                <i class="fa fa-star-o"></i>
              </span>
              also apply job our top hiring partner company
            </marquee>
          </p>
        </div>
        <Row>
          <Col md={3}>
            <JobCard name="sandeep" img="images/job-img1.jpg" />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
        </Row>
        <PagiNation />
      </Container>
      <Footer />
    </>
  );
}
