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
            const registerResult = await RegisterService(data);
            if (registerResult != 200) {
                this.setState({
                    registerSuccess: false,
                    error: true
                });
            } else
                this.setState({
                    registerSuccess: true,
                    error : false 
                });
  
    }

    render() {
        const {registerSuccess, error } = this.state;
        if (registerSuccess) {
           alert("You have sign up successfully");
           this.setState(initialState);
        }
        if(error){
            alert("Error: Something went wrong. User registration failed")
        }
        return(
            <React.Fragment>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="firstName" onChange={this.handleChangeOnFirstName}/>
                    </div>
                    <div>
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="lastName" onChange={this.handleChangeOnLastName}/>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" placeholder="email" onChange={this.handleChangeOnEmail} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" placeholder="password"  onChange={this.handleChangeOnPassword}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleOnSubmit} className="submit"  />
                    </div>
                </form>
        </React.Fragment>
        );  
    }
}
export default RegisterPage ; 