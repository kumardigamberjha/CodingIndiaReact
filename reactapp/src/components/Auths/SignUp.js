import React, { useEffect, useState } from 'react';
import Header from '../Header'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    const csrfToken = getCookie("csrftoken");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password1: "",
        password2: "",
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Name: ", name)
        console.log("email: ", email)
        console.log("user: ", username)
        console.log("password1: ", password1)
        console.log("password2: ", password2)
        if (username.trim() !== "" && password1.trim() !== "" && password2.trim() !== "" && password1 === password2) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/SignUp/', {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,
                    },
                    body: JSON.stringify({ name, email, username, password1, password2 }),
                });

                if (response.ok) {
                    console.log('Data Saved');
                }
                else if(response.data.error == "User Already Exists"){
                    alert("User Already Exists")
                }
                else {
                    // alert("Username already Exists")
                    console.log(response.data.error)
                    navigate(-1)
                    // throw new Error('Something went wrong');
                }
            } catch (error) {
                console.error(error);
            }
        }
        else if (username == ""){
            alert("Username Can't be null")
        }
        else if (password1 == ""){
            alert("Password Can't be null")
        }
        else if (password2 == ""){
            alert("Password didn't Matched")
        }
        else if (password2 != password1){
            alert("Password didn't Matched")
        }
    };


    return (
        <div>
            <Header style={{ background: "black" }} />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <div class="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold mb-4">Sign Up Now and Get Exclusive Access to Our Platform!</h2>
                            <ul class="list-disc ml-6 mb-6">
                                <li class="mb-2">A user-friendly interface that makes it easy to navigate and find what you're looking for</li>
                                <li class="mb-2">Advanced analytics tools that help you track your progress and make data-driven decisions</li>
                                <li class="mb-2">Personalized recommendations based on your preferences and past activity</li>
                                <li class="mb-2">Exclusive content and resources that are only available to members</li>
                                <li class="mb-2">24/7 customer support to ensure that you have a smooth and hassle-free experience</li>
                            </ul>
                            <p class="text-lg">Don't miss out on this opportunity to join our community of like-minded individuals who are passionate about achieving their goals. Sign up now and start exploring all that our platform has to offer!</p>
                        </div>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <form action='/SignUp/' method="POST" onSubmit={handleSubmit}>
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="full-name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Username</label>
                                <input type="text" id="email" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">password1</label>
                                <input type="password" id="email" name="password1" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPassword1(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">password2</label>
                                <input type="password" id="email" name="password2" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPassword2(e.target.value)} />
                            </div>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Sign Up</button>
                        </form>
                        {/* <p class="text-xs text-gray-500 mt-3">Already have an Account? <Link to="/Login/">Login Here</Link></p> */}
                        <p class="text-gray-500 text-sm mt-4">Already a member <Link class="text-blue-500 hover:text-blue-600 underline" to="/Login/">Login Here</Link>.</p>

                    </div>
                </div>
            </section>
        </div>
    )
}



export default SignUp