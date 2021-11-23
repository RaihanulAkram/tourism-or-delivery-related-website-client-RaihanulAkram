import React from 'react';
import AboutImg from "../../../../slide/slide2-1280-853.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="container-fluid mx-auto">
            <img className="img-fluid mt-2 w-100" src={AboutImg} alt="" />
            <div className="container-fluid text-center custom bg-dark">
                <h2>About Us</h2>
                <p>Welcome to TourX, the world's largest professional travel agency based in Los Angeles. We provide our awesome services in more than 200 countries and territories worldwide.</p>
                <h3>Who are we?</h3>
                <p>TourX was officially launched on August 5, 1999 in New York.</p>
                <p>Today, we leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of John Howkins.</p>
            </div>
        </div>
    );
};

export default About;