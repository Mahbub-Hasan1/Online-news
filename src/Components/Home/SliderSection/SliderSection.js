import React, { useEffect, useState } from 'react';
import SwiftSlider from 'react-swift-slider';

const data = [
    { 'id': '1', 'src': 'https://i.imgur.com/7ZEYCWT.png' },
    { 'id': '2', 'src': 'https://i.imgur.com/nSBBvBz.jpg' },
    { 'id': '3', 'src': 'https://i.imgur.com/tK4CV0n.jpg' },
    { 'id': '4', 'src': 'https://i.imgur.com/Tg2Ysgg.jpg' },
];

const SliderSection = () => {

    // const [ImgData, setData] = useState();

    // useEffect(() => {
    //     fetch('http://backend.dkshomiti.com/allSliderImages')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    const sliderStyle = {
        margin: '0px'
    }

    return (
        <div style={sliderStyle}>
            <SwiftSlider
                data={data}
                height={410}
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