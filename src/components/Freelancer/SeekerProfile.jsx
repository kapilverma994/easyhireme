import React from "react";
import { Col, Row } from "react-bootstrap";
import JobSeekerCard from "./JobSeekerCard";

const SeekerProfile = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <div class="job-seeker-profile1">
            <p>
              <span>Back to search results</span>
            </p>
            <p>
              <span>
                <strong>Android, React Native, iOS, Salesforce</strong>
              </span>
            </p>
            <p>
              <strong>Location :</strong>{" "}
              <span>New Delhi, India (Anywhere)</span>
            </p>
            <p>
              <strong>Education level :</strong> <span>College/University</span>
            </p>
            <p>
              <strong>Education field :</strong> <span>Computer Sciences</span>
            </p>
            <p>
              <strong>Year of experience</strong> <span>more than 5</span>
            </p>
            <p>
              <strong>Rate :</strong>
            </p>
            <p>
              <strong>Attributes that best describes :</strong>
            </p>
            <p>
              <span>Team player</span>
            </p>
            <p>
              <span>Independent worker</span>
            </p>
            <p>
              <span>Strong analytical skills</span>
            </p>
            <p>
              <span>Good communicator</span>
            </p>
            <p>
              <span>Logical</span>
            </p>
            <p>
              <strong>Skills :</strong>
            </p>
            <p>
              <span>
                6 years Experience of Android, React native, iOS, salesforce
              </span>
            </p>
            <div class="clr"></div>
          </div>
          <div class="seeker-job-type">
            <p>
              <strong>Job type :</strong>
            </p>
            <ul class="seeker-job-type1">
              <li>
                <a href="#">Website development</a>
              </li>
              <li>
                <a href="#">PHP</a>
              </li>
              <li>
                <a href="#">MySQL</a>
              </li>
              <li>
                <a href="#">Java</a>
              </li>
              <li>
                <a href="#">Android</a>
              </li>
              <li>
                <a href="#">Net Framework</a>
              </li>
              <li>
                <a href="#">iOS</a>
              </li>
              <li>
                <a href="#">Node.JS</a>
              </li>
              <li>
                <a href="#">ASP.NET</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">(show less)</a>
              </li>
            </ul>
            <div class="clr"></div>
          </div>
          <div class="seeker-job-type2">
            <p>
              <strong>Availability</strong>
            </p>
            <div class="clr"></div>
          </div>
          <div class="seeker-job-avail">
            <div class="table table-responsive">
              <table class="table">
                <thead>
                  <tr
                    style={{
                      background: "#333333",
                      color: "#fff;font-size:12px",
                    }}
                  >
                    <th></th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu </th>
                    <th>Fri </th>
                    <th>Sat</th>
                    <th>Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Morning</td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                  </tr>
                  <tr>
                    <td>Afternoon</td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                  </tr>
                  <tr>
                    <td>Evening</td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                    <td>
                      <input type="checkbox" value="" checked />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <div class="col-md-4">
          <div class="seeker-job-post">
            <div class="seeker-job-post-img">
              <button type="button">POST A JOB</button>
              <img src="images/job-post.jpg" alt="job-post" />
              <div class="clr"></div>
            </div>
            <ul class="seeker-job-post-btn">
              <li>
                <button type="button">
                  <i class="fa fa-envelope"></i> CONTACT BY EMAIL
                </button>
              </li>
              <li>
                <button type="button">
                  <i class="fa fa-mobile"></i> CONTACT BY PHONE
                </button>
              </li>
              <li>
                <button type="button">
                  <i class="fa fa-file"></i> VIEW CV
                </button>
              </li>
            </ul>
            <div class="clr"></div>
          </div>
        </div>
      </Row>
      <div class="job-seeker-city">
        <h3>Related job seeker in your city</h3>
        <div class="clr"></div>
        <div class="job-seeker-city1">
          <Row>
            <JobSeekerCard img={"images/vodafone.png"} />

            <JobSeekerCard />

            <JobSeekerCard img={"images/aakruti.jpg"} />

            <JobSeekerCard img={"images/vodafone.png"} />

            <JobSeekerCard />

            <JobSeekerCard />
            <JobSeekerCard img={"images/axon.png"} />

            <JobSeekerCard />

            <JobSeekerCard img={"images/zoom.jpg"} />

            <JobSeekerCard />
            <JobSeekerCard img={"images/axon.png"} />

            <JobSeekerCard img={"images/aakruti.jpg"} />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SeekerProfile;
