import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './components/App/App'
import SignUp from './components/SignUp/signup';
import Login from './components/Login/Login'
const Routes = () => (
    <Router>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login}/>
        <Route path="/home" component={App} />
    </Router>
)

export default Routes;