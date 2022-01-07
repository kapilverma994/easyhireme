import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Location from "./Location";
import Policy from "./Policy";
import RatingandReviewtab from "./RatingandReviewtab";
import RoomDetail from "./RoomDetail";

const HotelDetailAbout = () => {
  const [key, setKey] = useState("ROOMS");
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="ROOMS" title="ROOMS">
          <RoomDetail />
        </Tab>
        <Tab eventKey="LOCATION" title="LOCATION">
          <Container fluid>
            <Location />
          </Container>
        </Tab>
        <Tab eventKey="POLICIES" title="POLICIES">
          <Container fluid>
            <Policy />
          </Container>
        </Tab>
        <Tab eventKey="RATINGS AND REVIEWS" title="RATINGS AND REVIEWS">
          <Container fluid>
            <RatingandReviewtab />
          </Container>
        </Tab>
      </Tabs>
    </>
  );
};

export default HotelDetailAbout;
