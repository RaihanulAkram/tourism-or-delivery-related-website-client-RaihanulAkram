import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Offer = (props) => {
    const { title, instructor, img, price, country, description } = props.offer;
    return (
        <div>
            <Col className="text-center">
                <Card className="shadow-lg rounded-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h2>{title}</h2>
                        <h5>Instructor: {instructor}</h5>
                        <p>Description: {description}</p>
                        <h5>Country: {country}</h5>
                        <h5>Price: <i className="fas fa-dollar-sign"></i> {price}</h5>
                        <NavLink to="/services" className="btn btn-primary my-2 shadow">Add to Cart</NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Offer;