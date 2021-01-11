import React from 'react';
import SwiftSlider from 'react-swift-slider';

const data = [
    { 'id': '1', 'src': 'https://cdn.pixabay.com/photo/2020/12/17/04/09/guanajuato-5838206__340.jpg', name: 'hello' },
    { 'id': '2', 'src': 'https://cdn.pixabay.com/photo/2019/12/08/21/21/mountains-4682266__340.jpg' },
    { 'id': '3', 'src': 'https://cdn.pixabay.com/photo/2020/04/07/13/12/bicycle-5013316__340.jpg' },
    // { 'id': '4', 'src': 'https://i.imgur.com/SMQ0OPm.png' },
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