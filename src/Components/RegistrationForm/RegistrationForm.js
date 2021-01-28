import React, { useState } from 'react';
import Footer from '../ShareComponents/Footer/Footer';
import Navbar from '../ShareComponents/Navbar/Navbar';
import Axios from 'axios';
import './RegistrationForm.css';
import { useForm } from "react-hook-form";

const RegistrationForm = () => {

    const { register, handleSubmit } = useForm();

    const [uploadImgUrl, setUploadImgUrl] = useState({});

    const onSubmit = fData => {

        const allFromData = { ...fData, ...uploadImgUrl };

        fetch('http://localhost:5050/AddRegistrationData', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allFromData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("অভিনন্দন! খুব শীঘ্রই আপনার সাথে যোগাযোগ করে সদস্য কনফার্ম করা হবে।")
                }
            })
            .catch(error => {
                console.error(error)
            })
    };



    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '2f47761ebe19b643e50f810bd1150248')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }

    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {

                const imageUrl = {}
                imageUrl.img = resp.data.data.thumb.url;
                setUploadImgUrl(imageUrl);
                
            })
        e.preventDefault();
    }


    return (
        <>
            <div className="container-sm">
                <Navbar />
                <div className="registration-form input-width">
                    <h5>সম্মানিত সভাপতি,</h5>
                    <p>আমাকে ঢাকাইয়া কেরানীগঞ্জ সমিতির প্রাথমিত সদস্য হিসেবে অন্তভূর্ক্ত করার জন্য বিনীত অনুরোধ করছি। অত্র সমিতির গঠনতন্ত্র ও প্রণীত সকল সিদ্ধান্ত মেনে নিতে আমি সম্মত আছি এবং গঠনতন্ত্র/সমিতির স্বার্থ পরিপন্থী কোন কার্যকলাপের জন্য সদস্য পদ বাতিল হলে আমার কোন আপত্তি থাকবে না। আমার বিস্তারিত তথ্যদি নিম্নে প্রধান করিলাম। </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="registrationForm">
                        <tr>
                            <th>Your information</th>
                            <th>Input field</th>
                            <th>Your information</th>
                            <th>Input field</th>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title"> নাম:</p>
                            </td>
                            <td>
                                <input type="text" name="Name" ref={register} required placeholder="নাম" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">পিতার নাম:</p>
                            </td>
                            <td>
                                <input type="text" name="FatherName" ref={register} required placeholder="পিতার নাম" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">মাতার নাম:</p>
                            </td>
                            <td>
                                <input type="text" name="MotherName" ref={register} required placeholder="মাতার নাম:" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">জন্ম তারিখ;</p>
                            </td>
                            <td>
                                <input type="date" name="DateOfBirth" ref={register} required placeholder="জন্ম তারিখ;" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">রক্তের গ্রুপ;</p>
                            </td>
                            <td>
                                <select name="BloodGroup" ref={register} required placeholder="রক্তের গ্রুপ;" className="registration-form input-width input-select">
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                                {/* <input type="text" name="Blood-group" ref={register} required placeholder="রক্তের গ্রুপ;" className="registration-form input-width" /> */}
                            </td>
                            <td>
                                <p className="input-title">পেশাঃ </p>
                            </td>
                            <td>
                                <input type="text" name="Occupation" ref={register} required placeholder="পেশাঃ " className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">স্থায়ী ঠিকানাঃ </p>
                            </td>
                            <td>
                                <input type="text" name="PermanentAddress" ref={register} required placeholder="স্থায়ী ঠিকানাঃ " className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">গ্রামঃ </p>
                            </td>
                            <td>
                                <input type="text" name="Village" ref={register} required placeholder="গ্রামঃ" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">ইউনিয়ন;</p>
                            </td>
                            <td>
                                <input type="text" name="PostOffice" ref={register} required placeholder="ইউনিয়ন;" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">উপজেলা;</p>
                            </td>
                            <td>
                                <input type="text" name="Upazila" ref={register} required placeholder="উপজেলা;" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">জেলা;</p>
                            </td>
                            <td>
                                <input type="text" name="District" ref={register} required placeholder="জেলা;" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">বর্তমান ঠিকানা;</p>
                            </td>
                            <td>
                                <input type="text" name="CurrentAddress" ref={register} required placeholder="বর্তমান ঠিকানা;" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p className="input-title">মোবাইল নাম্বার;</p>
                            </td>
                            <td>
                                <input type="text" name="MobileNo" ref={register} required placeholder="মোবাইল নাম্বার;" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">শিক্ষাগত যোগ্যতা;</p>
                            </td>
                            <td>
                                <input type="text" name="EducationalQualifications" ref={register} required placeholder="শিক্ষাগত যোগ্যতা;" className="registration-form input-width" />
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p className="input-title">উত্তরাধিকারীর নাম;</p>
                            </td>
                            <td>
                                <input type="text" name="inheritanceName" ref={register} required placeholder="উত্তরাধিকারীর নাম;" className="registration-form" />
                            </td>
                            <td>
                                <p className="input-title">আপনার ছবি এড করুন:</p>
                            </td>
                            <td>
                                <input type="file" name="personImg" onChange={upload} required placeholder=" ছবি " className="registration-form" />
                            </td>

                        </tr>
                        <tr className="Bkash">

                            <td>
                                <p className="input-title">রেজিষ্টেশন ফি:</p>
                            </td>
                            <td>
                                <p className="input-title">১০০ টাকা</p>                            </td>
                            <td>
                                <p className="input-title">পেমেন্ট প্রদানের জন্য {'>'}</p>
                            </td>
                            <td>
                                <p className="input-title">বিকাশ নাম্বারঃ  01813-807771 (personal)</p>
                            </td>

                        </tr>
                        <tr className="Bkash">

                            <td>
                                <p className="input-title">আপনার বিকাশ নাম্বার</p>
                            </td>
                            <td>
                                <input type="text" name="BkashNumber" ref={register} required placeholder="বিকাশ নাম্বার" className="registration-form input-width" />
                            </td>
                            <td>
                                <p className="input-title">ফ্রম সাবমিট করুন</p>
                            </td>
                            <td>
                                <input type="submit" ref={register} required placeholder="সাবমিট" className="registration-form input-width btn btn-primary" style={{ background: '#fff', width: '100%', fontWeight: 'bold' }} />
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