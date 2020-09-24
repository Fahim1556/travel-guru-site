import React, { useState } from 'react';
import './Header.css';
import { Link }  from 'react-router-dom';
import Logo from '../../Image/Icon/Logo.png';
import { Button, Col, Container, FormControl,Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FakeData from '../../FakeData/fakeData';
import Home from '../Home/Home';






 const Header = () => {
    const [ fakeData, setFakeData ] =useState(FakeData);
    return (
            <div className="bg-part">
                 <div className="container">
                   <Navbar collapseOnSelect="collapseOnSelector" expand="lg" variant="dark">
                   <Link to="/home"> <Navbar.Brand href="#home" ><img className="logo" src={Logo} fluid="fluid" alt=""/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                      <Form inline>
                         <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2 formScarch"/>
                        </Form>
                      </Nav>
                      <Nav className="font">
                            <Nav.Link className="navText" href="#news">News</Nav.Link>
                            <Nav.Link className="navText" href="#destination">Destination</Nav.Link>
                            <Nav.Link className="navText" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="navText " href="#contract">Contract</Nav.Link>
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
                               <Link to="/book"><Button className="login" variant="warning">Booking --></Button></Link>
                            </div>
                        </Col>

                        <Col>
                        
                           <Home/> 
                        
                        </Col>
                        
                      </Row>
                   </Container> 

                 </div>
                 
                  <div className="right-part">
                  
                  </div>
                  

                  </div>  
            </div>
           //     <div style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="navbar">
    );
};

export default Header;