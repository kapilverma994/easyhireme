import React from "react";
import { Container } from "react-bootstrap";
import Form4 from "../../components/CompanyRegister/CompanyPost Job/Form4";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";

const Applyjob4 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid className="set-height">
        <Form4 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob4;
