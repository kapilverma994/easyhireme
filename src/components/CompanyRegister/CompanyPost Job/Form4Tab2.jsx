import React from "react";

const Form4Tab2 = () => {
  return (
    <div>
      <div class="tab-content">
        <div id="email" class="receive-application">
          <h3>
            Applications for this job will be sent to the following email a
          </h3>
          <input type="text" class="form-control" />
          <h4>
            <i class="fa fa-plus-circle"></i> Add additional email
          </h4>
          <h3>Do you want applicants to submit a resume?</h3>
          <ul class="receive-resume">
            <li>
              <a href="">Yes</a>
            </li>
            <li>
              <a href="">No</a>
            </li>
            <li>
              <a href="">Optional</a>
            </li>
            <div class="clr"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form4Tab2;
