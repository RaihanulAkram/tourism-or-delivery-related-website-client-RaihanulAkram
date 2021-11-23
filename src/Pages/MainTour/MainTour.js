import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainTour = (props) => {
    const { _id, title, description, price, img } = props.tour;
    return (
        <div>
            <Col className=" text-center">
                <Card
                    className=" p-4 shadow-lg rounded-3">
                    <Card.Img src={img} />
                    <Card.Body>
                        <h4 className="fw-bold text-dark">{title}</h4>
                        <small>Id: {_id}</small>
                        <p>Description: {description}</p>
                        <h5 className="text-dark"> Price: <i className="fas fa-dollar-sign"></i> {price}</h5>
                        <Link className="btn btn-dark my-2 shadow" to={`/placeOrder/${_id}`}>Buy Now</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MainTour;