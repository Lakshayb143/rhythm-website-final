import {useState, useEffect} from 'react';
import slider1 from '../assets/images/slideshow1.jpeg';
import slider2 from '../assets/images/slideshow2.jpeg';
import slider3 from '../assets/images/slideshow3.jpeg';
import slider4 from '../assets/images/slideshow4.jpeg';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';

import location from '../assets/images/location.png';
import calendar from '../assets/images/calendar.png';
import fest from '../assets/images/fest.jpg';

const Body = () => {
    const height = window.innerHeight - 200;
    const width = window.innerWidth;
    const sliderImages = [
        {url: one},
        {url: two},
        {url: three},


        /*   { url: slider1 },
          { url: slider2 },
           { url: slider3 },
           { url: slider4 },*/
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="body-container" style={{height, width}}>
            {/* Image Slider */}
            <div
                className="slider-image"
                style={{
                    backgroundImage: `url(${sliderImages[currentIndex].url})`,
                    height,
                    width,
                }}
            />

            {/* Overlay */}
            <div className="overlay" style={{height}}></div>

            {/* Centered Text */}
                <h1 className="main-title " style={{ animationDuration: '5s' }}>RHYTHM'24</h1>
            <h3 className="sub-title">
                THE OFFICIAL CULTURAL FEST OF DCRUST , MURTHAL
            </h3>

            <div className="info-container">
                <div className="info-item">
                    <img src={calendar} alt="calendar icon" className="icon"/>
                    <h3 className="info-text">20-22 NOV'24</h3>
                </div>

                <div className="info-item">
                    <img src={location} alt="location icon" className="icon"/>
                    <a href="https://maps.app.goo.gl/oxnnvvosiebn7Pny8" target='_blank' rel="noopener noreferrer">
                        <h3 className="info-text underline">DCRUST, MURTHAL</h3>
                    </a>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_vN_3ZdKKT3lb5bs7ZlaQTZNBIDQtEUrdKhDOX4oOwqopXQ/viewform" target="_blank" rel="noopener noreferrer">
                <button className="register-button">
                    REGISTER NOW!!
                </button>
            </a>
        </div>
    );
};

export default Body;
