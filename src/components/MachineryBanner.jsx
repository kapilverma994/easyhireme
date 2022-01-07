import React from "react";
import { Carousel, Container } from "react-bootstrap";

export default function MachineryBanner(props) {
  return (
    <>
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={props.img} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
