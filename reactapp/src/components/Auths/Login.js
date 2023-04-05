import React, { useEffect, useState } from 'react';
import Header from '../Header'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    const csrfToken = getCookie("csrftoken");
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("email: ", email)
        console.log("password1: ", password)

        try {
            const response = await axios.post('http://127.0.0.1:8000/Login/', {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({ email, password }),
            });

            if (response) {
                // console.log('Data Saved');
                // alert("Value Saved")
                navigate(-1)
                
            } else {
                // Handle invalid email or password error
                alert('Invalid email or password');
            }
        }
        catch (error) {
            console.error(error);
            alert('Something Went Wrong');
        }
    };


    return (
        <div style={{ background: "#260037", height: "100vh", }} >
            <Header />
            {messages.map(message => (
                <div key={message.id} className={`alert alert-${message.tags}`}>
                    {message.message}
                </div>
            ))}
            <div class="max-w-md mx-auto p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-6 my-12 text-gray-100" style={{ marginTop: "8rem" }}><strong>Log In</strong></h2>
                <form action='/Login/' method="POST" onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label class="block font-medium mb-2 text-gray-100" for="email">Email</label>
                        <input class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-4">
                        <label class="block font-medium mb-2 text-gray-100" for="password">Password</label>
                        <input class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="submit">Log In</button>
                </form>
                <p class="text-gray-500 text-sm mt-4">Don't have an account? <Link class="text-blue-500 hover:text-blue-600 underline" to="/SignUp/">Sign up now</Link>.</p>
            </div>
        </div>

    )
}

export default Login