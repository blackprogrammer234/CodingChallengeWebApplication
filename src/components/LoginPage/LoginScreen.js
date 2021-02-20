import React from "react";


class LoginScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="base-container">
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
                <div className="submit">
                    <label htmlFor= "submit">submit</label>
                    <input type="submit" valu="submit" placeholder="submit"></input>  
                </div>
            </div>
        </div>
    }
}
export default LoginScreen; 