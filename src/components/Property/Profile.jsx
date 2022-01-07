import React, { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import OneBhk from "./ProfileTabs/OneBhk";
import ThreeBhk from "./ProfileTabs/ThreeBhk";
import TwoBhk from "./ProfileTabs/TwoBhk";

import PropertyProfileCard from "./PropertyProfileCard";

const Profile = () => {
  const [key, setKey] = useState("1 BHK");

  return (
    <>
      <Row>
        <Col md={5}>
          <div className="property-profile1">
            <PropertyProfileCard />
          </div>
          <div className="property-profile-tb">
            <div class="property-profile-tb1">
              <h3>
                FLOOR PLANS<span>RERA APPROVED</span>
              </h3>
            </div>
          </div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="1 BHK" title="1 BHK">
              <OneBhk />
            </Tab>
            <Tab eventKey="2 BHK" title="2 BHK">
              <TwoBhk />
            </Tab>
            <Tab eventKey="3 BHK" title="3 BHK">
              <ThreeBhk />
            </Tab>
          </Tabs>
        </Col>
        <Col md={7}>
          <div class="property-profile1">
            <div class="profile-brigade">
              <h3>Brigade Wisteria</h3>
              <p>1,2,3 Bedroom Apartment</p>
              <div class="profile-brigade1">
                <h3>kandkapura Road, NICE RD - BANNNERGHATTA VILLAGE</h3>
                <ul class="pro-kan">
                  <li>Brigade Group</li>
                  <li>Possession May 17</li>
                  <li>Ready To Move</li>
                </ul>
                <div class="clr"></div>
              </div>
              <div class="clr"></div>
            </div>
            <div class="about-project">
              <h3>ABOUT PROJECT</h3>
              <p>
                <i class="fa fa-check"></i> The projects is situated just
                minutes aqay from the upcoming metro station and NICE Road and
                is located right next to Art of Living, Kanakapura Road
              </p>
              <p>
                <i class="fa fa-check"></i> It is in close proximity to the Jain
                University, Edify School and BGS International School
              </p>
              <p>
                <i class="fa fa-check"></i> The project offers more than 40
                world class amenities such as the bird park, football field,
                world class tennis court, and an althletic track
              </p>
              <p>
                Birgade Wisteria offers luxurious living on Kanakapura Road in
                the south<span id="dots1">...</span>
                <span id="more1">
                  of Banlalore. Contemporary designs and elegant finishes
                  dominate houses in the 60 - acre integrated enclave. The
                  project comprises of thoughtfully designed 2&amp; 3 bedroom
                  apartments with
                </span>
              </p>
              <button onclick="myFunction1()" id="myBtn1">
                Read more...
              </button>
              <div class="clr"></div>
            </div>
            <div class="pro-profile-loc">
              <Row>
                <div class="col-md-8">
                  <div class="pro-profile-loc1">
                    <h3>LOCATION</h3>
                    <p>
                      No.122 Saalu Hunase Village, Opp. Anjanya Temple Udayaprua
                      Post, Kanakaprua Rprad Bengaluru Karnataka
                    </p>
                    <div class="profile1-google-map">Google Map</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pro-profile-loc1">
                    <h3>Other Available Amenities</h3>
                    <p>
                      <i class="fa fa-check"></i> ATM
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Basketball Court
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Rain Water Harvesting
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Party Hall
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Skating Rink
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Table Tennes Court
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Restaurants/Cafeteria
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Library
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Sewaqe Treatment Plant
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Squash Court
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Yoqa &amp; Meditation
                    </p>
                    <p>
                      <i class="fa fa-check"></i> Multipurpose Hall
                    </p>
                  </div>
                </div>
                <div class="clr"></div>
              </Row>
            </div>
            <div class="profile-amenit">
              <Row>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/lift.png" alt="lift" />
                    <p>Left(0)</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <i class="fa fa-building" aria-hidden="true"></i>
                    <p>Interoom Facility</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <i class="fa fa-car" aria-hidden="true"></i>
                    <p>Car Parking</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/swimming.png" alt="swimming" />
                    <p>Swimming Pool</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/gym.png" alt="gym" />
                    <p> Fitnese Center/ Gym</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/club.png" alt="club" />
                    <p>Club House/ Community Center</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <p>24 Hours Security /Conoierge</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/battery.png" alt="battery" />
                    <p>Power Backup</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <i class="fa fa-child" aria-hidden="true"></i>
                    <p>Children's Play Aria</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <p>Fire Alarm</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/cctv.png" alt="cctv" />
                    <p>CCTV</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="profile-amenit-img">
                    <img src="images/toty.png" alt="toty" />
                    <p>24 Hours Water Supply</p>
                  </div>
                </div>
                <div class="clr"></div>
              </Row>
            </div>
            <div class="bank-approval">
              <h3>BANK APPROVALS</h3>
              <Row>
                <div class="col-md-3">
                  <div class="bank-approval-img">
                    <img src="images/hdfc.png" alt="hdfc" />
                    <p>HDFC</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="bank-approval-img">
                    <img src="images/lichfl.png" alt="lichfl" />
                    <p>LIC Housing Finance</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="bank-approval-img">
                    <img src="images/pnb.png" alt="pnb" />
                    <p>Punjab National Bank</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="bank-approval-img">
                    <img src="images/sbi.png" alt="sbi" />
                    <p>State Bank of India</p>
                  </div>
                </div>
                <h3 class="bank-approval-more">MORE</h3>
                <div class="clr"></div>
              </Row>
            </div>
            <div class="pro-about-build">
              <h3>ABOUT BUILDER</h3>
              <h3>Brigade Group</h3>
              <p>
                Established in 1986, Brigade Group is a leading develper in
                South India with a legacy of more than 3 decades. Brigade has
                completed over 250 buildings amounting to 40{" "}
                <span id="dots3">...</span>
                <span id="more3">
                  million sqft in residential offices, retail, IT parks, SEZs,
                  education and hospitality sectors across magar cities
                </span>
              </p>
              <button onclick="myFunction3()" id="myBtn3">
                Read more...
              </button>
              <div class="clr"></div>
            </div>
            <div class="property-send-query">
              <h3>For more information and inquiry contact us</h3>
              <label>Name</label>
              <input type="type" class="form-control" />
              <label>Email</label>
              <input type="type" class="form-control" />
              <label>Phone No.</label>
              <input type="type" class="form-control" />
              <label>Message</label>
              <textarea rows="3" class="form-control"></textarea>
              <button type="button" class="btn btn-info">
                Send Inquiry
              </button>
              <div class="clr"></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
