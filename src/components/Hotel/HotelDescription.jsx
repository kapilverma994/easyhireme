import React from "react";
import { Container } from "react-bootstrap";

const HotelDescription = () => {
  return (
    <>
      <Container fluid>
        <div class="profile-silverkey2">
          <h3>
            SilverKey Executive stays 20013 OMR <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star" style={{ color: "#0005" }}></i>
          </h3>
        </div>
        <div class="silverkey-credit-card">
          <p>
            No credit card needed to book this hotel Lokk out for pay hotel
            option in this hotel
          </p>
        </div>
        <div class="silverkey-credit-card1">
          <p>
            Heading for a business trip any time soon? Being a corpotate
            traveler, you must have checked into countless receptions and have b{" "}
            <a href="#">Read More</a>
          </p>
        </div>
        <div class="clr"></div>
      </Container>
    </>
  );
};

export default HotelDescription;
