import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login =()=> (
    <div>
        <h2>Login!</h2>
        <form>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
        </form>
        <p>Don't have an account? <Link to="/">Signup</Link></p>
    </div>
    
);

export default Login;


