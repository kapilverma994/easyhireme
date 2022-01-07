import React from "react";
import { Container } from "react-bootstrap";
import Form2 from "../../components/CompanyRegister/CompanyPost Job/Form2";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";

const Applyjob2 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid>
        <Form2 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob2;
