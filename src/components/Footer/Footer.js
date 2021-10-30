import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <div className='text-center'>
                <h2 className="text-white text-center"><NavLink className="link" to="/home">TravelX</NavLink></h2>
                <div className='my-2'>
                    <NavLink className="link align2" to="/home">Home</NavLink>
                    <NavLink className="link align2" to="/about">About</NavLink>
                    <NavLink className="link align2" to="/services">Offers</NavLink>
                    <NavLink className="link align2" to="/contact">Contact</NavLink>
                </div>
                <p className='text-white'>Copyright &copy; TravelX 2021</p>
            </div>
        </div>
    );
};

export default Footer;