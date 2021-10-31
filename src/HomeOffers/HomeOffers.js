import React, { useEffect, useState } from 'react';
import './HomeOffers.css'
import HomeOffer from '../HomeOffer/HomeOffer';
import { Row } from 'react-bootstrap';


const HomeOffers = () => {
    const [offers, setOffers] = useState([]);
    const offerSlice = offers.slice(0, 6);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className="my-5">
            <h2 className="text-center my-5 text-primary">Our Offerings</h2>
            <Row xs={1} md={3} className="row g-4 container mx-auto h-100">
                {
                    offerSlice.map(offer => <HomeOffer
                        key={offer.id}
                        offer={offer}
                    ></HomeOffer>)
                }
            </Row>
        </div>
    );
};

export default HomeOffers;