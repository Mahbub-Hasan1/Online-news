import React from 'react';
import SwiftSlider from 'react-swift-slider';

const data = [
    { 'id': '1', 'src': 'http://dae.keraniganj.dhaka.gov.bd/National-Portal-Card-PM.jpeg', name: 'hello' },
    { 'id': '2', 'src': 'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg' },
    { 'id': '3', 'src': 'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg' },
    { 'id': '4', 'src': 'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg' },
    { 'id': '5', 'src': 'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png' }
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
                // showDots={true}
                enableNextAndPrev={false}
            />
        </div>
    );
};

export default SliderSection;