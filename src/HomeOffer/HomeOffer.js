import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeOffer.css'

const HomeOffer = (props) => {
    const { id, title, instructor, img, price, country, description } = props.offer;
    return (
        <div className="col-lg-4 mt-4">
            <Col className=" text-center">
                <Card
                    className=" p-4 shadow-lg rounded-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h4 className="fw-bold">{title}</h4>
                        <h5>Instructor: {instructor}</h5>
                        <p>Description: {description}</p>
                        <h5>Country: {country}</h5>
                        <h5>Price: <i className="fas fa-dollar-sign"></i> {price}</h5>
                        <Link className="btn btn-primary my-2 shadow" to={`/services/${id}`}>Buy Now</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default HomeOffer;