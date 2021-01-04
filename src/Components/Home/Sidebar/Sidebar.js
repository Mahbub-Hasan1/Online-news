import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="text-center sidebar-div">
                <h4>President's</h4>
                <img className="img-fluid" src="https://i.imgur.com/4BXeIV4.jpg" alt="" />
                <h5 className="name">Name</h5>
                <h5 className="red-more">Read More</h5>
                <hr />
            </div>

            <div className="text-center sidebar-div">
                <h4>President's</h4>
                <img className="img-fluid" src="https://i.imgur.com/4BXeIV4.jpg" alt="" />
                <h5 className="name">Name</h5>
                <h5 className="red-more">Read More</h5>
                <hr />
            </div>


            <div className="sidebar-buttons-div">
                <button className="sidebar-btn" style={{ background: 'red' }}>Registration</button>
                <button className="sidebar-btn" style={{ background: 'green' }}>How to register</button>
                <button className="sidebar-btn" style={{ background: 'red' }}>All members</button>
            </div>
        </>
    );
};

export default Sidebar;