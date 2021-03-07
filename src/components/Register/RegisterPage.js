import React, { Component } from 'react';
import validator from 'validator';
import { useSpring, animated } from "react-spring";
import RegisterService from "./RegisterServices";
import configData from "../../../config.json";

//registerSuccess and error will be use to keep track if the user is able to register or not
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

    //Handling validation checks before sending information to mongo
    validate = () => { 
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        
        this.setState({
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: ""
        })
        
        //Check to see if the first name field is not empty
        if(!this.state.firstName){
            firstNameError = configData.FirstName_Is_Not_Empty;
        }
        //Check to see if the first name contains only letters
        if(this.state.firstName.match(/\d/)){
            firstNameError = configData.FirstName_Only_Contain_Letters
        }
        //Check to see if the last name field is not empty
        if(!this.state.lastName){
            lastNameError = configData.LastName_Is_Not_Empty
        }
        //Check to see if the last name field contains only letters
        if(this.state.lastName.match(/\d/)){
            lastNameError = configData.LastName_Only_Contain_Letters
        }
        //Check to see if last name is not the same as first name
        if(this.state.lastName == this.state.firstName){
            lastNameError = configData.LastName_Cant_Be_FirstName
        }
        //Check to see if the email is a valid email and not empty
        if (!validator.isEmail(this.state.email) || !this.state.email) {
            emailError = configData.Email_Error_Message;
        }
        //Check to see if the password meet the following requirement
        //Password must be least 6 character long
        //Password must contain least one uppercase letter, one lowercase letter, one number and one special character
        if (!validator.isStrongPassword(this.state.password,
            {
                minLength: 6, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
            })) {
            passwordError = configData.Password_Error_Message;
        }
        /**
         * This conditional statement is responsible for print out error message above the input field based
         * on if one of the is set 
         * 
         * For example: If a error message is set inside firstNameError then it will re-render the component  and
         * print out the message
         *  */
        if (firstNameError || lastNameError || emailError || passwordError) {
            this.setState({
                firstNameError,
                lastNameError,
                emailError,
                passwordError
            });
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
          //Validate the user input before executing POST request
          if (isValid) {
              const registerResult = await RegisterService(data);
              //registerSuccess will be set to false if the user for some reason fails register
              if (registerResult != 200) {
                  this.setState({
                      registerSuccess: false,
                      error: true
                  });
              } else
              //registerSuccess will be set to true if the user have successfully register
                  this.setState({
                      registerSuccess: true,
                      error: false
                  });
          }

    }

    render() {
        const {registerSuccess, error } = this.state;
        //Display success message if registerSuccess is set to true
        if (registerSuccess) {
           alert(configData.Success_Message_For_Registration);
           this.setState(initialState);
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
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.firstNameError}</div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value = {this.state.firstName} placeholder="firstName" onChange={this.handleChangeOnFirstName}/>
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.lastNameError}</div>
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" id="lastName" value = {this.state.lastName} placeholder="lastName" onChange={this.handleChangeOnLastName}/>
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" value = {this.state.email} placeholder="email" onChange={this.handleChangeOnEmail} />
                    </div>
                    <div>
                        <div style ={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" value = {this.state.password} placeholder="password" onChange={this.handleChangeOnPassword}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleOnSubmit} className="submit">Sign up</button>
                    </div>
                    <input type="reset" defaultValue="Reset" />  
                </form>
        </React.Fragment>
        );  
    }
}
export default RegisterPage ; 