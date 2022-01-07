import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import About from "./About";
import Services from "./Service";
import Mission from "./Mission";
import Contact from "./Contact";
import MachineCard from "./MachineCard";
export const Detail = () => {
  const [key, setKey] = useState("Aboutus");
  const [newkey, newsetKey] = useState("NORTH INDIA");
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={5}>
            <div class="machinery-store-img">
              <img src="images/m-img2.jpg" alt="m-img2" />
              <h3>EasyhireMe Store</h3>
              <div class="clr"></div>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="Aboutus" title="About Us">
                <About />
              </Tab>
              <Tab eventKey="our mission" title="OUR MISSION">
                <Mission />
              </Tab>
              <Tab eventKey="SERVICES" title="SERVICES">
                <Services />
              </Tab>
              <Tab eventKey="Contact Us" title="Contact Us">
                <Contact />
              </Tab>
            </Tabs>
          </Col>
          <Col md={7}>
            <div class="machinery-store-img1">
              <img src="images/m-img3.jpg" alt="m-img3" />
            </div>
            <div class="machinery-store-g">Google Map</div>
            <div class=" machinery-store-flags">
              <Row>
                <Col md={3}>
                  <div class="store-flag1">
                    <div class="store-flag2">
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>IN</p>
                        </div>
                        <Col md={4}>
                          <p>103</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>AE</p>
                        </div>
                        <Col md={4}>
                          <p>40</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>US</p>
                        </div>
                        <Col md={4}>
                          <p>17</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="store-flag1">
                    <div class="store-flag2">
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>UK</p>
                        </div>
                        <Col md={4}>
                          <p>103</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>RU</p>
                        </div>
                        <Col md={4}>
                          <p>40</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <img src="img/india-flag.png" alt="india-flag" />
                        </Col>
                        <div class="col-md-4">
                          <p>HK</p>
                        </div>
                        <Col md={4}>
                          <p>17</p>
                        </Col>
                        <div class="clr"></div>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="store-flag3">
                    <h3>Visitors</h3>
                    <p>
                      Page Views : <i class="fa fa-eye"></i> 1,194
                    </p>
                    <p>
                      Page Like : <i class="fa fa-thumbs-up"></i> 325
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div class="store-product-list">
          <h4>
            PRODUCT LIST <i class="fa fa-caret-down"></i>
          </h4>

          <Tabs
            className="my-tab"
            id="controlled-tab-example"
            activeKey={newkey}
            onSelect={(k) => newsetKey(k)}
          >
            <Tab eventKey="NORTH INDIA" title="NORTH INDIA">
              <MachineCard />
            </Tab>
            <Tab eventKey="INDIAN CHAT" title="INDIAN CHAT">
              <MachineCard />
            </Tab>
            <Tab eventKey="SOUTH INDIAN" title="SOUTH INDIAN">
              <MachineCard />
            </Tab>
            <Tab eventKey="PUNE" title="PUNE">
              <MachineCard />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
};
