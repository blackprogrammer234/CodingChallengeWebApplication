import React from "react";
import { useSpring, animated } from "react-spring";


class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "", password : ""
        };
        this.handleChangeOnEmail = this.handleChangeOnEmail.bind(this);
        this.handleChangeOnPassword = this.handleChangeOnPassword.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

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

    handleOnSubmit(event){
        const { email , password } = this.state.event.preventDefault();
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
                    <input type="submit" value="submit" className="submit" />
                </div>
            </form>
        </React.Fragment>
        )
    }
}
export default LoginPage; 