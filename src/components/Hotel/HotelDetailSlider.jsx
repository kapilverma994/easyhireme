import React from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HotelDetailSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <div className="property3 mt-4">
        <div class="machinery2">
          <div>
            <Carousel
              ssr
              partialVisbile
              //   deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              slidesToSlide={3}
            >
              <div className="mx-2">
                <Card
                  className="hotelservicecard   mb-3"
                  style={{ width: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    src="images/hpro-banner.jpg"
                    width="100%"
                    height="371px "
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                  </Card.Body>
                </Card>
              </div>

              <div className="mx-2">
                <Card
                  className="hotelservicecard  mb-3"
                  style={{ width: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    src="images/hpro-banner.jpg "
                    width="100%"
                    height="371px "
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
