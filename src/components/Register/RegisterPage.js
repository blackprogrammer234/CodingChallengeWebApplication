import React from "react";
import { useSpring, animated } from "react-spring";


export class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName : "", 
            lastName : "", 
            email: "",
            password: ""
        };
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
            lastName: event.terget.value
        })
    }

    handleChangeOnEmail(event){ 
        this.setState({ 
          email : event.target.value 
        }); 
      } 

      handleChangeOnPassword(event){ 
        this.setState({ 
          email : event.target.value 
        }); 
      }

      handleOnSubmit(event){
        const { firstName, lastName, email , password } = this.state.event.preventDefault();
    }

    render() {
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
                        <input type="submit" value="submit" class="submit" />
                    </div>
                </form>
        </React.Fragment>
        );  
    }
}
export default RegisterPage ; 