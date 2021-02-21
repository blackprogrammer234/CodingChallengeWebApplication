import React, { Component } from 'react';
import LoginService from './LoginServices';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : "", 
            password : "",
            error: false,
            loginSuccess: false

        };
        this.handleChangeOnEmail = this.handleChangeOnEmail.bind(this);
        this.handleChangeOnPassword = this.handleChangeOnPassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

    }
    handleChangeOnEmail(event){ 
        this.setState({ 
          email : event.target.value 
        }); 
        console.log("this is the new email" + event.target.value)
      } 

      handleChangeOnPassword(event){ 
        this.setState({ 
          password : event.target.value 
        }); 
      }

    handleOnSubmit(event){
        alert("Email ")
        event.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.passowrd
        }
        console.log("input: " + payload);
        const loginResult = LoginService(payload);
        console.log('Testinnnggggggggggggggggggggggggggg');
    }

    render(){
        return(
        <React.Fragment>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" value = {this.state.email} id="email" placeholder="email" onChange= {this.handleChangeOnEmail}/>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" value = {this.state.password} id="password" placeholder="password" onChange= {this.handleChangeOnPassword}/>
                </div>
                <div>
                    <button type="button" onClick={this.handleOnSubmit} className="submit" />
                </div>
            </form>
        </React.Fragment>
        )
    }
}
export default LoginPage; 