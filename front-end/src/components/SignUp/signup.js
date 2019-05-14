import React from 'react';
import './signup.css';
import { Link, Redirect } from 'react-router-dom'


export default class SignUp extends React.Component {

    constructor (){
        super();
        this.state = {
            username:'',
            firstname: '',
            lastname: '',
            email: '',
            password:'',
            redirect:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

    }
    handleChangeUserName(event) {
        this.setState({username:event.target.value});
    }
    handleChangeFirstName(event) {
        this.setState({firstname: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({lastname: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    //call api here
    handleSubmit(event){
        if( this.state.username     &&
            this.state.firstname    &&
            this.state.lastname     &&
            this.state.email        &&
            this.state.password){
                console.log(this.state);
                const data = this.state;
                fetch(`http://localhost:2093/users/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(this.state)
                })
                .then(res => res.json())
                .then(response => this.setState({redirect: response.status}))
                .catch(error => console.error('Error:', error));

            }
        event.preventDefault();
    }

    render() {

        if(this.state.redirect){
            return <Redirect to="/login"/>;
        }

    return(
        <div className="signup">
            <h2>Sign Up!</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleChangeUserName} placeholder= "User Name" required/>
                <input type="text" value= {this.state.firstName} onChange={this.handleChangeFirstName} placeholder="First Name" required/>
                <input type="text"  value= {this.state.lastName} onChange={this.handleChangeLastName}  placeholder="Last Name" required/>
                <input type="email" value= {this.state.email}  onChange={this.handleChangeEmail} placeholder="Email" required/>
                <input type="password" value= {this.state.password} onChange={this.handleChangePassword}   placeholder="Password" required/>
                <input id="submit" type="submit"/>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        )
    }
}
