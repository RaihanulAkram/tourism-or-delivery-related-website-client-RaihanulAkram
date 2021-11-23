import React from 'react';
import Banner from '../Banner/Banner';
import MenuBar from '../Shared/MenuBar/MenuBar';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Tours></Tours>
        </div>
    );
};

export default Home;