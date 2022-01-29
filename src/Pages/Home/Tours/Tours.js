import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const slicedTours = tours.slice(0, 6);
    useEffect(() => {
        fetch('https://arcane-river-07706.herokuapp.com/allTours')
            .then(res => res.json())
            .then(data => {
                setTours(data)
                setIsLoading(false)

            })
    }, [])
    //spinner
    if (isLoading) {
        return (<div class="d-flex justify-content-center my-5">
            <div class="spinner-border" role="status">

            </div>
        </div>
        )
    }
    return (
        <div>
            <div className="container text-center my-5">
                <h1 className="text-dark">Explore Our Tours</h1>
                <Row xs={1} md={3} className
                    ="g-4 my-3">
                    {
                        slicedTours.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        ></Tour>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Tours;