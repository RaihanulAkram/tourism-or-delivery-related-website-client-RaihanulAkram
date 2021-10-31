import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../../Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState
        ([]);
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
                    offers.map(offer => <Offer
                        key={offer.id}
                        offer={offer}
                    ></Offer>)
                }
            </Row>
        </div>
    );
};

export default Offers;