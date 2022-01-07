import { Container, Col, Nav, Navbar } from "react-bootstrap";
import easyhrie from "../assets/image/easyhrie.png";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function TopNavigation() {
  let location = useLocation();
  console.log(location.pathname);
  // const [activeTab, setActiveTab] = useState('home')
  // color: rgb(237, 89, 34);
  // color:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="tp-header text-right mb-2">
        <i className="fa fa-mobile" aria-hidden="true"></i> Download Free App{" "}
        <span>
          <i className="fa fa-phone fp" aria-hidden="true"></i> 8000500400
        </span>
      </div>

      <Navbar
        className=" nab-navbar-bt m-2"
        expand="lg"
        style={{ height: "50px" }}
      >
        <Col md={4} lg={4} className="mb-4">
          <Link to="/">
            <img
              src={easyhrie}
              height="100px"
              style={{ padding: "13px" }}
              alt=""
            />
          </Link>
        </Col>

        <Col md={8} lg={8}>
          <Navbar.Toggle className="test" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto  navbar-right-tp ">
              <Link
                exact
                to="/"
                className={location.pathname === "/" ? "navactive_link" : ""}
              >
                Home
              </Link>
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Link
                exact
                to="/about"
                className={
                  location.pathname === "/about" ? "navactive_link" : ""
                }
              >
                About
              </Link>
              <Link
                exact
                to="/register-company"
                className={
                  location.pathname === "/register-company"
                    ? "navactive_link"
                    : ""
                }
              >
                Register Your Company
              </Link>
              <Link to="/">Register Job Seeker</Link>
              <Link
                exact
                to="/membership"
                className={
                  location.pathname === "/membership" ? "navactive_link" : ""
                }
              >
                Membership
              </Link>
              <Link exact to="/">
                Banner
              </Link>
            </Nav>
            <button className="btn-login" onClick={handleShow}>
              Login
            </button>
          </Navbar.Collapse>
        </Col>
      </Navbar>
      <div class="tb-header mt-4 ">
        <ul class="tb-nav ">
          <li>
            <Link
              to="/hotel-booking-home"
              className={
                location.pathname === "/hotel-booking-home" ? "tbactive" : ""
              }
            >
              HOTELS
            </Link>
          </li>
          <li>
            <Link
              to="/property"
              className={location.pathname === "/property" ? "tbactive" : ""}
            >
              PROPERTY
            </Link>
          </li>
          <li>
            <Link
              to="/machinery-home"
              className={
                location.pathname === "/machinery-home" ? "tbactive" : ""
              }
            >
              HIRE MACHINERY & OTHERS
            </Link>
          </li>
          <li>
            <Link
              to="freelancer-home"
              className={
                location.pathname === "/freelancer-home" ? "tbactive" : ""
              }
            >
              HIRE FREELANCER
            </Link>
          </li>
          <li>
            <Link
              to="/jobseeker-Home"
              className={
                location.pathname === "/jobseeker-Home" ? "tbactive" : ""
              }
            >
              HIRE JOB SEEKER
            </Link>
          </li>
          <li>
            <Link
              to="job-provider"
              className={
                location.pathname === "/job-provider" ? "tbactive" : ""
              }
            >
              APPLY JOBS
            </Link>
          </li>
          <li>
            <Link
              to="maintaince-home"
              className={
                location.pathname === "/maintaince-home" ? "tbactive" : ""
              }
            >
              HIRE MAINTENANCE COMPANY
            </Link>
          </li>
          <li>
            <Link
              to="home-service"
              className={
                location.pathname === "/home-service" ? "tbactive" : ""
              }
            >
              HIRE HOME SERVICES
            </Link>
          </li>
          <div class="clr"></div>
        </ul>
        <div class="clr"></div>

        <div class="clr"></div>
      </div>
      <Modal show={show} onHide={handleClose} className="modal right fade">
        <Modal.Header>
          <Modal.Title>Sign in</Modal.Title>
          <Button variant="danger" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className=" form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="">
              <label htmlFor="">
                <a href="#"> Forget Your Password ?</a>
              </label>
            </div>
            <Link to="manage-profile" className="btn btn-warning text-white">
              Sign in
            </Link>
          </form>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "space-between" }}>
          <Link to="login" className="btn btn-success text-white">
            User Login
          </Link>
          <Link to="/register-company" className="btn btn-danger text-white">
            Merchant Login
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TopNavigation;
