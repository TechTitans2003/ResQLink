import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import logImage from '../../../assets/images/log.svg';
import registerImage from '../../../assets/images/register.svg';

import './UserForm.css';

export default function Form() {

    useEffect(() => {
        const signInBtn = document.querySelector("#sign-in-btn");
        const signUpBtn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        const handleSignUp = () => {
            container.classList.add("sign-up-mode");
        };

        const handleSignIn = () => {
            container.classList.remove("sign-up-mode");
        };

        signUpBtn.addEventListener("click", handleSignUp);
        signInBtn.addEventListener("click", handleSignIn);

        return () => {
            signUpBtn.removeEventListener("click", handleSignUp);
            signInBtn.removeEventListener("click", handleSignIn);
        };
    }, []);

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <Login />
                    <SignUp />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            We cannot stop  natural disaster but we can arm ourselves with knowledge so many lives wouldn't have to be lost if there was enough preparedness
                        </p>
                        <button className="btn transparent" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src={logImage} className="image" alt="Log in" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>
                            आपदा सेवा सदैव सर्वत्र
                            <br />
                            As a Helping Hand To NDRF
                            <br />
                            Saving Lives and beyond
                        </p>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={registerImage} className="image" alt="Register" />
                </div>
            </div>
        </div>
    );
}
