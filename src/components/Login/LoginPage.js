import React, { Component } from 'react';
import LoginService from './LoginServices';
import configData from "../../../config.json";
import validator from 'validator'

//loginSucess and error will be use to keep track if the user is able to login or not 

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
        
        this.setState({
            emailError: "",
            passwordError: ""
        })

        //Check to see if the password field is not empty
        if(!this.state.password){
            passwordError = configData.Password_Error_Message;
        }
        //Check to see if the email is a valid email and not empty
        if(!validator.isEmail(this.state.email)){
            emailError = configData.Email_Error_Message;
        }
         /**
         * This conditional statement is responsible for print out error message above the input field based
         * on if one of the is set 
         * 
         * For example: If a error message is set inside emailError then it will re-render the component  and
         * print out the message
         *  */ 
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
        //Validate the user input before executing POST request
        const isValid = this.validate();
        if (isValid) {
            const loginResult = await LoginService(data);
            this.setState({
                emailError : "",
                passwordError : ""
            });
        //loginSuccess will be set to false if the user some reason fails login
            if (loginResult != 200) {
                this.setState({
                    loginSuccess: false,
                    error: true
                });
            } else
            //loginSuccess will be set to true if the user have successfully login
                this.setState({
                    loginSuccess: true,
                    error : false 
                });
        };
    }

    render(){
        const { loginSuccess, error } = this.state;
        //Display success message if loginSuccess is set to true
        if (loginSuccess) {
           alert(configData.Success_Message_For_Login);
           this.setState(initialState);
           window.open(configData.Home);
        }
        //Display error mesage if error is set to true
        if(error){
            alert(configData.Failure_Message_For_Login);
            this.setState({error: false})
        }
        return(
        <React.Fragment>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <div style ={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" value = {this.state.email} id="email" placeholder="email" onChange= {this.handleChangeOnEmail}/>
                </div>
                <div>
                    <div style ={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" value = {this.state.password} id="password" placeholder="password"  onChange= {this.handleChangeOnPassword}/>
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