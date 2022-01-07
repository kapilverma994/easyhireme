import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SearchHotel() {
    return (
       <Container fluid>
        <div class="search-hotel-booking">
           <Row>
                <Col md={2}>
                    <div class="hotel-booking-chieckin">
                        <div class="hotel-booking-select">
                            <label>Check-in</label>
                            <div class="form-group">
                              <select class="form-control">
                                <option>4 Mar, Mon</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                        </div>
                        <div class="clr"></div>
                    </div>
               </Col>
               <Col md={2}>
                    <div class="hotel-booking-chieckin">
                        <div class="hotel-booking-select">
                            <label>Check-out</label>
                            <div class="form-group">
                              <select class="form-control">
                                <option>6 Mar, wed</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </Col>
                <Col md={2}>
                    <div class="hotel-booking-chieckin">
                        <div class="hotel-booking-select">
                            <label>Rooms/guests</label>
                            <div class="form-group">
                              <select class="form-control">
                                <option>1 Room, 2 Guests</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div class="hotel-booking-chieckin">
                        <div class="hotel-booking-select">
                            <label>Rooms/guests</label>
                            <input type="text" class="form-control" value=" Goa, India"/>
                        </div>
                        <div class="clr"></div>
                    </div>
                </Col>
                <Col md={2}>
                    <div class="hotel-booking-chieckin">
                        <div class="hotel-booking-select">
                            <button type="button" className="mb-2">Search</button>
                        </div>
                        <div class="clr"></div>
                    </div>
                </Col>
            </Row>
        </div>
</Container>
    )
}

export default SearchHotel