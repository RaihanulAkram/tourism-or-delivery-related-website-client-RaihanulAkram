import React from 'react';
import Banner from '../Banner/Banner';
import MenuBar from '../Shared/MenuBar/MenuBar';
import About from '../Shared/About/About';
import Contact from '../Shared/Contact/Contact';
import Mission from '../Shared/Mission/Mission';
import Footer from '../Shared/Footer/Footer';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Tours></Tours>
            <About></About>
            <Mission></Mission>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;