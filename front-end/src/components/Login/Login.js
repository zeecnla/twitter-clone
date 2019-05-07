import React from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';

//TODO: save the token on the local storage 
// and prevent access to home page if the user
//does not have a valid token

export default class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password:'',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleSubmit(event){
        if( this.state.email        &&
            this.state.password){
                console.log(this.state);
                const data = this.state;
                fetch(`http://localhost:2093/users/authenticate`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(this.state)
                })
                .then(res => res.json())
                .then(response => {
                    console.log(response);
                    this.setState({redirect: response.status});
                    localStorage.setItem('token', response.data.token)
                })
                .catch(error => console.error('Error:', error));
            }
            event.preventDefault();

    }
    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password:event.target.value});
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to="/home"/>;
        }

        return (
            <div className="login">
                <h2>Login!</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email"/>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword}placeholder="Password"/>
                    <input type="submit" />
                </form>
                <p>Don't have an account? <Link to="/">Signup</Link></p>
            </div>
        )
    }
}


