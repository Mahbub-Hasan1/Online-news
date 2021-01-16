import React, { useState } from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import RegisteredUserList from './RegisteredUserList/RegisteredUserList';
import UpdateSlider from './UpdateSlider/UpdateSlider';

const Dashboard = () => {

    const [adminEmail, setAdminEmail] = useState(false)
    console.log(adminEmail)
    const adminValidation = (e) => {
        if (e.target.value === '@') {
            setAdminEmail(true)
        }
    }


    return (
        <>
            <div className="container">
                <Navbar />
                <div className="text-center">
                    <input type="text" onChange={adminValidation} />
                </div>
            </div>


            <Tabs>
                {
                    adminEmail ?
                        <div className="text-center">
                            <Tab><button className="btn btn-primary">Registered User List</button></Tab>
                            <Tab><button className="btn btn-primary">UpdateSlider</button></Tab>
                            <Tab><button className="btn btn-primary">Tab 3</button></Tab>
                        </div>
                        :
                        ''
                }

                <Panel>
                    <RegisteredUserList />
                </Panel>
                <Panel>
                    <UpdateSlider />
                </Panel>
                <Panel><p>panel 3</p></Panel>
            </Tabs>

        </>
    );
};

export default Dashboard;