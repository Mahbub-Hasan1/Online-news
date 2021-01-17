import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Logo from '../../../images/Logo.png';
import HomeIcon from '@material-ui/icons/Home';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <div className="d-flex align-items-center nav-logo-div">
                <img className="img-fluid nav-logo" src={Logo} alt="" />
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <DehazeIcon style={{ fontSize: '35px' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><HomeIcon style={{ fontSize: '25px' }} /><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">আমাদের সম্পর্কে</Link>
                            <div className="dropdown-content">
                                <Link to="/">আমাদের সম্পর্কে</Link>
                                <Link to="/">আমাদের লক্ষ্য</Link>
                                <Link to="/">আমাদের উদ্যেশ্য</Link>
                                <Link to="/">আমাদের লক্ষ্য</Link>
                                <Link to="/">গঠনতন্ত্র</Link>
                                <Link to="/admin-note">সভাপতির বাণী</Link>
                                <Link to="/">গঠনতন্ত্র</Link>
                                <Link to="/">সাধারণ সম্পাদকের বাণী</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">কেন্দ্রীয় কমিটি</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">ইভেন্ট</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration-form">নিউজ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">মিডিয়া</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">ডোনেশন</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration-form">রেজিষ্টেশন</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">যোগাযোগ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">লগিন</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;