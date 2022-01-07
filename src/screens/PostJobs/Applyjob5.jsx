import React from "react";
import { Container } from "react-bootstrap";
import Form5 from "../../components/CompanyRegister/CompanyPost Job/Form5";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";

const Applyjob5 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid className="set-height">
        <Form5 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob5;
