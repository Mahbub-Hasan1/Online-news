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
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">হোম<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">কেন্দ্রীয় কমিটি</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">নিউজ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">নোটিশ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/registration-form">মিডিয়া</Link>
                            <div className="dropdown-content">
                                <Link to="/">ছবি</Link>
                                <Link to="/">ভিডিও</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">যোগাযোগ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">ডোনেশন</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;