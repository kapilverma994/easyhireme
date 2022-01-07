import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div>
      <div class="job-provider">
        <ul class="job-provider-left">
          <li>
            <a href="">RECRUITERS</a>
          </li>
          <li>
            <a href="">COMPANIES</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">MORE</a>
          </li>
          <li>
            <a href="">NOTIFICATIONS</a>
          </li>
          <div class="clr"></div>
        </ul>
        <ul class="job-provider-right">
          <li>
            <a class="recruiter-login" href="">
              <span>
                Recruiter login <i class="fa fa-user-circle-o"></i>
              </span>
            </a>
          </li>
          <li>
            <Link class="recruiter-login log1n" to="post-jobs">
              <span>Post a Job</span>
            </Link>
          </li>
          <div class="clr"></div>
        </ul>
        <div class="clr"></div>

        <div class="clr"></div>
      </div>
    </div>
  );
}
