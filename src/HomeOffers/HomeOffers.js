import React, { useEffect, useState } from 'react';
import './HomeOffers.css'
import HomeOffer from '../HomeOffer/HomeOffer';


const HomeOffers = () => {
    const [homeOffers, setHomeOffers] = useState([]);
    const offerSlice = homeOffers.slice(0, 6);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setHomeOffers(data))
    }, [])
    return (
        <div className=''>
            <div className="my-5">
                <h2 className="text-center my-5 text-primary">Our Services</h2>
                <div className="offer-container">
                    {
                        offerSlice.map(offer => <HomeOffer
                            key={offer.id}
                            offer={offer}
                        ></HomeOffer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeOffers;