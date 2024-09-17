import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Utils/auth';

export default function SignUp() {

    const { API, setTokenInLS } = useAuth();
    const URL = `${API}/api/auth/register`;
    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    // Handle input change for sign-up form
    const handleSignUpInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value,
        });
    };

    // Handle form submission for sign-up form
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpForm),
        });

        const resData = await response.json();
        console.log(resData);
        if (response.ok) {
            setTokenInLS(resData.token);
            navigate('/admin/user/dashboard');
            // console.log(resData);
        }
    };

    return (
        <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="ri-user-2-fill"></i>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={signUpForm.username}
                    onChange={handleSignUpInputChange}
                />
            </div>
            <div className="input-field">
                <i className="ri-mail-fill"></i>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={signUpForm.email}
                    onChange={handleSignUpInputChange}
                />
            </div>
            <div className="input-field">
                <i className="ri-phone-fill"></i>
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={signUpForm.phone}
                    onChange={handleSignUpInputChange}
                />
            </div>
            <div className="input-field">
                <i className="ri-lock-2-fill"></i>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={signUpForm.password}
                    onChange={handleSignUpInputChange}
                />
            </div>
            <input type="submit" className="btn" value="Sign up" />
        </form>
    );
}
