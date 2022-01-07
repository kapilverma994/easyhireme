import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HotelDetailCard() {
  return (
    <>
      <Card className="hotelservicecard mt-3 mb-3" style={{ width: "100%" }}>
        <Link to="hotel-profile">
          <Card.Img
            variant="top"
            src="images/job-img3.png"
            width="100%"
            alt="job-img3"
          />
        </Link>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            <Row>
              <Col md={12}>
                <div className="about-hotel-detil2">
                  <h5 title="Chennai | Novaotel Chenna">
                    Chennai | Novaotel Chenna
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="">
                  <p>Weekend breaks | Affordable Price</p>
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col md={6}>
              <p
                className="about-hotel-save-cross"
                style={{ marginBottom: "5px" }}
              >
                ₹ 2324 <span>₹ 3599</span>
              </p>
            </Col>
            <Col md={6}>
              <div className="about-hotel-save text-right">
                <p className="about-hotel-save2n">Save 39%</p>
              </div>
            </Col>
          </Row>
          <div className="about-detail-select-box float-right">
            <p style={{ marginBottom: "0px" }}>
              <i className="fa fa-angle-down"></i> 4 deals
            </p>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default HotelDetailCard;
