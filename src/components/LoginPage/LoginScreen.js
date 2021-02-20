import React from "react";


class LoginScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                
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
                <button type="button" className="btn">Login</button>
            </div>
        </div>
    }
}
export default LoginScreen; 