import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="text-center sidebar-div">
                <h4>President's</h4>
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2020/11/01/21/45/christmas-5705046__340.jpg" alt="" />
                <h5 className="name">Name</h5>
                <h5 className="red-more">Read More</h5>
                <hr />
            </div>

            <div className="text-center sidebar-div">
                <h4>President's</h4>
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2020/12/09/13/59/gifts-5817555__340.jpg" alt="" />
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