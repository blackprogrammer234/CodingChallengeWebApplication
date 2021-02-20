import { urlencoded } from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginScreen from './LoginPage/LoginScreen';
import './stylesheet.css';


class App extends React.Component{
    render(){
    return (
        <div className= "login-register-wrapper">
           <div className= "nav-buttons">
               <button id= "loginButton" class="active">Login</button>
               <button id= "registerButton">Register</button>
           </div>
           <div className= "form-group">
               <LoginForm/>
               <RegisterForm/>
               </div>
           <div className= "forgot-panel">Forgot panel goes here</div>
        </div>
        )
    }
}
function LoginForm() {
    return <LoginScreen/>
}
function RegisterForm(){
    return<p>Register form goes here</p>
}
export default App;