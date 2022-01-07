import React from "react";
import PagiNation from "../PagiNation";
import { Col, Row } from "react-bootstrap";

export default function PropertyDetailList() {
  return (
    <div>
      <div class="popular-list">
        <ul class="nav nav-tabs nav-tabsn">
          <li>Showing 1 - 20 of 1,000 Shops sorted by </li>
          <li>
            <select
              style={{ marginLeft: "15%", marginTop: "-2px" }}
              class="form-control "
            >
              <option>Popular </option>
              <option>Newest</option>
              <option>Lowest Price</option>
            </select>
          </li>
          {/* <li style={{ marginLeft: "29%" }} class="active">
            <a data-toggle="tab" href="#fahome" aria-expanded="true">
              <i class="fa fa-list-ul"></i>
            </a>
          </li>
          <li class="">
            <a data-toggle="tab" href="#famenu1" aria-expanded="false">
              <i class="fa fa-th"></i>
            </a>
          </li> */}
        </ul>
        <div className="famenu-del">
          <Row>
            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="famenu-del1">
                <a href="property-profile.html">
                  <img src="images/property-img1.jpeg" alt="property-img1" />
                </a>
                <div class="famenu-del2">
                  <h3>₹ 50,0000</h3>
                  <p>The Gour Sans Socity Delhi</p>
                  <p>Property Area : 1220 sqft</p>
                  <div class="pt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myEnquiry"
                    >
                      <i class="fa fa-list-alt"></i> Add to Enquiry
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#myDemo"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <PagiNation />
        </div>
      </div>
    </div>
  );
}
