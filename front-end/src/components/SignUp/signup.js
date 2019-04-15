import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom'


const SignUp =()=> (
    <div>
        <h2>Sign Up!</h2>
        <form>
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
        </form>
        <p>Already have an accoun? <Link to="/login">Login</Link></p>
    </div>
    
);

export default SignUp


