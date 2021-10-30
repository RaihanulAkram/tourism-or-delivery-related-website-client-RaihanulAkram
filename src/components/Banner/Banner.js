import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../slide-img/slide1-1280-550.jpg';
import slide2 from '../../slide-img/slide4-1280-550.jpg';
import slide3 from '../../slide-img/slide3-1280-550.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Power tainning with heavy weight</h1>
                        <p>Pain is weekness leaving the body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Dumbble lifting</h1>
                        <p>A winner never whines.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Heavy heavy lifting</h1>
                        <p>Never say the sky’s the limit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;