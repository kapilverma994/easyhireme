import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Accordion } from 'react-accordion-collapsible'
import "react-datepicker/dist/react-datepicker.css";
import { Link, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from '../../assets/image/easyhrie.png';
import Footer from "../../components/Footer";

function Myorder(props) {
    const [startDate, setStartDate] = useState(new Date());
    const[Orderid, setOrderid]=useState(false)
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
                                        <a className='active'><i class="fa fa-sliders"></i> My Order <i class="fa fa-angle-right"></i></a>
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
                                <h4 className='border-bottom pb-2 mt-3'>My Order</h4>
                                <div className="myorder">
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
                                    <div className="my-2"><strong>Account Transaction</strong></div>
                                    <div className="searc">
                                        <div className="row">
                                            <div className="col-12 col-sm-9 col-md-9 col-9">
                                                <label>Search</label>
                                                <div className="row">
                                                    <div className="col-5 col-sm-5 col-md-5 col-5">
                                                        <div className="search-date">
                                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-2 col-md-2 col-2">
                                                        <div className="text-center pt-2"><strong>To</strong></div>
                                                    </div>
                                                    <div className="col-5 col-sm-5 col-md-5 col-5">
                                                        <div className="search-date">
                                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <label><strong>Select Account</strong></label>
                                                    <div className="row">
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                            <div className="radio_btn">
                                                                <input type="radio" name="radio" checked/> COD
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                            <div className="radio_btn">
                                                                <input type="radio"  name="radio"/> Online
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-3 col-md-3 col-3">
                                                <div className="coupon text-center">
                                                    <div className="text-danger"><strong>Coupon Transaction</strong></div>
                                                    <div className="">
                                                        <select>
                                                            <option value="">10</option>
                                                            <option value="">20</option>
                                                            <option value="">50</option>
                                                            <option value="">100</option>
                                                        </select>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button type="button" className="btn btn-danger">Clear Filter</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                                                <div className="bookinglist_box text-center p-3">
                                                    <div className="row">
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <Link to="/my-order">
                                                                <div className="mb-0">New Order</div>
                                                            </Link>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <Link to="/accept-order">
                                                                <div className="mb-0">Accept Order</div>
                                                            </Link>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <Link to="/complete-order">
                                                                <div className="mb-0">Complete Order</div>
                                                            </Link>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <Link to="/total-order">
                                                                <div className="mb-0">Total Order</div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bookinglist_box1 mt-3 text-center">
                                                    <div className="row">
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <div className="bkb1">
                                                                <div className="bkb2">
                                                                    <i class="fa fa-building"></i>
                                                                    <span><i class="fa fa-bell fa-fw"></i></span>
                                                                </div>
                                                                <div>(21)</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <div className="bkb1">
                                                                <div className="bkb2">
                                                                    <i class="fa fa-building"></i>
                                                                    <span><i class="fa fa-bell fa-fw"></i></span>
                                                                </div>
                                                                <div>(11)</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <div className="bkb1">
                                                                <div className="bkb2">
                                                                    <i class="fa fa-building"></i>
                                                                    <span><i class="fa fa-bell fa-fw"></i></span>
                                                                </div>
                                                                <div>(11)</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 col-sm-3 col-md-3">
                                                            <div className="bkb1">
                                                                <div className="bkb2">
                                                                    <i class="fa fa-building"></i>
                                                                    <span><i class="fa fa-bell fa-fw"></i></span>
                                                                </div>
                                                                <div>(9)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-12">
                                                <div class="mt-3 accordion_box">
                                                    <div id="accordion" class="accordion">
                                                        <div class="card mb-0">
                                                            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                                                <a class="card-title">
                                                                    <span>Cp Singh</span> <span>Delhi</span> <span>Order 1</span>
                                                                </a>
                                                            </div>
                                                            <div id="collapseOne" class="card-body collapse" data-parent="#accordion" >
                                                                <div className="bookinglist_box2 mt-3 py-2">
                                                                    <div className="row">
                                                                        <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                            <div className="order_id">
                                                                                <div className=""><strong>Order Id</strong></div>
                                                                                <div className="OD">OD1606466544683</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Company Name</strong></div>
                                                                                <div className="ph"><i class="fa fa-phone-square"></i> 56873147</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className="email"><strong>company@gmail.com</strong></div>
                                                                                <div className="cod">
                                                                                    COD(AED) : 42.18
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Room No.</strong></div>
                                                                                <div className="ph">5687</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Service Name</strong></div>
                                                                                <div className="ph">Cleaning</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Servive Type</strong></div>
                                                                                <div className="ph">Room Cleaning</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Check in Date</strong></div>
                                                                                <div className="ph">12/11/2021</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Check out Date</strong></div>
                                                                                <div className="ph">15/11/2021</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 pl-1 text-right view_btn">
                                                                            <div className="">
                                                                                <button onClick={()=>setOrderid(true)} type="button" className="btn btn-danger btn-sm">View Order</button>
                                                                            </div>
                                                                            <div className="mt-2">
                                                                                <button type="button" className="btn btn-primary btn-sm">Visit Site</button>
                                                                            </div>
                                                                            <div className="mt-2">
                                                                                <button type="button" className="btn btn-success btn-sm">Service Done</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="trak_id mt-2 p-2">
                                                                        <div className="row">
                                                                            <div className="col-4 col-sm-4 col-md-4">
                                                                                <div className="track_id1">
                                                                                    <label>Track Id</label>
                                                                                    <input type="text" className="form-control" placeholder=" 878"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-8 col-sm-8 col-md-8 pl-0 text-right">
                                                                                <div className="track_id1">
                                                                                    <label>Ordered At : 11 months ago</label>
                                                                                    <div className="">
                                                                                        <button type="button" className="accetp_btn" disabled>Accept booking</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                                <a class="card-title">
                                                                <span>Mohit Sharma</span> <span>Delhi</span> <span>Order 2</span>
                                                                </a>
                                                            </div>
                                                            <div id="collapseTwo" class="card-body collapse" data-parent="#accordion" >
                                                            <div className="bookinglist_box2 mt-3 py-2">
                                                                    <div className="row">
                                                                        <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                            <div className="order_id">
                                                                                <div className=""><strong>Order Id</strong></div>
                                                                                <div className="OD">OD1606466544683</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Company Name</strong></div>
                                                                                <div className="ph"><i class="fa fa-phone-square"></i> 56873147</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className="email"><strong>company@gmail.com</strong></div>
                                                                                <div className="cod">
                                                                                    COD(AED) : 42.18
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Room No.</strong></div>
                                                                                <div className="ph">5687</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Service Name</strong></div>
                                                                                <div className="ph">Cleaning</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Servive Type</strong></div>
                                                                                <div className="ph">Room Cleaning</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Check in Date</strong></div>
                                                                                <div className="ph">12/11/2021</div>
                                                                            </div>
                                                                            <div className="order_name">
                                                                                <div className=""><strong>Check out Date</strong></div>
                                                                                <div className="ph">15/11/2021</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 pl-1 text-right view_btn">
                                                                            <div className="">
                                                                                <button onClick={()=>setOrderid(true)} type="button" className="btn btn-danger btn-sm">View Order</button>
                                                                            </div>
                                                                            <div className="mt-2">
                                                                                <button type="button" className="btn btn-primary btn-sm">Visit Site</button>
                                                                            </div>
                                                                            <div className="mt-2">
                                                                                <button type="button" className="btn btn-success btn-sm">Service Done</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="trak_id mt-2 p-2">
                                                                        <div className="row">
                                                                            <div className="col-4 col-sm-4 col-md-4">
                                                                                <div className="track_id1">
                                                                                    <label>Track Id</label>
                                                                                    <input type="text" className="form-control" placeholder=" 878"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-8 col-sm-8 col-md-8 pl-0 text-right">
                                                                                <div className="track_id1">
                                                                                    <label>Ordered At : 11 months ago</label>
                                                                                    <div className="">
                                                                                        <button type="button" className="accetp_btn" disabled>Accept booking</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                                                <a class="card-title">
                                                                <span>Ajay Kumar</span><span>Delhi</span> <span>Order 3</span>
                                                                </a>
                                                            </div>
                                                            <div id="collapseThree" class="collapse" data-parent="#accordion" >
                                                                <div class="card-body">
                                                                    <div className="bookinglist_box2 mt-3 py-2">
                                                                        <div className="row">
                                                                            <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                                <div className="order_id">
                                                                                    <div className=""><strong>Order Id</strong></div>
                                                                                    <div className="OD">OD1606466544683</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                    <div className=""><strong>Company Name</strong></div>
                                                                                    <div className="ph"><i class="fa fa-phone-square"></i> 56873147</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                    <div className="email"><strong>company@gmail.com</strong></div>
                                                                                    <div className="cod">
                                                                                        COD(AED) : 42.18
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-4 col-sm-4 col-md-4 pr-1">
                                                                                <div className="order_name">
                                                                                    <div className=""><strong>Room No.</strong></div>
                                                                                    <div className="ph">5687</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                <div className=""><strong>Service Name</strong></div>
                                                                                <div className="ph">Cleaning</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                    <div className=""><strong>Servive Type</strong></div>
                                                                                    <div className="ph">Room Cleaning</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                    <div className=""><strong>Check in Date</strong></div>
                                                                                    <div className="ph">12/11/2021</div>
                                                                                </div>
                                                                                <div className="order_name">
                                                                                    <div className=""><strong>Check out Date</strong></div>
                                                                                    <div className="ph">15/11/2021</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-4 col-sm-4 col-md-4 pl-1 text-right view_btn">
                                                                                <div className="">
                                                                                    <button onClick={()=>setOrderid(true)} type="button" className="btn btn-danger btn-sm">View Order</button>
                                                                                </div>
                                                                                <div className="mt-2">
                                                                                    <button type="button" className="btn btn-primary btn-sm">Visit Site</button>
                                                                                </div>
                                                                                <div className="mt-2">
                                                                                    <button type="button" className="btn btn-success btn-sm">Service Done</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="trak_id mt-2 p-2">
                                                                            <div className="row">
                                                                                <div className="col-4 col-sm-4 col-md-4">
                                                                                    <div className="track_id1">
                                                                                        <label>Track Id</label>
                                                                                        <input type="text" className="form-control" placeholder=" 878"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-8 col-sm-8 col-md-8 pl-0 text-right">
                                                                                    <div className="track_id1">
                                                                                        <label>Ordered At : 11 months ago</label>
                                                                                        <div className="">
                                                                                            <button type="button" className="accetp_btn" disabled>Accept booking</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

            {/*  modal */}
            {Orderid &&
            <div className="modal" id="Orderid" style={{display:'block', background:'#0003'}}>
                <div className="modal-dialog">
                    <div className="modal-content mdlcntnt">
                        {/* Modal Header */}
                        <div className="modal-header scrch py-1">
                            <h4 className="modal-title">Order Detail</h4>
                            <button onClick={()=>setOrderid(false)} type="button" className="cancel" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="orderbx">
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Order Id :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">OD5465463434</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Name :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">Company Name</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-3 col-sm-3">
                                            <label>Email :</label>
                                        </div>
                                        <div className="col-9 col-sm-3">
                                            <div className="">company@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Mobile :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">9865421500</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Service Type :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">Cleaning</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Service Name :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">Room Cleaning</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Service Date :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">27/11/2021</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Time :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">1:45:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Country :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">India</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>State :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">Uttar Pradesh</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>City :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">Moradabad</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label>Pincode :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="">244001</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box">
                                    <label>Address :</label>
                                    <div className="mb-3">Kanth Road Agwanpur Moradabad</div>
                                </div>
                                <div className="oder_box">
                                    <div className="row">
                                        <div className="col-4 col-sm-4">
                                            <div className="">
                                                <button type="button" className="btn btn-primary">Visit Site</button>
                                            </div>
                                        </div>
                                        <div className="col-8 col-sm-8">
                                            <div className="mt-2">27/11/2021 11:15:00 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box mt-3">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <div className="">
                                                <button type="button" className="btn btn-success">Sevice Done</button>
                                            </div>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="mt-2">27/11/2021 1:15:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box mt-3">
                                    <div className="row">
                                        <div className="col-5 col-sm-5">
                                            <label className="mt-2">Payment :</label>
                                        </div>
                                        <div className="col-7 col-sm-7">
                                            <div className="text-right">
                                                <button type="button" className="btn btn-primary">COD (AED) 42.18</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oder_box mt-3">
                                    <div className="text-right">
                                        <button onClick={()=>setOrderid(false)} type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <Footer/>
        </div>
    );
}

export default Myorder;