import React from 'react';
import Footer from '../ShareComponents/Footer/Footer';
import Navbar from '../ShareComponents/Navbar/Navbar';
import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <>
            <div className="container-sm">
                <Navbar />
                <div className="registration-form">
                    <h5>সম্মানিত সভাপতি,</h5>
                    <p>আমাকে ঢাকাইয়া কেরানীগঞ্জ সমিতির প্রাথমিত সদস্য হিসেবে অন্তভূর্ক্ত করার জন্য বিনীত অনুরোধ করছি। অত্র সমিতির গঠনতন্ত্র ও প্রণীত সকল সিদ্ধান্ত মেনে নিতে আমি সম্মত আছি এবং গঠনতন্ত্র/সমিতির স্বার্থ পরিপন্থী কোন কার্যকলাপের জন্য সদস্য পদ বাতিল হলে আমার কোন আপত্তি থাকবে না। আমার বিস্তারিত তথ্যদি নিম্নে প্রধান করিলাম। </p>
                </div>
                <form>
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>Country</th>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title"> নাম:</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="নাম" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">পিতার নাম:</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="পিতার নাম" className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">মাতার নাম:</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="মাতার নাম:" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">জন্ম তারিখ;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="জন্ম তারিখ;" className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">রক্তের গ্রুপ;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="রক্তের গ্রুপ;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">পেশাঃ </p>
                            </td>
                            <td>
                                <input type="text" required placeholder="পেশাঃ " className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">স্থায়ী ঠিকানাঃ </p>
                            </td>
                            <td>
                                <input type="text" required placeholder="স্থায়ী ঠিকানাঃ " className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">গ্রামঃ </p>
                            </td>
                            <td>
                                <input type="text" required placeholder="গ্রামঃ" className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">ইউনিয়ন;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="ইউনিয়ন;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">উপজেলা;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="উপজেলা;" className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">জেলা;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="জেলা;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">বর্তমান ঠিকানা;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="বর্তমান ঠিকানা;" className="registration-form" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">মোবাইল নাম্বার;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="মোবাইল নাম্বার;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">শিক্ষাগত যোগ্যতা;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="শিক্ষাগত যোগ্যতা;" className="registration-form" />
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p className="input-title">উত্তরাধিকারীর নাম;</p>
                            </td>
                            <td>
                                <input type="text" required placeholder="উত্তরাধিকারীর নাম;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">Save and Go to Next Step</p>
                            </td>
                            <td>
                                <input type="submit" required placeholder="submit" className="registration-form" style={{ background: '#fff', width: '100%', fontWeight: 'bold' }} />
                            </td>

                        </tr>

                    </table>
                </form>

            </div>
            <Footer />
        </>
    );
};

export default RegistrationForm;