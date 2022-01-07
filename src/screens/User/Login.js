import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/user.css';

import Footer from '../../components/Footer';
import TopNavigation from '../../components/TopNavigation';
import SignupUser from './SignupUser';

function Login(props) {
    return (
        <div>
            <TopNavigation/>
            <div className="login my-3" style={{minHeight:"630px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-col-sm-6 col-md-6 col-lg-6">
                            <div id="usr-logn-form" className="mt-4">
                                <div className="col-12 col-col-sm-12 col-md-12 col-lg-12">
                                    <div className="text-center mt-3">
                                        <a className="user_login"><i className="fa fa-user"></i> User Login</a>
                                    </div>
                                </div>
                                
                                <form action>
                                    <div className="form-group mt-5">
                                        <label>Enter Your Email Address</label>
                                        <input type="text" className="form-control" placeholder="Email"  />
                                    </div>
                                    <label>Enter Your Password</label> 
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Password"/>
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i className='fa fa-key'></i></span>
                                        </div>
                                    </div>
                                    <p className="small"><a className="text-primary">Forgot Password ?</a></p>

                                    <Link to="manage-profile" className="btn btn-warning font-weight-bold">SIGN IN</Link>
                                    
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-col-sm-6 col-md-6 col-lg-6">
                            <div id="usr-signup-form" className="mt-4">
                                <div className="col-12 col-col-sm-12 col-md-12 col-lg-12">
                                    <div className="text-center mt-3">
                                        <a className="user_login"><i className="fa fa-user"></i> User Sign Up</a>
                                    </div>
                                </div>
                                
                           <SignupUser/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;