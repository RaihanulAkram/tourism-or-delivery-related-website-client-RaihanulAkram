import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {

    const [tours, setTours] = useState({});
    const { user } = useAuth();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("https://arcane-river-07706.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset();

    };


    useEffect(() => {
        fetch(`https://arcane-river-07706.herokuapp.com/singleTours/${id}`)
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, [id]);

    return (
        <div className='container text-center col-lg-4 my-5'>
            <h2 className="text-center text-dark my-5">Tour Details</h2>
            <Col className='mx-auto w-75'>
                <Card
                    className=" p-4 shadow-lg rounded-3">
                    <Card.Img variant="top" src={tours.img} />
                    <Card.Body>
                        <h4 className="fw-bold">{tours?.title}</h4>
                        <p>Description: {tours.description}</p>
                        <h5>Price: <i className="fas fa-dollar-sign"></i> {tours.price}</h5>
                    </Card.Body>
                </Card>
            </Col>

            <h2 className="mt-5 mb-3 text-dark">Customer's Details</h2>


            <p className="text-center text-muted mb-2 fw-bold">Click on every input field before pressing Order Now button</p>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title")}
                        placeholder="Name"
                        defaultValue={tours.title}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("description")}
                        defaultValue={tours?.description}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        defaultValue={tours.img}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        defaultValue={tours.price}
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("name", { required: true })}
                        placeholder="Your Full Name"
                        defaultValue={user.displayName}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        defaultValue={user.email}
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("phone", { required: true })}
                        placeholder="Your Phone Number"
                        defaultValue=""
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("address", { required: true })}
                        placeholder="Your Full Address"
                        defaultValue=""
                        type="text"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("city", { required: true })}
                        placeholder="City"
                        defaultValue=""
                        type="text"
                        className="p-2 m-2 w-100 input-field"
                    />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <div>
                        <input
                            type="submit"
                            value="Order now"
                            className="btn btn-dark w-50"
                        />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PlaceOrder;