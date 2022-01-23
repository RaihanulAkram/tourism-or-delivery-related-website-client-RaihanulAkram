import React from 'react';
import Banner from '../Banner/Banner';
import About from '../Shared/About/About';
import Contact from '../Shared/Contact/Contact';
import Mission from '../Shared/Mission/Mission';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <About></About>
            <Mission></Mission>
            <Contact></Contact>
        </div>
    );
};

export default Home;