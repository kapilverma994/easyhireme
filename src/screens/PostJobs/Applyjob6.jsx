import React from "react";
import { Container } from "react-bootstrap";
import Form6 from "../../components/CompanyRegister/CompanyPost Job/Form6";
import Footer from "../../components/Footer";
import TopBar from "../../components/job-seeker/TopBar";
import TopNavigation from "../../components/TopNavigation";
const Applyjob6 = () => {
  return (
    <>
      <TopNavigation />
      <TopBar />
      <Container fluid className="set-height">
        <Form6 />
      </Container>
      <Footer />
    </>
  );
};

export default Applyjob6;
