import React from 'react';
import { Link, Redirect } from "react-router-dom";
import logo from '../../assets/image/easyhrie.png';
import Footer from '../../components/Footer';

function Mangeprofile(props) {
    return (
        <div>
            <div className='user-top-bar'>
                <div className='top-bar-bg'>
                    <div className='user-top-bar1'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                                    <div className='easyhireme_logo'>
                                        <img src={logo}/> 
                                    </div>
                                </div>
                                <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                                    <div className='user-logout text-right'>
                                        <a>
                                            <i className='fa fa-user'></i> Welcome <span>Cp Singh <i class="fa fa-sign-out"></i></span> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-main-content'>
                    <div className='user-left-nab-box'>
                        <div className='user-left-nab'>
                            <div className='dash_box'>
                                <h3 className='m-0'><i class="fa fa-dashboard"></i> DASHBOARD</h3>
                            </div>
                            <ul className='ulnavleft'>
                                <li>
                                    <Link to="/manage-profile">
                                        <a className='active'><i class="fa fa-sliders"></i> Manage Profle <i class="fa fa-angle-right"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-order">
                                        <a><i class="fa fa-sliders"></i> My Order <i class="fa fa-angle-right"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-address">
                                        <a><i class="fa fa-sliders"></i> Address <i class="fa fa-angle-right"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/active-order">
                                        <a><i class="fa fa-sliders"></i> Active Order <i class="fa fa-angle-right"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <a><i class="fa fa-sign-out"></i> Logout <i class="fa fa-angle-right"></i></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='user-right-box'>
                        <div className='container'>
                            <div className='manage_profile'>
                                <h4 className='border-bottom pb-2 mt-3'>Manage Profile</h4>
                                <div className='manage-form'>
                                    <div className='row'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <div className="form-group">
                                                <label>First name</label>
                                                <input type="text" className="form-control" placeholder="first name"  />
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <div className="form-group">
                                                <label>Last name</label>
                                                <input type="text" className="form-control" placeholder="last name"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input type="text" className="form-control" placeholder="Email"  />
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <label>Password</label> 
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="Password"/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text"><i className='fa fa-key'></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control">
                                                <option value="">Select Country</option>
                                                    <option value="">Afghanistan</option>
                                                    <option value="">Albania</option>
                                                    <option value="">Algeria</option>
                                                    <option value="">American Samoa</option>
                                                    <option value="">Andorra</option>
                                                    <option value="">Angola</option>
                                                    <option value="">Anguilla</option>
                                                    <option value="">Antarctica</option>
                                                    <option value="">Antigua And Barbuda</option>
                                                    <option value="">Argentina</option>
                                                    <option value="">Armenia</option>
                                                    <option value="">Aruba</option>
                                                    <option value="">Australia</option>
                                                    <option value="">Austria</option>
                                                    <option value="">Azerbaijan</option>
                                                    <option value="">Bahamas The</option>
                                                    <option value="">Bahrain</option>
                                                    <option value="">Bangladesh</option>
                                                    <option value="">Barbados</option>
                                                    <option value="">Belarus</option>
                                                    <option value="">Belgium</option>
                                                    <option value="">Belize</option>
                                                    <option value="">Benin</option>
                                                    <option value="">Bermuda</option>
                                                    <option value="">Bhutan</option>
                                                    <option value="">Bolivia</option>
                                                    <option value="">Bosnia and Herzegovina</option>
                                                    <option value="">Botswana</option>
                                                    <option value="">Bouvet Island</option>
                                                    <option value="">Brazil</option>
                                                    <option value="">British Indian Ocean Territory</option>
                                                    <option value="">Brunei</option>
                                                    <option value="">Bulgaria</option>
                                                    <option value="">Burkina Faso</option>
                                                    <option value="">Burundi</option>
                                                    <option value="">Cambodia</option>
                                                    <option value="">Cameroon</option>
                                                    <option value="">Canada</option>
                                                    <option value="">Cape Verde</option>
                                                    <option value="">Cayman Islands</option>
                                                    <option value="">Central African Republic</option>
                                                    <option value="">Chad</option>
                                                    <option value="">Chile</option>
                                                    <option value="">China</option>
                                                    <option value="">Christmas Island</option>
                                                    <option value="">Cocos (Keeling) Islands</option>
                                                    <option value="">Colombia</option>
                                                    <option value="">Comoros</option>
                                                    <option value="">Congo</option>
                                                    <option value="">Congo The Democratic Republic Of The</option>
                                                    <option value="">Cook Islands</option>
                                                    <option value="">Costa Rica</option>
                                                    <option value="">Cote D'Ivoire (Ivory Coast)</option>
                                                    <option value="">Croatia (Hrvatska)</option>
                                                    <option value="">Cuba</option>
                                                    <option value="">Cyprus</option>
                                                    <option value="">Czech Republic</option>
                                                    <option value="">Denmark</option>
                                                    <option value="">Djibouti</option>
                                                    <option value="">Dominica</option>
                                                    <option value="">Dominican Republic</option>
                                                    <option value="">East Timor</option>
                                                    <option value="">Ecuador</option>
                                                    <option value="">Egypt</option>
                                                    <option value="">El Salvador</option>
                                                    <option value="">Equatorial Guinea</option>
                                                    <option value="">Eritrea</option>
                                                    <option value="">Estonia</option>
                                                    <option value="">Ethiopia</option>
                                                    <option value="">External Territories of Australia</option>
                                                    <option value="">Falkland Islands</option>
                                                    <option value="">Faroe Islands</option>
                                                    <option value="">Fiji Islands</option>
                                                    <option value="">Finland</option>
                                                    <option value="">France</option>
                                                    <option value="">French Guiana</option>
                                                    <option value="">French Polynesia</option>
                                                    <option value="">French Southern Territories</option>
                                                    <option value="">Gabon</option>
                                                    <option value="">Gambia The</option>
                                                    <option value="">Georgia</option>
                                                    <option value="">Germany</option>
                                                    <option value="">Ghana</option>
                                                    <option value="">Gibraltar</option>
                                                    <option value="">Greece</option>
                                                    <option value="">Greenland</option>
                                                    <option value="">Grenada</option>
                                                    <option value="">Guadeloupe</option>
                                                    <option value="">Guam</option>
                                                    <option value="">Guatemala</option>
                                                    <option value="">Guernsey and Alderney</option>
                                                    <option value="">Guinea</option>
                                                    <option value="">Guinea-Bissau</option>
                                                    <option value="">Guyana</option>
                                                    <option value="">Haiti</option>
                                                    <option value="">Heard and McDonald Islands</option>
                                                    <option value="">Honduras</option>
                                                    <option value="">Hong Kong S.A.R.</option>
                                                    <option value="">Hungary</option>
                                                    <option value="">Iceland</option>
                                                    <option value="">India</option>
                                                    <option value="">Indonesia</option>
                                                    <option value="">Iran</option>
                                                    <option value="">Iraq</option>
                                                    <option value="">Ireland</option>
                                                    <option value="">Israel</option>
                                                    <option value="">Italy</option>
                                                    <option value="">Jamaica</option>
                                                    <option value="">Japan</option>
                                                    <option value="">Jersey</option>
                                                    <option value="">Jordan</option>
                                                    <option value="">Kazakhstan</option>
                                                    <option value="">Kenya</option>
                                                    <option value="">Kiribati</option>
                                                    <option value="">Korea North</option>
                                                    <option value="">Korea South</option>
                                                    <option value="">Kuwait</option>
                                                    <option value="">Kyrgyzstan</option>
                                                    <option value="">Laos</option>
                                                    <option value="">Latvia</option>
                                                    <option value="">Lebanon</option>
                                                    <option value="">Lesotho</option>
                                                    <option value="">Liberia</option>
                                                    <option value="">Libya</option>
                                                    <option value="">Liechtenstein</option>
                                                    <option value="">Lithuania</option>
                                                    <option value="">Luxembourg</option>
                                                    <option value="">Macau S.A.R.</option>
                                                    <option value="">Macedonia</option>
                                                    <option value="">Madagascar</option>
                                                    <option value="">Malawi</option>
                                                    <option value="">Malaysia</option>
                                                    <option value="">Maldives</option>
                                                    <option value="">Mali</option>
                                                    <option value="">Malta</option>
                                                    <option value="">Man (Isle of)</option>
                                                    <option value="">Marshall Islands</option>
                                                    <option value="">Martinique</option>
                                                    <option value="">Mauritania</option>
                                                    <option value="">Mauritius</option>
                                                    <option value="">Mayotte</option>
                                                    <option value="">Mexico</option>
                                                    <option value="">Micronesia</option>
                                                    <option value="">Moldova</option>
                                                    <option value="">Monaco</option>
                                                    <option value="">Mongolia</option>
                                                    <option value="">Montserrat</option>
                                                    <option value="">Morocco</option>
                                                    <option value="">Mozambique</option>
                                                    <option value="">Myanmar</option>
                                                    <option value="">Namibia</option>
                                                    <option value="">Nauru</option>
                                                    <option value="">Nepal</option>
                                                    <option value="">Netherlands Antilles</option>
                                                    <option value="">Netherlands The</option>
                                                    <option value="">New Caledonia</option>
                                                    <option value="">New Zealand</option>
                                                    <option value="">Nicaragua</option>
                                                    <option value="">Niger</option>
                                                    <option value="">Nigeria</option>
                                                    <option value="">Niue</option>
                                                    <option value="">Norfolk Island</option>
                                                    <option value="">Northern Mariana Islands</option>
                                                    <option value="">Norway</option>
                                                    <option value="">Oman</option>
                                                    <option value="">Pakistan</option>
                                                    <option value="">Palau</option>
                                                    <option value="">Palestinian Territory Occupied</option>
                                                    <option value="">Panama</option>
                                                    <option value="">Papua new Guinea</option>
                                                    <option value="">Paraguay</option>
                                                    <option value="">Peru</option>
                                                    <option value="">Philippines</option>
                                                    <option value="">Pitcairn Island</option>
                                                    <option value="">Poland</option>
                                                    <option value="">Portugal</option>
                                                    <option value="">Puerto Rico</option>
                                                    <option value="">Qatar</option>
                                                    <option value="">Reunion</option>
                                                    <option value="">Romania</option>
                                                    <option value="">Russia</option>
                                                    <option value="">Rwanda</option>
                                                    <option value="">Saint Helena</option>
                                                    <option value="">Saint Kitts And Nevis</option>
                                                    <option value="">Saint Lucia</option>
                                                    <option value="">Saint Pierre and Miquelon</option>
                                                    <option value="">Saint Vincent And The Grenadines</option>
                                                    <option value="">Samoa</option>
                                                    <option value="">San Marino</option>
                                                    <option value="">Sao Tome and Principe</option>
                                                    <option value="">Saudi Arabia</option>
                                                    <option value="">Senegal</option>
                                                    <option value="">Serbia</option>
                                                    <option value="">Seychelles</option>
                                                    <option value="">Sierra Leone</option>
                                                    <option value="">Singapore</option>
                                                    <option value="">Slovakia</option>
                                                    <option value="">Slovenia</option>
                                                    <option value="">Smaller Territories of the UK</option>
                                                    <option value="">Solomon Islands</option>
                                                    <option value="">Somalia</option>
                                                    <option value="">South Africa</option>
                                                    <option value="">South Georgia</option>
                                                    <option value="">South Sudan</option>
                                                    <option value="">Spain</option>
                                                    <option value="">Sri Lanka</option>
                                                    <option value="">Sudan</option>
                                                    <option value="">Suriname</option>
                                                    <option value="">Svalbard And Jan Mayen Islands</option>
                                                    <option value="">Swaziland</option>
                                                    <option value="">Sweden</option>
                                                    <option value="">Switzerland</option>
                                                    <option value="">Syria</option>
                                                    <option value="">Taiwan</option>
                                                    <option value="">Tajikistan</option>
                                                    <option value="">Tamilnadu</option>
                                                    <option value="">Tanzania</option>
                                                    <option value="">Thailand</option>
                                                    <option value="">Togo</option>
                                                    <option value="">Tokelau</option>
                                                    <option value="">Tonga</option>
                                                    <option value="">Trinidad And Tobago</option>
                                                    <option value="">Tunisia</option>
                                                    <option value="">Turkey</option>
                                                    <option value="">Turkmenistan</option>
                                                    <option value="">Turks And Caicos Islands</option>
                                                    <option value="">Tuvalu</option>
                                                    <option value="">Uganda</option>
                                                    <option value="">Ukraine</option>
                                                    <option value="">United Arab Emirates</option>
                                                    <option value="">United Kingdom</option>
                                                    <option value="">United States</option>
                                                    <option value="">United States Minor Outlying Islands</option>
                                                    <option value="">Uruguay</option>
                                                    <option value="">Uzbekistan</option>
                                                    <option value="">Vanuatu</option>
                                                    <option value="">Vatican City State (Holy See)</option>
                                                    <option value="">Venezuela</option>
                                                    <option value="">Vietnam</option>
                                                    <option value="">Virgin Islands (British)</option>
                                                    <option value="">Virgin Islands (US)</option>
                                                    <option value="">Wallis And Futuna Islands</option>
                                                    <option value="">Western Sahara</option>
                                                    <option value="">Yemen</option>
                                                    <option value="">Yugoslavia</option>
                                                    <option value="">Zambia</option>
                                                    <option value="">Zimbabwe</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                                            <label>State</label> 
                                            <select className="form-control">
                                                <option selected value>Select State</option>
                                                <option value="">Andaman and Nicobar Islands</option>
                                                <option value="">Andhra Pradesh</option>
                                                <option value="">Assam</option>
                                                <option value="">Bihar</option>
                                                <option value="">Chandigarh</option>
                                                <option value="">Chandigarh</option>
                                                <option value="">Chattisgarh</option>
                                                <option value="">CHENNAI</option>
                                                <option value="">Chhatisgarh</option>
                                                <option value="">Chhatisgrah</option>
                                                <option value="">Chhattisgarh</option>
                                                <option value="">Dadra &amp; Nagar Haveli</option>
                                                <option value="">Dadra and Nagar Haveli</option>
                                                <option value="">Daman</option>
                                                <option value="">Daman &amp; Diu</option>
                                                <option value="">Delhi</option>
                                                <option value="">Goa</option>
                                                <option value="">Gujarat</option>
                                                <option value="">Haryana</option>
                                                <option value="">Himachal Pradesh</option>
                                                <option value="">Jammu &amp; Kashmir</option>
                                                <option value="">Jammu and Kashmir</option>
                                                <option value="">Jammu kashmir</option>
                                                <option value="">Jharkhand</option>
                                                <option value="">Karnataka</option>
                                                <option value="">Kenmore</option>
                                                <option value="">Kerala</option>
                                                <option value="">Lakshadweep</option>
                                                <option value="">Madhya Pradesh</option>
                                                <option value="">Maharashtra</option>
                                                <option value="">Maharasthra</option>
                                                <option value="">Manipur</option>
                                                <option value="">Meghalaya</option>
                                                <option value="">Mizoram</option>
                                                <option value="">Nagaland</option>
                                                <option value="">Narora</option>
                                                <option value="">Natwar</option>
                                                <option value="">Odisha</option>
                                                <option value="">Orissa</option>
                                                <option value="">Paschim Medinipur</option>
                                                <option value="">Patiala</option>
                                                <option value="">Patiala</option>
                                                <option value="">Pondicherry</option>
                                                <option value="">Puducherry</option>
                                                <option value="">Punjab</option>
                                                <option value="">Rajasthan</option>
                                                <option value="">Sikkim</option>
                                                <option value="">Tamil Nadu</option>
                                                <option value="">Tamilnadu</option>
                                                <option value="">Telangana</option>
                                                <option value="">Tripura</option>
                                                <option value="">Uttar Pradesh</option>
                                                <option value="">Uttarakhand</option>
                                                <option value="">UTTARANCHAL</option>
                                                <option value="">Vaishali</option>
                                                <option value="">West Bengal</option>
                                                <option value="">WESTBENGAL</option>
                                            </select>

                                        </div>
                                        <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                                            <label>City</label> 
                                           <select className="form-control">
                                                <option selected value>Select City</option>
                                                <option value="">BAHADURGARH</option>
                                                <option value="">Delhi</option>
                                                <option value="">Delhi NCR</option>
                                                <option value="">JHAJJAR</option>
                                                <option value="">New Delhi</option>
                                                <option value="">PASCHIM VIHAR</option>
                                                <option value="">SAHIBABAD</option>
                                                <option value="">SASNI</option>
                                            </select>

                                        </div>
                                    </div>
                                    <label>Contact Number</label> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <select className="country_code">
                                                    <option value="">+091</option>
                                                    <option value="">+092</option>
                                                    <option value="">+093</option>
                                                    <option value="">+094</option>
                                                </select>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="contact number"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                            <div className='manage_pro'>
                                                <button type='submit' className='btn btn-danger'>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='clearfix'></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Mangeprofile;