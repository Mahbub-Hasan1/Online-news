import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import SliderSection from './SliderSection/SliderSection';
import './Home.css';
import AboutUs from './AboutUs/AboutUs';
import OurEvents from './OurEvents/OurEvents';
import OurMissionAndVision from './OurMissionAndVision/OurMissionAndVision';
import Sidebar from './Sidebar/Sidebar';
import Footer from '../ShareComponents/Footer/Footer';
import LatestUpdate from './LatestUpdates/LatestUpdate';
import WatchVideos from './WatchVideos/WatchVideos';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import MeetTeam from './MeetTeam/MeetTeam';

const Home = () => {
    return (
        <>
            <div className="home-page  container-sm">
                <Navbar />
                <div className="row">

                    <div className="col-sm-8 main-content-div col-md-9">

                        {/* Slider Section */}
                        <div className="slider-section">
                            <SliderSection></SliderSection>
                        </div>

                        {/* event-marquee */}
                        <div className="event-marquee">
                            <marquee>This text will scroll from right to left</marquee>
                        </div>

                        {/* About us part */}
                        <AboutUs></AboutUs>

                    </div>


                    {/* This is Sidebar part */}
                    <div className="col-sm-4 sidebar-div col-md-3">
                        <Sidebar />
                    </div>

                </div>



                {/* our events */}
                <OurEvents />

                {/* Latest Updates */}
                <LatestUpdate />

                {/* Meet our Team */}
                <MeetTeam />

                {/* Photo Gallery */}
                <PhotoGallery/>

                {/* Watch Videos */}
                <WatchVideos/>

                {/* Our Mission And vision */}
                <OurMissionAndVision />

                

            </div>
            {/* This is footer part */}
            <Footer />

        </>
    );
};

export default Home;