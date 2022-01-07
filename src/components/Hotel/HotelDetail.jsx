import React from "react";
import Footer from "../Footer";
import TopNavigation from "../TopNavigation";
import CheckinCheckout from "./CheckinCheckout";
import HotelBannerProfile from "./HotelBannerProfile";
import HotelDescription from "./HotelDescription";
import HotelDetailAbout from "./HotelDetailAbout";
import RatingReview from "./RatingReview";

export default function HotelDetail() {
  return (
    <div>
      <TopNavigation />
      <CheckinCheckout />
      <div class="profile-silverkey">
        <div class="container-fluid">
          <div class="profile-silverkey1">
            <div class="col-md-6">
              <div class="profile-silverkey2">
                <h3>
                  SilverKey Executive stays 20013 OMR <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star" style={{ color: "#0005" }}></i>
                  <span>
                    1 and 2, Balavinay Nagar pillay Koli Street, Chennai
                    <span></span>
                  </span>
                </h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-silverkey3">
                <ul class="profile-silverkey3n">
                  <li>
                    <a href="#">
                      Home
                      <span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hotels in Channai
                      <span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HotelBannerProfile />

      <div className="rating-review">
        <RatingReview />
      </div>
      <div class="hotel-profile-line"></div>
      <HotelDescription />
      <div class="hotel-profile-line"></div>
      <HotelDetailAbout />
      <Footer />
    </div>
  );
}
