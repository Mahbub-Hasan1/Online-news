import React, { useContext } from 'react';
import './Login.css';
import Navbar from '../ShareComponents/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {

    //get new admin
    const { setLoggedInUser } = useContext(UserContext);


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */

                // The signed-in user info.
                var { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });
    }


    return (
        <div className="container">
            <Navbar />

            <div className="align-items-center">
                <div className="login-div text-center col-md-8">
                    <h5 className="text-center login-title">Continue with Google</h5>
                    <h4 onClick={handleGoogleSignIn} className="col-md-7">
                        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google img" />
                        - Login</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;