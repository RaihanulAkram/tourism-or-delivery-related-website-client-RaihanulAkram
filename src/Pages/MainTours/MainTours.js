import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainTour from '../MainTour/MainTour';

const MainTours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/allTours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <div className="container text-center my-5">
                <h1 className="text-dark">Explore Our Tours</h1>
                <Row xs={1} md={3} className
                    ="g-4 my-3">
                    {
                        tours.map(tour => <MainTour
                            key={tour._id}
                            tour={tour}
                        ></MainTour>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default MainTours;