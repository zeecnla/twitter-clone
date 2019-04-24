import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom'


export default class SignUp extends React.Component {

    constructor (){
        super();
        this.submit = this.submit.bind(this);
        
    }

    submit(event){
        console.log("submitted");
        event.preventDefault();
    }

    render() {

    return(
        <div className="signup">
            <h2>Sign Up!</h2>
            <form onSubmit={this.submit}>
                <input type="text" placeholder="First Name" required/>
                <input type="text" placeholder="Last Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input id="submit" type="submit"/>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        )
    }
}