import React from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MachineSlider(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
      <div className={props.class}>
        <div class="machinery2">
          <h3 class="spf-sale">{props.name}</h3>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel>

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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
                    src={props.img}
                    width="100%"
                    height="200px"
                    alt="job-img3"
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      <h3>{props.title}</h3>
                    </Card.Text>
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
MachineSlider.defaultProps = {
  name: "Machinery Products",
  img: "images/machinery1.jpg",
  title: "Machinery 1",
  class: "property3 mt-4",
};
