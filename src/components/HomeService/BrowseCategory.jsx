import React from "react";
import {
  Accordion,
  AccordionCollapse,
  Button,
  Card,
  Col,
  Form,
  Row,
} from "react-bootstrap";

export default function BrowseCategory() {
  return (
    <>
      <div className="brwrbyctgry">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Browse By Category
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Category</option>
                    <option value="">Category</option>
                    <option value="">Movinng &amp; Store</option>
                    <option value="">Cleaning Service</option>
                    <option value="">Maintenance &amp; Handyman</option>
                    <option value="">AC Services</option>
                    <option value="">Health at Home</option>
                    <option value="">Nannies and Maids</option>
                    <option value="">Pest Control and Gradening</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Sub Category</option>
                    <option value="">Local monving</option>
                    <option value="">International monving</option>
                    <option value="">Storage</option>
                    <option value="">Car shipping</option>
                    <option value="">Home cleaning service</option>
                    <option value="">Carpet cleaning</option>
                    <option value="">Deep cleaning</option>
                    <option value="">Laundry service</option>
                    <option value="">Mattress Cleaning</option>
                    <option value="">Office Cleaning</option>
                    <option value="">Pool Cleaning</option>
                    <option value="">Sofa Cleaning</option>
                    <option value="">Water tank Cleaning</option>
                    <option value="">Windwo cleaning for villas</option>
                    <option value="">Handyman</option>
                    <option value="">Carpentry</option>
                    <option value="">Electrican</option>
                    <option value="">Furniture assembly</option>
                    <option value="">
                      Home appliance Repair and Installation
                    </option>
                    <option value="">Locksmiths</option>
                    <option value="">Plumber</option>
                    <option value="">TV mounting</option>
                    <option value="">Painting</option>
                    <option value="">AC cleaning</option>
                    <option value="">AC duct cleaning</option>
                    <option value="">Ac installation</option>
                    <option value="">AC maintenace</option>
                    <option value="">AC Repair</option>
                    <option value="">COVIND-19 PCR Test at Home</option>
                    <option value="">Cleaning and sanitization</option>
                    <option value="">BabySitters and nannies</option>
                    <option value="">Full-time maids</option>
                    <option value="">Pest control</option>
                    <option value="">Ants pest control</option>
                    <option value="">Bed bugs pest control</option>
                    <option value="">Cockroch pest control</option>
                    <option value="">Rats and mice pest control</option>
                    <option value="">Gardening</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Select State</option>
                    <option value="">Andhra Pradesh</option>
                    <option value="">Arunachal Pradesh</option>
                    <option value="">Assam</option>
                    <option value="">Bihar</option>
                    <option value="">Chhattisgarh</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Select City</option>
                    <option value="">Agra</option>
                    <option value="">Aligarh</option>
                    <option value="">Amroha</option>
                    <option value="">Ayodhya</option>
                    <option value="">Azamgarh</option>
                  </Form.Control>
                </Form.Group>
                <div class="home_servicefltr">
                  <h4>Filter</h4>
                  <div>
                    <strong>Salon For Men</strong>
                  </div>
                  <div class="home_servicefltr1">
                    <div class="home_servicefltr2">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" id="vehicle1" />
                        </div>
                        <div class="col-md-10">
                          <div class="">Hair Cutting(100)</div>
                        </div>
                      </div>
                    </div>
                    <div class="home_servicefltr2">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" id="vehicle1" />
                        </div>
                        <div class="col-md-10">
                          <div class="">Facial(500)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="home_servicefltr">
                  <div>
                    <strong>Salon For Women</strong>
                  </div>
                  <div class="home_servicefltr1">
                    <div class="home_servicefltr2">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" id="vehicle1" />
                        </div>
                        <div class="col-md-10">
                          <div class="">Hair Cutting(100)</div>
                        </div>
                      </div>
                    </div>
                    <div class="home_servicefltr2">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" id="vehicle1" />
                        </div>
                        <div class="col-md-10">
                          <div class="">Facial(500)</div>
                        </div>
                      </div>
                    </div>
                    <div class="home_service-skill">
                      <h4>Skills</h4>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div class="best_clean">
          <h3>The best cleaners in towon !</h3>
          <Row>
            <Col md={12}>
              <div class="best_clean1">
                <img src="images/clean1.jpg" />
                <h4>Part Time Cleaners</h4>
                <div>130,000 + happy users</div>
              </div>
            </Col>
            <Col md={12}>
              <div class="best_clean1">
                <img src="images/clean2.png" />
                <h4>Sofa Cleaning</h4>
                <div>Best-in class chemicals</div>
              </div>
            </Col>
            <Col md={12}>
              <div class="best_clean1">
                <img src="images/clean3.jpg" />
                <h4>Regular Cleaning</h4>
                <div></div>
              </div>
            </Col>
            <Col md={12}>
              <div class="best_clean1">
                <img src="images/clean4.jpg" />
                <h4>Disinfection Service</h4>
                <div>100% safe or kids</div>
              </div>
            </Col>
          </Row>
          <div class="best_clean">
            <h3>Home repair just got easy !</h3>
            <div>Trained and background verified technicians</div>
            <Row>
              <Col md={12}>
                <div class="best_clean1">
                  <img src="images/repair1.jpg" />
                  <div>Handyman</div>
                </div>
              </Col>
              <Col md={12}>
                <div class="best_clean1">
                  <img src="images/repair2.jpg" />
                  <div>Plumber</div>
                </div>
              </Col>
              <Col md={12}>
                <div class="best_clean1">
                  <img src="images/repair3.jpg" />
                  <div>Electrican</div>
                </div>
              </Col>
              <Col md={12}>
                <div class="best_clean1">
                  <img src="images/repair4.jpg" />
                  <div>AC Service And Repair</div>
                </div>
              </Col>
            </Row>
            <div class="clr"></div>
          </div>
          <div class="clr"></div>
        </div>
      </div>
    </>
  );
}
