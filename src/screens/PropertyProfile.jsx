import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Profile from "../components/Property/Profile";
import TopNavigation from "../components/TopNavigation";

const PropertyProfile = () => {
  return (
    <>
      <TopNavigation />
      <Container fluid>
        <Profile />
      </Container>
      <Footer />
    </>
  );
};

export default PropertyProfile;
