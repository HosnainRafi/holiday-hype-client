import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className= "container-fluid">
            <h1 className="text-center title">About Us</h1>
            <div className="general-info">
                <div className="row g-4">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h1>Hello. Our agency has been present for over 20 years in the market. We make the most of all our customers.</h1>
                    </div>
                    <div className="col-md-5"></div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-5">
                    <h3>travel-hype team of guides</h3>
                    <h1>Our dedicated</h1>
                    <h1 className="about-title">Holiday-Hype team</h1>
                    <br />
                    <p>
                        Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.
                    </p>
                </div>
                <div className="col-md-6"></div>
            </div>

        </div>
    );
};

export default AboutUs;