import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container-fluid py-5 mt-5 col-md-11 col-lg-12 bg-dark w-100">
            <h2 className='text-center text-primary text-light'>Contact With Us</h2>
            <div className="mt-5"></div>
            <Form className="my-2 py-2">
                <Row className="text-light">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="text-light">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control placeholder="Write Your Message" />
                </Form.Group>

                <Form.Group className="text-light" controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St, Apartment, studio, or floor" />
                </Form.Group>

                <Row className="text-light">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose State</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Boston</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <div className="text-center">


                    <Button className="btn btn-light text-dark mt-5" type="submit">
                        Submit
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default Contact;