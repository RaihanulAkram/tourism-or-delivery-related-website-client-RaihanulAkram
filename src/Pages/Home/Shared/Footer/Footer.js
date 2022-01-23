import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <div className='text-center'>
                <h3 className="text-white text-center my-1"><NavLink className="f-link" to="/home">TravelX</NavLink></h3>
                <p className='text-white my-2'>Copyright &copy; TravelX 2021</p>
            </div>
        </div>
    );
};

export default Footer;