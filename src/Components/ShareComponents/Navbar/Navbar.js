import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Logo from '../../../images/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <>

            <div className="d-flex align-items-center nav-logo-div">
                <img className="img-fluid nav-logo" src={Logo} alt="" />
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <DehazeIcon style={{fontSize: '35px'}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">হোম পেইজ<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">আমাদের সম্পর্কে</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">যোগাযোগ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">পরিচালনা পর্যদ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">সদস্য ফরম</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">লগ ইন</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">সদস্য প্রোফাইল</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;