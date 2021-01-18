import React, { useContext } from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import RegisteredUserList from './RegisteredUserList/RegisteredUserList';
import UpdateSlider from './UpdateSlider/UpdateSlider';
import CreateNewAdmin from './CreateNewAdmin/CreateNewAdmin';
import { UserContext } from '../../App';
import './Dashboard.css';

const Dashboard = () => {
    const { loggedInUser, adminData } = useContext(UserContext);


    return (
        <>
            <div className="container-sm">
                <Navbar />
            </div>


            <Tabs>


                {
                    adminData ?
                        <div>
                            {
                                loggedInUser.email === adminData[0].newAdmin ?
                                    <div className="text-center">
                                        <Tab><button className="btn btn-success dashboard-btn">Registered User List</button></Tab>
                                        <Tab><button className="btn btn-success dashboard-btn">Update Slider</button></Tab>
                                        <Tab><button className="btn btn-success dashboard-btn">Create new admin</button></Tab>
                                    </div>
                                    : ''
                            }
                        </div>
                        : ''
                }

                <Panel>
                    <RegisteredUserList />
                </Panel>
                <Panel>
                    <UpdateSlider />
                </Panel>
                <Panel>
                    <CreateNewAdmin />
                </Panel>
            </Tabs>

        </>
    );
};

export default Dashboard;