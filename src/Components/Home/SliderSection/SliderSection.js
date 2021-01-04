import React from 'react';
import SwiftSlider from 'react-swift-slider';

const data = [
    { 'id': '1', 'src': 'https://i.imgur.com/TaAep5c.jpg', name: 'hello' },
    { 'id': '2', 'src': 'https://i.imgur.com/e9H7y90.jpg' },
    { 'id': '3', 'src': 'https://i.imgur.com/aom6f3y.jpg' },
    { 'id': '4', 'src': 'https://i.imgur.com/SMQ0OPm.png' },
];

const SliderSection = () => {
    const sliderStyle = {
        // height: '600px',
    }
    return (
        <div style={sliderStyle}>
            <SwiftSlider
                data={data}
                height={400}
                // interval={5000}
                // dotColor="#F7345F"
                // activeDotColor="#473CFF"
                showDots={false}
                enableNextAndPrev={false}
            />
        </div>
    );
};

export default SliderSection;