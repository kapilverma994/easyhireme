import React from "react";
import { Container } from "react-bootstrap";
import Form3 from "../../components/CompanyRegister/CompanyPost Job/Form3";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";

const Applyjob3 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid>
        <Form3 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob3;
