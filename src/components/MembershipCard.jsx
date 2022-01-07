import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function MembershipCard() {
    return (
        <>
        <Container>
      

	
        <div className="membership-d1">
        <h3>PLATINUM MEMBERSHIP</h3>
        <Row>
     <Col>
            <div className="membership-img">
                <img src="images/platinum-member-logo.png" alt="platinum" />
            </div>
        </Col>
       <Col md={8}>
            <div className="membership-d2">
                <h4>E-commerce - Starting a business online direct deal with consumers growth your business within 48 hours.</h4>
                <h2>Membership</h2>
                <p>More Information</p>
                <form action="" method="post">
                    <input type="hidden" name="type" value="PLATINUM" />
                    <button style={{fontWeight:"bold"}} type="submit" name="membership_payment" className="btn btn-danger">Subscribe Now</button>
                </form>
            </div>
            </Col>
        </Row>
        <Col md={12} className="ml-5">
            <div className="membership-d3">
                <ul>
                    <li>Control panel full access</li>
                    <li>24x7 support</li>
                    <li>Online sale your products</li>
                    <li>Unlimited changes in your company banner</li>
                    <li>Unlimited listing of your product</li>
                    <li>Complete access to control your page handling</li>
                </ul>
            </div>
        </Col>
        <div className="clr"></div>
    </div>
    
    </Container>
    </>
    )
}