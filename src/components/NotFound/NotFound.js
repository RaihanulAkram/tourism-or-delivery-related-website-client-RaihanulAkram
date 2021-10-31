import React from 'react';
import notFound from '../../slide-img/not-found.jpg'

const NotFound = () => {
    return (
        <div className="container center mt-5">
            <h1 className="found mb-2 text-center">Page Not Found</h1>
            <div className="text-center mb-5">

                <img className="img-fluid my-5 center" src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;