import React from 'react';
import { Link } from 'react-router-dom';
import './HomeOffer.css'

const HomeOffer = (props) => {
    const { id, title, instructor, img, price, country, description } = props.offer;
    return (
        <div className="height">
            <div className="offer">
                <img src={img} alt="" />
                <h4 className="fw-bold">{title}</h4>
                <h5>Instructor: {instructor}</h5>
                <p>Description: {description}</p>
                <h5>Country: {country}</h5>
                <h5>Price: <i className="fas fa-dollar-sign"></i> {price}</h5>
                <Link className="btn btn-primary my-2 shadow" to={`/services/${id}`}>Buy Now</Link>
            </div >
        </div>
    );
};

export default HomeOffer;