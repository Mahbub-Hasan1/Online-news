import React from 'react';
import './Login.css';
// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
import Navbar from '../ShareComponents/Navbar/Navbar';

const Login = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="align-items-center">
                <div className="login-div text-center col-md-8">
                    <h5 className="text-center login-title">Continue with Google</h5>
                    <h4 className="col-md-7">
                        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google img" />
                        - Login</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;