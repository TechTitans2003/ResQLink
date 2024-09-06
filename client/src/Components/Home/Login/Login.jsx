import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Utils/auth';

export default function Login() {

    const { API, setTokenInLS } = useAuth();
    const URL = `${API}/api/auth/login`;
    const navigate = useNavigate();

    const [signInForm, setSignInForm] = useState({
        email: '',
        password: '',
    });

    // Handle input change for sign-in form
    const handleSignInInputChange = (e) => {
        const { name, value } = e.target;
        setSignInForm({
            ...signInForm,
            [name]: value,
        });
    };

    // Handle form submission for sign-in form
    const handleSignInSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signInForm),
        });

        const resData = await response.json();
        console.log(resData);
        if (response.ok) {
            // console.log(resData);
            setTokenInLS(resData.token);
            navigate('/admin/user/dashboard');
        }
    };

    return (
        <form className="sign-in-form" onSubmit={handleSignInSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="ri-mail-fill"></i>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={signInForm.email}
                    onChange={handleSignInInputChange}
                />
            </div>
            <div className="input-field">
                <i className="ri-lock-2-fill"></i>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={signInForm.password}
                    onChange={handleSignInInputChange}
                />
            </div>
            <input type="submit" value="Login" className="btn solid" />
        </form>
    );
}
