import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import RegisteredUserList from './RegisteredUserList/RegisteredUserList';
import UpdateSlider from './UpdateSlider/UpdateSlider';
import CreateNewAdmin from './CreateNewAdmin/CreateNewAdmin';
import { UserContext } from '../../App';
import './Dashboard.css';
import PageNotFound from '../PageNotFound/PageNotFound';
import UpdateEventMarqueeHomePage from './UpdateEventMarqueeHomePage/UpdateEventMarqueeHomePage';
import AboutUsUpdate from './AboutUsUpdate/AboutUsUpdate';
import OurEvent from './OurEvent/OurEvent';
import LatestUpdateDas from './LatestUpdateDas/LatestUpdateDas';
import PhotoGalleryUpdate from './PhotoGalleryUpdate/PhotoGalleryUpdate';

const Dashboard = () => {
    const { loggedInUser } = useContext(UserContext);

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5050/allAdmin?newAdmin=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])


    return (
        <>

            {/* {admin.length ? */}

                <>
                    <div className="container-sm">
                        <Navbar />
                    </div>


                    <Tabs>

                        <div>
                            <div className="row">
                                <div className=" deshboard-sitebar">
                                    {/* tab 1 */}
                                    <Tab><button className="des-site-btn">Add new admin</button></Tab>
                                    {/* tab 2 */}
                                    <Tab><button className="des-site-btn">All registered user list</button></Tab>
                                    {/* tab 3 */}
                                    <Tab><button className="des-site-btn">Update Slider</button></Tab>
                                    {/* tab 4 */}
                                    <Tab><button className="des-site-btn">Update Marquee Home page </button></Tab>
                                    {/* tab 5 */}
                                    <Tab><button className="des-site-btn">About us</button></Tab>
                                    {/* tab 6 */}
                                    <Tab><button className="des-site-btn">our event</button></Tab>
                                    {/* tab 7 */}
                                    <Tab><button className="des-site-btn">LatestUpdateDas</button></Tab>
                                    {/* tab 8 */}
                                    <Tab>
                                        <button className="des-site-btn">Photo Gallery</button>
                                    </Tab>
                                </div>

                                <div className="deshboard-mainContent">
                                    {/* tab 1 */}
                                    <Panel>
                                        <CreateNewAdmin />
                                    </Panel>

                                    {/* tab 2 */}
                                    <Panel>
                                        <RegisteredUserList />
                                    </Panel>

                                    {/* tab 3 */}
                                    <Panel>
                                        <UpdateSlider />
                                    </Panel>
                                    {/* tab 4 */}
                                    <Panel>
                                        <UpdateEventMarqueeHomePage />
                                    </Panel>
                                    {/* tab 5 */}
                                    <Panel>
                                        <AboutUsUpdate />
                                    </Panel>
                                    {/* tab 6 */}
                                    <Panel>
                                        <OurEvent />
                                    </Panel>
                                    {/* tab 7 */}
                                    <Panel>
                                        <LatestUpdateDas />
                                    </Panel>
                                    {/* tab 8 */}
                                    <Panel>
                                        <PhotoGalleryUpdate />
                                    </Panel>
                                    <h5 className="text-center"> Welcome to dashboard page </h5>
                                </div>
                            </div>
                        </div>

                    </Tabs>
                </>
                {/* :

                <>
                    <PageNotFound />
                </>
            } */}

        </>
    );
};

export default Dashboard;