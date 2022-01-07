import React from "react";
import { Container } from "react-bootstrap";
import Form1 from "../../components/CompanyRegister/CompanyPost Job/Form1";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";

const Applyjob1 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid>
        <Form1 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob1;
