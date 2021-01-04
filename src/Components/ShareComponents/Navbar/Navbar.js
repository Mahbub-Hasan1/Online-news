import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Logo from '../../../images/Logo.png';
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
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">হোম পেইজ<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">আমাদের সম্পর্কে</Link>
                            <div className="dropdown-content">
                                <Link to="/">আমাদের সম্পর্কে</Link>
                                <Link to="/">আমাদেশ মিশন</Link>
                                <Link to="/">আমাদের লক্ষ্য</Link>
                                <Link to="/">ডোনেশন পেইজ</Link>
                                <Link to="/">সভাপতির বানী</Link>
                                <Link to="/">Link 3</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">যোগাযোগ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">পরিচালনা পর্যদ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration-form">সদস্য ফরম</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">লগ ইন</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">সদস্য প্রোফাইল</Link>
                            <div className="dropdown-content">
                                <Link to="/">সদস্য প্রোফাইল</Link>
                                <Link to="/">ইভেন্ট</Link>
                                <Link to="/">নিউজ</Link>
                                <Link to="/">ডোনেশন পেইজ</Link>
                                <Link to="/">মিডিয়া</Link>
                                <Link to="/">সাধারণ সাধারণ সম্পাদকের বানী</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;