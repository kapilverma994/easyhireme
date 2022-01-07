import React from "react";
import { Dropdown } from "react-bootstrap";
import CityState from "./CityState";
export default function Sidebar() {
  return (
    <>
      <div class="freelancer-category">
        <div class="">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              BROWSE BY CATEGORY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">CATEGORY 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">CATEGORY 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CATEGORY 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <CityState />
        </div>

        <h3>
          Popular Searches: <span>jobs</span>
        </h3>
        <h3>Filters</h3>
        <h3>CATEGORES</h3>
        <p>All cateores</p>
        <h3>Jobs</h3>
        <ul class="freelancer-ul">
          <li>Data entry &amp; Back office(1000)</li>
          <li>Sales &amp; Marketing(1000)</li>
          <li>BPO &amp; Telecaller(1000)</li>
          <li>Office Assistant(1000)</li>
          <li>Deliver(1000)</li>
          <li>Delivery &amp; Collection(1000)</li>
        </ul>
        <div class="">
          <div class="freelancer-skill">
            <h3>skills</h3>
            <div class="clr"></div>
          </div>
          <section
            id="section-examples"
            class="attireBlock mod1"
            style={{ paddingLeft: "3%" }}
          >
            <div class="inner">
              <form class="attireCodeToggleBlock" action="">
                <div class="fstElement fstMultipleMode fstNoneSelected">
                  <div class="fstControls">
                    <input
                      class="fstQueryInput fstQueryInputExpanded"
                      style={{ paddingLeft: "3%" }}
                      placeholder="Choose option"
                    />
                  </div>
                  <select class="multipleSelect" multiple="" name="language">
                    <option value="php">PHP developer</option>
                    <option value="wdesign">Web Design</option>
                    <option value="gdesign">Graphics Design</option>
                    <option value="android">Android Developer</option>
                    <option value="dtdeveloper">.Net Developer</option>
                  </select>
                </div>
                <button class="submitBtn" type="submit">
                  Submit
                </button>

                <div class="clr"></div>
              </form>
            </div>
          </section>
          <div class="freelancer-suggested" style={{ paddingLeft: "3%" }}>
            <p>
              Suggested skills: <span>MySQL</span>, <span>Web Hosting</span>,{" "}
              <span>Software Testing</span>, <span>Engineering</span>,{" "}
              <span>Software Architecture</span>
            </p>
            <button type="button" class="btn btn-info">
              Next
            </button>
          </div>
        </div>

        <div class="freelancer-review" style={{ paddingLeft: "3%" }}>
          <h3>Review</h3>
          <p>
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star-o"></i> &amp;up
          </p>
          <p>
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>{" "}
            <i class="fa fa-star-o"></i> &amp;up
          </p>
          <p>
            <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
            <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>{" "}
            <i class="fa fa-star-o"></i> &amp;up
          </p>
          <p>
            <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>{" "}
            <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>{" "}
            <i class="fa fa-star-o"></i> &amp;up
          </p>
        </div>
      </div>
    </>
  );
}
