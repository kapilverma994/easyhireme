import React from "react";
import { Container } from "react-bootstrap";
import Form7 from "../../components/CompanyRegister/CompanyPost Job/Form7";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";
const Applyjob7 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid className="set-height">
        <Form7 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob7;
