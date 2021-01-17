import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <>
            <div className="text-center sidebar-div">
                <h4 className="President-h4">“ সভাপতি ”</h4>

                <img className="img-fluid president-img"
                    src="https://i.imgur.com/wsdDXFD.jpg"
                    alt=""
                />

                <h5 className="name">মোঃ সাহিদুল হক</h5>
                <Link to="/savapati-note">
                    <h5 className="red-more">বিস্তারিত..</h5>
                </Link>
                <hr />
            </div>

            <div className="text-center sidebar-div">
                <h4 className="President-h4">“ সাধারণ সম্পাদক ”</h4>

                <img className="img-fluid president-img"
                    src="https://i.imgur.com/hEaIa7d.jpg"
                    alt=""
                />

                <h5 className="name">জাকির হোসেন</h5>

                <Link to="/sampadak-note">
                    <h5 className="red-more">বিস্তারিত..</h5>
                </Link>

                <hr />

            </div>


            <div className="sidebar-buttons-div">
                <button
                    className="sidebar-btn"
                    style={{ background: 'red' }}
                >Registration
                </button>

                <button
                    className="sidebar-btn"
                    style={{ background: '#00c04a' }}
                >How to register
                </button>

                <button
                    className="sidebar-btn"
                    style={{ background: 'red' }}
                >All members
                </button>

            </div>
        </>
    );
};

export default Sidebar;