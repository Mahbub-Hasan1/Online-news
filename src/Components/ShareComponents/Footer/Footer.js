import React from 'react';
import './Footer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import WebIcon from '@material-ui/icons/Web';
import { Link } from 'react-router-dom';

const usefulLinks = [
    { id: 1, name: 'About Us', Link: '/' },
    { id: 2, name: 'What We Do', Link: '/' },
    { id: 3, name: 'Partnership', Link: '/' },
    { id: 4, name: 'Publicatios', Link: '/' },
    { id: 5, name: 'Donate Now', Link: '/' },
    { id: 6, name: 'Covid-19', Link: '/' },
    { id: 7, name: 'Awards', Link: '/' },
    { id: 8, name: 'Guest House', Link: '/' },
    { id: 9, name: 'Career', Link: '/' },
    { id: 10, name: 'Gallery', Link: '/' },
    { id: 11, name: 'Job Circular', Link: '/' },
    { id: 12, name: 'Contact Us', Link: '/' },
]

const Footer = () => {

    return (
        <div className="container-fluid">
            <div className="footer row row-cols-1 row-cols-md-4  text-white">

                {/* This is CONTACT INFO part */}
                <div className="col-sm-6 col mb-4">
                    <h5 className="footer-menuItems">যোগাযোগঃ</h5>
                    <div className="d-flex">
                        <div>
                            <LocationOnIcon className="footer-icon" style={{ fontSize: '40px' }} />
                        </div>
                        <div>
                            <p className="text-bold">হেড অফিসঃ</p>
                            <p className="footer-Paragraph">হোল্ডিং নং ৬৮, হাজী আঃ  বারেক রোড, পশ্চিম আগানগর, কেরানীগঞ্জ ঢাকা</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <PhoneIcon className="footer-icon" style={{ fontSize: '40px' }} />
                        </div>
                        <div>
                            <p className="text-bold">মোবাইলঃ</p>
                            <p className="footer-Paragraph">+8801872531070</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <PrintIcon className="footer-icon" style={{ fontSize: '40px' }} />
                        </div>
                        <div>
                            <p className="text-bold">Fax:</p>
                            <p className="footer-Paragraph">+8801872531070</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <MailOutlineIcon className="footer-icon" style={{ fontSize: '40px' }} />
                        </div>
                        <div>
                            <p className="text-bold">ই-মেইলঃ</p>
                            <p className="footer-Paragraph text-white">dkshomiti@gmail.com</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <WebIcon className="footer-icon" style={{ fontSize: '40px' }} />
                        </div>
                        <div>
                            <p className="text-bold">ওয়েবসাইটঃ</p>
                            <p className="footer-Paragraph text-white">www.dkshomiti.com</p>
                        </div>
                    </div>
                </div>

                {/* This is USEFUL LINKS Part */}
                <div className="col-sm-6 col mb-4">
                    <h5 className="footer-menuItems">USEFUL LINKS</h5>
                    <div>
                        <ul>
                            {
                                usefulLinks.map(link =>
                                    <li key={link.id} className="useful-list">
                                        <Link
                                            className="footer-useful-links"
                                            to={`${link.link ? link.link : '/'}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                {/*  This is FOLLOW US Part */}
                <div className="col-sm-6 col mb-4">
                    <h5 className="footer-menuItems">FOLLOW US</h5>
                    <Link to="/">
                        <FacebookIcon className="follow-icon" style={{ fontSize: '40px' }} />
                    </Link>
                    <Link to="/">
                        <YouTubeIcon className="follow-icon" style={{ fontSize: '40px' }} />
                    </Link>
                    <Link to="/">
                        <LinkedInIcon className="follow-icon" style={{ fontSize: '40px' }} />
                    </Link>
                    <Link to="/">
                        <TwitterIcon className="follow-icon" style={{ fontSize: '40px' }} />
                    </Link>
                    <Link to="/">
                        <InstagramIcon className="follow-icon" style={{ fontSize: '40px' }} />
                    </Link>
                </div>

                {/* This is Visitor counter Part */}
                <div className="col-sm-6 col mb-4 visitor-count">
                    <h5>Visitor counter</h5>
                    <p>Today: 360</p>
                    <p>Yesterday: 649</p>
                    <p>This Week: 9400</p>
                    <p>This Month: 1350</p>
                    <p>Total: 429219</p>
                    <p>Currently Online: 91</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;