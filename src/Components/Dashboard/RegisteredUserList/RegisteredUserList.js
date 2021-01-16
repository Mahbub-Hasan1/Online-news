import React, { useEffect, useState } from 'react';
import './RegisteredUserList.css';

const RegisteredUserList = () => {

    const [RegisteredUser, setRegisteredUser] = useState([])

    useEffect(() => {
        fetch('http://backend.dkshomiti.com/allRegistrationData')
            .then(res => res.json())
            .then(data => setRegisteredUser(data))
    }, [])


    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="registered-list">
                <caption>List of users</caption>
                <thead className="registered-list-thead">
                    <tr>
                        
                        <th scope="col">নাম</th>
                        <th scope="col">বিকাশ নাম্বার</th>
                        <th scope="col">ট্রানজেকশন আইডি</th>
                        <th scope="col">পিতার নাম</th>
                        <th scope="col">মাতার নাম</th>
                        <th scope="col">শিক্ষাগত যোগ্যতা</th>
                        <th scope="col">পেশা</th>
                        <th scope="col">মোবাইল নাম্বার</th>
                        <th scope="col">জন্ম তারিখ</th>
                        <th scope="col">রক্তের গ্রুপ</th>
                        <th scope="col">বর্তমান ঠিকানা</th>
                        <th scope="col">জেলা</th>
                        <th scope="col">স্থায়ী ঠিকানা</th>
                        <th scope="col">ইউনিয়ন</th>
                        <th scope="col">উপজেলা</th>
                        <th scope="col">গ্রাম</th>
                        <th scope="col">উত্তরাধিকারীর নাম</th>
                    </tr>
                </thead>
                <tbody className="registered-list-tbody">
                    {
                        RegisteredUser.map(registerData =>

                            <tr key={registerData._id}>
                                
                                <th> {registerData.Name} </th>
                                <th> {registerData.BkashNumber} </th>
                                <th> {registerData.TransactionID} </th>
                                <td> {registerData.FatherName} </td>
                                <td> {registerData.MotherName} </td>
                                <td> {registerData.EducationalQualifications} </td>
                                <td> {registerData.Occupation} </td>
                                <td> {registerData.MobileNo} </td>
                                <td> {registerData.DateOfBirth} </td>
                                <td> {registerData.BloodGroup} </td>
                                <td> {registerData.CurrentAddress} </td>
                                <td> {registerData.District} </td>
                                <td> {registerData.PermanentAddress} </td>
                                <td> {registerData.PostOffice} </td>
                                <td> {registerData.Upazila} </td>
                                <td> {registerData.Village} </td>
                                <td> {registerData.inheritanceName} </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RegisteredUserList;