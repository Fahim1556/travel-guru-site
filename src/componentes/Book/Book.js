import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Image/Icon/Logo.png';
import { Button, Col, Container, FormControl, Nav, Row,Form,Navbar } from 'react-bootstrap';
import './Book.css';


const Book = () => {
    return (

        <div className="bg-part">
                 <div className="container">
                   <Navbar collapseOnSelect="collapseOnSelector" expand="sm" variant="dark">
                   <Link to="/home"> <Navbar.Brand href="#home" ><img className="logo" src={Logo} fluid="fluid" alt=""/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                      <Form inline>
                         <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2 formScarch"/>
                        </Form>
                      </Nav>
                      <Nav className="font">
                            <Nav.Link className="navAncors" href="#news">News</Nav.Link>
                            <Nav.Link className="navAncors" href="#destination">Destination</Nav.Link>
                            <Nav.Link className="navAncors" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="navAncors" href="#contract">Contract</Nav.Link>
                           <Link to="/login"> <Button className="login" variant="warning">Login</Button></Link>
                     </Nav>
                      </Navbar.Collapse>
                   </Navbar>

                   <div className="container">
               
                   <Container>
                      <Row>
                        <Col>
                            <div className="leftside">
                               <h2>COX'S BAZAR</h2>
                               <p>Cox's Baxar is a city ,finishing port, tourism center and district headquater in souththeastern     Bangladesh .it is famous mostly for its long natural sandy beach.</p>
                            </div>
                        </Col>

                        <Col>
                        <div className="booking">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                     <h4>Origin</h4>
                                    <Form.Control type="text" placeholder="Name"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <h4>Destination</h4>
                                    <Form.Control type="text" placeholder="Destination"/>
                                </Form.Group>


                                <Form.Group controlId="formBasicCheckbox">
                                <Row>
                                    <Col>
                                        <h5>From</h5>
                                        <input type="date" id=""/>
                                    </Col>

                                     <Col>
                                        <h5>To</h5>
                                        <input type="date" id=""/>
                                    </Col>
                                   </Row>
                                 </Form.Group>

                                <Link to="/hotelInfo">
                                    <Button className="stat-booking" variant="warning"  type="submit"> Start Booking</Button>
                                </Link>
                            </Form>
                        </div>
                    </Col>  
                      </Row>
                   </Container> 

                 </div>

              </div>

              </div>
                 
    );
};

export default Book;