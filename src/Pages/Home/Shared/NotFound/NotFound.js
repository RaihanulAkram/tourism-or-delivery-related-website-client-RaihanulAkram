import React from 'react';
import './NotFound.css'
import Not_Found from '../../../../NotFound/NotFound.jpg'

const NotFound = () => {
    return (
        <div className="container center mt-3">
            <h1 className="found mb-2 text-dark">Page Not Found</h1>
            <div className="text-center mb-5">

                <img className="img-fluid my-5 center" src={Not_Found} alt="" />
            </div>
        </div>
    );
};

export default NotFound;