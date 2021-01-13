import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TextsmsIcon from '@material-ui/icons/Textsms';
import BorderVerticalIcon from '@material-ui/icons/BorderVertical';
import './ContactUs.css';
import Footer from '../ShareComponents/Footer/Footer';

const contactInformation = [
    {
        id: 1,
        title: 'Address: Road No. 02, Dhanmondi R/A, Dhaka. 1205, Bangladesh.',
        icon: <LocationOnIcon style={{ fontSize: '20px' }} />,
    },
    {
        id: 2,
        title: 'Phone: +88-02-58610294',
        icon: <PhoneIcon style={{ fontSize: '20px' }} />,
    },
    {
        id: 3,
        title: 'Fax: +88-02-58610294',
        icon: <SettingsCellIcon style={{ fontSize: '20px' }} />,
    },
    {
        id: 3,
        title: 'Email: dhakacitycollege1250@gmail.com',
        icon: <EmailIcon style={{ fontSize: '20px' }} />,
    },
]

const ContactUs = () => {
    return (
        <>
            <div className="container-sm">
                <Navbar />
                <div className="row">


                    <div className="col-md-8">
                        <h3 className="input-hade-line">আমাদের সাথে সরাসরি যোগাযোগ করুন</h3>

                        <div className="table-div">
                            <table>

                                <tr>
                                    <td><PeopleIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">ব্যবহারকারীর ধরন</td>
                                    <td><input className="input-contact" type="text" placeholder="ব্যাবহারকারীর ধরন টাইপ করুন" /></td>
                                </tr>
                                <tr>
                                    <td><PermIdentityIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">আপনার নাম</td>
                                    <td><input className="input-contact" type="text" placeholder="আপনার নাম টাইপ করুন" /></td>
                                </tr>
                                <tr>
                                    <td><EmailIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">আপনার ইমেইল আইডি(Email ID)</td>
                                    <td><input className="input-contact" type="text" placeholder="আপনার আইডি ইমেইল টাইপ করুন" /></td>
                                </tr>
                                <tr>
                                    <td><PhoneAndroidIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">Mobile No.</td>
                                    <td><input className="input-contact" type="text" placeholder="আপনার মোবাইল নাম্বার টাইপ করুন" /></td>
                                </tr>
                                <tr>
                                    <td><TextsmsIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">আপনার বার্তা</td>
                                    <td><input className="input-contact" type="text" placeholder="আপনার বার্তা টাইপ করুন" /></td>
                                </tr>
                                <tr>
                                    <td><BorderVerticalIcon style={{ fontSize: '25px' }} /></td>
                                    <td className="input-name">ক্যাপচা = n1R3</td>
                                    <td><input className="input-contact" type="text" placeholder="বাম পাশের লেখাটি টাইপ করুরন" /></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="input-name">
                                        <button style={{background:'red',color:'#fff'}}>Submit</button>
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>

                    </div>



                    <dvi className="col-md-4">
                        <h2 className="contact-Information-hade-line">Contact Information</h2>

                        <div className="contact-information">

                            {
                                contactInformation.map(info =>

                                    <p key={info.id}>{info.icon} {info.title}</p>

                                )
                            }

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.218005963696!2d90.38054411429671!3d23.739604095107115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7db3123bb%3A0x33f738dc3ddbe79f!2z4Kai4Ka-4KaV4Ka-IOCmuOCmv-Cmn-CmvyDgppXgprLgp4fgppw!5e0!3m2!1sbn!2sbd!4v1610394572384!5m2!1sbn!2sbd" style={{ width: 'auto', height: '300px' }}></iframe>

                        </div>
                    </dvi>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;