import React, { Component } from 'react';
import LoginService from './LoginServices';
import configData from "../../../config.json";
import validator from 'validator'
import { Redirect } from 'react-router';
import { BrowserRouter  } from 'react-router-dom';
import { useSpring, animated } from "react-spring";

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    error: false,
    loginSuccess: false
}


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
        this.handleChangeOnEmail = this.handleChangeOnEmail.bind(this);
        this.handleChangeOnPassword = this.handleChangeOnPassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

    }

    validate = () => { 
        let emailError = "";
        let passwordError = "";

        if(!this.state.password){
            passwordError = "password field can not be blank"
        }
        if(!validator.isEmail(this.state.email)){
            emailError = 'invalid email';
        }
        if(emailError || passwordError){
            this.setState({emailError,passwordError});
            return false;
        }
        return true;
      } 

    handleChangeOnEmail(event){ 
        this.setState({ 
          email : event.target.value 
        }); 
      } 

      handleChangeOnPassword(event){ 
        this.setState({ 
          password : event.target.value 
        }); 
      }

    handleOnSubmit = async (e) => {
        const data = {
            email: this.state.email,
            password: this.state.password,
        };
        const isValid = this.validate();
        if (isValid) {
            const loginResult = await LoginService(data);
            this.setState({
                emailError : "",
                passwordError : ""
            });
            if (loginResult != 200) {
                this.setState({
                    loginSuccess: false,
                    error: true
                });
            } else
                this.setState({
                    loginSuccess: true,
                    error : false 
                });
        };
    }

    render(){
        const { loginSuccess, error } = this.state;
        if (loginSuccess) {
           alert("You successfully login to John Cena Homepage");
           this.setState(initialState);
           window.open(configData.Home);
        }
        if(error){
            alert("There was a problem. We can't sign into your acount. Please try again");
            this.setState({error: false})
        }
        return(
        <React.Fragment>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" value = {this.state.email} id="email" placeholder="email" onChange= {this.handleChangeOnEmail}/>
                    <div style ={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" value = {this.state.password} id="password" placeholder="password" onChange= {this.handleChangeOnPassword}/>
                    <div style ={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                </div>
                <div>
                    <button type="button" onClick={this.handleOnSubmit} className="submit">Login</button>
                </div>
            </form>
        </React.Fragment>
        )
    }
}
export default LoginPage; 