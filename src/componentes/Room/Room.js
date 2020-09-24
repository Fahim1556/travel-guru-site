import React from 'react';
import { Col, Row } from 'react-bootstrap';
import star from '../../Image/Icon/star.png';
import './Room.css';


const Room = (props) => {
    const {name,bed,kitchen,flexibility,image,rating,price} = props.dataFake;
    return (

        <div className="container">
          <Row>
              <Col><img className="imgSize" fluid="fluid" src={image} alt=""/></Col>

              <Col>
                    <div className="RoomDetail">
                        <h6>{name}</h6>
                        <p>{bed}</p>
                        <p>{kitchen}</p>
                        <p>{flexibility}</p>

                        <img className="IconSize" src={star} alt=""/>
                        <span className="rating">{rating} </span>
                        <span className="rating">{price} night </span>
                    </div>
                </Col>
          
          </Row>
        </div>
       
    );
};

export default Room;