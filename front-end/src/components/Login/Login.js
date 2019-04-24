import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {

    constructor(){
        super();
        this.login = this.login.bind(this);
    }
    login(event){

    }
    
    render(){
        return (
            <div class="login">
                <h2>Login!</h2>
                <form>
                    <input placeholder="Email"/>
                    <input placeholder="Password"/>
                </form>
                <p>Don't have an account? <Link to="/">Signup</Link></p>
            </div>
        )
    }
}


