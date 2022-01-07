import React from 'react';
import { Link, Redirect } from "react-router-dom";
import logo from '../../assets/image/easyhrie.png';
import Footer from '../../components/Footer';

function Activeorder(props) {
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
                                        <a><i class="fa fa-sliders"></i> Manage Profle <i class="fa fa-angle-right"></i></a>
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
                                        <a className='active'><i class="fa fa-sliders"></i> Active Order <i class="fa fa-angle-right"></i></a>
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
                                <h4 className='border-bottom pb-2 mt-3'>Active Order</h4>
                                <div className="activeorder">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="myorder-box">
                                                <label>Select Industry</label>
                                                <select className="form-control">
                                                    <option value="">Select Industry</option>
                                                    <option value="">Hotel</option>
                                                    <option value="">Property</option>
                                                    <option value="">Machinery & Other</option>
                                                    <option value="">Freelancer</option>
                                                    <option value="">Job Seeker</option>
                                                    <option value="">Apply Job</option>
                                                    <option value="">Maintaince Company</option>
                                                    <option value="">Home Service</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orders mt-3">
                                        <label>Active Orders</label>
                                        <div className="order-table">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Order Id</th>
                                                        <th>Order Date</th>
                                                        <th>OTP</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>OD345435454</td>
                                                        <td>15 Dec, 2021 1:45 PM</td>
                                                        <td>****</td>
                                                        <td><button type="button" className="btn btn-danger">View Detail</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Activeorder;