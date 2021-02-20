import React from "react";


export class RegisterPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                
                <div className="form">
                    <div className= "form-group">
                        <label htmlFor= "First Name">firstName</label>
                        <input type="text" name="firstName" placeholder="firstName"></input>
                    </div>
                </div>
                <div className="form">
                    <div className= "form-group">
                        <label htmlFor= "Last Name">lastName</label>
                        <input type="text" name="lastName" placeholder="lastName"></input>
                    </div>
                </div>
                <div className="form">
                    <div className= "form-group">
                        <label htmlFor= "username">username</label>
                        <input type="text" name="username" placeholder="username"></input>
                    </div>
                </div>
                <div className="form">
                    <div className= "form-group">
                        <label htmlFor= "password">password</label>
                        <input type="text" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    }


}