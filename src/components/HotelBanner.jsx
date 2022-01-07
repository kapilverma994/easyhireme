import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function HotelBanner() {
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
      <Container fluid>
        <Carousel
          ssr
          partialVisbile
          //   deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          slidesToSlide={3}
        >
          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>

          <div className="m-2">
            <Link to="hotel-profile">
              <img src="images/job-img3.png" height="300px" width="100%" />
              <p className="custom-tag">DELHI NCR</p>
            </Link>
          </div>
        </Carousel>
      </Container>
    </>
  );
}

export default HotelBanner;
