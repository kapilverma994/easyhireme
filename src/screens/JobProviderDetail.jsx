import React from "react";
import { Container } from "react-bootstrap";
import ProviderDetail from "../components/Applyjobs/ProviderDetail";
import Footer from "../components/Footer";
import TopBar from "../components/job-seeker/TopBar";
import TopNavigation from "../components/TopNavigation";

const JobProviderDetail = () => {
  return (
    <>
      <TopNavigation />

      <Container fluid>
        <ProviderDetail />
      </Container>
      <Footer />
    </>
  );
};

export default JobProviderDetail;
