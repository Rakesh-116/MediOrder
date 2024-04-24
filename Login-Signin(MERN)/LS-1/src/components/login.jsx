// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/login.css'

function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3009', {email, password})
        .then((result)=>{
            console.log(result);
            if(result.data === 'Success'){
                navigate('/home');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div className="bg-container d-flex justify-content-center align-items-center vh-100">
            <div>
                <div className="b1 text-center">
                    <h2>Login</h2>
                </div>
                <div className="card p-3 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong>Email</strong>
                            </div>
                            <input type="email" placeholder="Enter Email" autoComplete='off'
                            name="email" className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)}/>                        
                        </div>
                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong>Password</strong>
                            </div>
                            <input type="password" placeholder="Enter Password" autoComplete='off'
                            name="epassword" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>                        
                        </div>
                        <button type="submit"  className="btn1 w-100">
                            Login
                        </button>
                    </form>
                    <br/>
                    <p>Already have an account?</p>
                    <Link to="/register" className='btn btn-default w-100 rounded-3 bg-light border text-decoration-none'>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;