import React, { Component } from 'react';
import validator from 'validator'
import { useSpring, animated } from "react-spring";
import RegisterService from "./RegisterServices";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    registerSuccess: false,
    error: false 
}

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.handleChangeOnFirstName = this.handleChangeOnFirstName.bind(this);
        this.handleChangeOnLastName = this.handleChangeOnLastName.bind(this);
        this.handleChangeOnEmail = this.handleChangeOnEmail.bind(this);
        this.handleChangeOnPassword = this.handleChangeOnPassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    validate = () => { 
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";

        const letters = "/^[A-Za-z]+$/";

        //Check to see if the first name field contains only letter and not empty
        if(!this.state.firstName){
            firstNameError = "First name is invalid "
        }
        //Check to see if the last name field contains only letter and not empty
        if(!this.state.lastName){
            lastNameError = "Last name is invalid "
        }
        //Check to see if the email is a valid email and not empty
        if(!validator.isEmail(this.state.email) || !this.state.email){
            emailError = 'Invalid email';
        }
        if(!validator.isStrongPassword(this.state.password, 
            {minLength: 6, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })){
            passwordError = "Invalid password. Password reguire at least 6 character," +
            "one uppercase character, one number and one special character"
        }
        if(firstNameError||lastNameError || emailError || passwordError){
            this.setState({
                firstNameError,
                lastNameError,
                emailError,
                passwordError});
            return false;
        }
        return true;
      } 

    handleChangeOnFirstName(event){
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeOnLastName(event){
        this.setState({
            lastName: event.target.value
        })
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        };
          const isValid = this.validate();
          if (isValid) {
              const registerResult = await RegisterService(data);
              if (registerResult != 200) {
                  this.setState({
                      registerSuccess: false,
                      error: true
                  });
              } else
                  this.setState({
                      registerSuccess: true,
                      error: false
                  });
          }

    }

    render() {
        const {registerSuccess, error } = this.state;
        if (registerSuccess) {
           alert("You have sign up successfully");
           this.setState(initialState);
        }
        if(error){
            alert("Error: Something went wrong. User registration failed")
            this.setState({error: false})
        }
        return(
            <React.Fragment>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.firstNameError}</div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="firstName" onChange={this.handleChangeOnFirstName}/>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.firstNameError}</div>
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.lastNameError}</div>
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="lastName" onChange={this.handleChangeOnLastName}/>
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" placeholder="email" onChange={this.handleChangeOnEmail} />
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" placeholder="password"  onChange={this.handleChangeOnPassword}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleOnSubmit} className="submit">Sign up</button>
                    </div>
                </form>
        </React.Fragment>
        );  
    }
}
export default RegisterPage ; 