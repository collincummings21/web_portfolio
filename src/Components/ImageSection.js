import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I'm<span> Collin Cummings</span></h4>
                <p className="about-text">
                    Currently attending SUNY Cortland studying Business Economics 
                     with a minor in Computer Application. I love sports, business and technology, and plan on running my own company in the future.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Collin Cummings</p>
                        <p>: 21</p>
                        <p>: American</p>
                        <p>: English</p>
                        <p>: Orange County NY</p>
                        <p>: United States</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;