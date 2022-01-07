import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import SeekerProfile from "../components/Freelancer/SeekerProfile";
import TopNavigation from "../components/TopNavigation";
const JobSeekerProfile = () => {
  return (
    <div>
      <TopNavigation />
      <Container fluid>
        <SeekerProfile />
      </Container>
      <Footer />
    </div>
  );
};

export default JobSeekerProfile;
