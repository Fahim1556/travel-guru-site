import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css';




const Place = (props) => {
    const {name, image} = props.data;
    return (
        <div className="container">
           <div>
           <Link to="/book"><img fluid className="card" src={image} alt=""/></Link>
           <h2 className="title">{name}</h2>
           </div>
            
        </div>
    );
};

export default Place;