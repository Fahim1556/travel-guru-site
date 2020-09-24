import React from 'react';
import { Button, Col, Container, Nav,Navbar, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import mapScarch from '../../Image/mapScarch.png';
import Logo from '../../Image/Icon/Logo.png';
import hotelRoom1 from '../../Image/Rectangle 26.png';
import hotelRoom2 from '../../Image/Rectangle 27.png';
import hotelRoom3 from '../../Image/Rectangle 28.png';
import Room from '../Room/Room';
import './HotelInfo.css';


const HotelInfo = () => {

    const dataFake = [
        {
            name:"Light bright airy stylish apt & safe peaceful stay",
            bed:"4 guests, 2 bedrooms, 2 beds, 2 baths",
            kitchen:"Wif Air Conditioning Kitchen",
            flexibility: "Cancellation flexibility available",
            image:hotelRoom1,
            rating: "4.9(20)",
            price: "$34",
            mode:"night"
        },{
            name:"Apartment in Lost Panorama",
            bed:"4 guests, 2 bedrooms, 2 beds, 2 baths",
            kitchen:"Wif Air Conditioning Kitchen",
            flexibility: "Cancellation flexibility available",
            image:hotelRoom2,
            rating: "4.8(10)",
            price: "$52",
            mode:"night"
        },
        {
            name:"AR Lounge & Pool(r&r + b+b)",
            bed:"4 guests, 2 bedrooms, 2 beds, 2 baths",
            kitchen:"Wif Air Conditioning Kitchen",
            flexibility: "Cancellation flexibility available",
            image:hotelRoom3 ,
            rating: "4.9(25)",
            price: "$44",
            mode:"night"
        }
    ];
    return (
        <div className="container">
        <Container>
        <Navbar collapseOnSelect="collapseOnSelector" expand="sm" variant="dark">
        <Link to="/home"> <Navbar.Brand href="#home" ><img className="logo" src={Logo} fluid="fluid" alt=""/></Navbar.Brand></Link>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
           <Nav className="font">
                 <Nav.Link className="navText" href="#news">News</Nav.Link>
                 <Nav.Link className="navText" href="#destination">Destination</Nav.Link>
                 <Nav.Link className="navText" href="#blog">Blog</Nav.Link>
                 <Nav.Link className="navText" href="#contract">Contract</Nav.Link>
                <Link to="/login"> <Button className="login" variant="warning">Login</Button></Link>
          </Nav>
           </Navbar.Collapse>
         </Navbar>
           
         <Row>
                <Col>
                    <h6>252 Stays Apr 13-17 3 guests</h6>
                    <h4>Stay in Cox's Bazar</h4>
                     {
                         dataFake.map(dataFake => <Room dataFake ={dataFake}/>) 
                       
                     }
                </Col>
                <Col>
                   <img className="mapSize" src={mapScarch} alt=""/> 
                </Col>
            </Row>

      </Container>
 </div>
    );
};

export default HotelInfo;