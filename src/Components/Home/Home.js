import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import SliderSection from './SliderSection/SliderSection';
import './Home.css';
import AboutUs from './AboutUs/AboutUs';
import OurEvents from './OurEvents/OurEvents';
import OurMissionAndVision from './OurMissionAndVision/OurMissionAndVision';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="row">
                
                <div className="col-sm-9 main-content-div">

                    {/* Slider Section */}
                    <div className="slider-section">
                        <SliderSection></SliderSection>
                    </div>

                    {/* event-marquee */}
                    <div className="event-marquee">
                        <marquee onmouseover="stop()" onmouseout="start()">This text will scroll from right to left</marquee>
                    </div>

                    {/* About us part */}
                    <AboutUs></AboutUs>
                    
                </div>


                {/* This is Sidebar part */}
                <div className="col-sm-3 sidebar-div">
                    <Sidebar />
                </div>

            </div>



            {/* our events */}
            <OurEvents />

            {/* Our Mission And vision */}
            <OurMissionAndVision />


        </div>
    );
};

export default Home;