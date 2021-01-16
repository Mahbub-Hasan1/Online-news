import React from 'react';
import './OurMissionAndVision.css';

const OurMissionAndVision = () => {

    const style = {
        paddingTop: '20px',
    }
   

    return (
        <div style={style} className="row">
            <div className="col-sm text-center">
                <h3>OUR MISSION</h3>
                <hr className="ourHr" />
                <p>Designers & webmasters use it to visualize existence of text form of content on websites, wireframes or posters. In most of the cases, the person who writes the content and design the page are two different people. Designers prefer to just put dummy content before the final version is ready to make sure you have the right font size, color, line height, font-family, etc.</p>
            </div>
            <div className="col-sm text-center">
                <h3>OUR VISION</h3>
                <hr className="ourHr" />
                Designers & webmasters use it to visualize existence of text form of content on websites, wireframes or posters. In most of the cases, the person who writes the content and design the page are two different people. Designers prefer to just put dummy content before the final version is ready to make sure you have the right font size, color, line height, font-family, etc.
            </div>
        </div>
    );
};

export default OurMissionAndVision;