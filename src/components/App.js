import { urlencoded } from 'body-parser';
import ReactDOM from 'react-dom';
import LoginScreen from './LoginPage/LoginScreen';
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import log from 'loglevel';
import './stylesheet.css';

function App() {
    
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);

    const loginProps = useSpring({
        left: registrationFormStatus? -500 : 0,
    });

    const registerProps = useSpring({
        left: registrationFormStatus? 0 : 500,
    });

    const hideBorder = "solid 0px transparent";
    const showBorder = "solid 2px #1059FF"

    const loginButtonProp = useSpring({borderBottom: registrationFormStatus ? hideBorder
    : showBorder  //Animate bottom border of login button
    });

    const registerButtonProp = useSpring({borderBottom: registrationFormStatus ? showBorder
        : hideBorder  //Animate bottom border of login button
        });

    function registerClicked() {
        log.info("register button was clicked");
        setRegistartionFormStatus(true);
      }

      function loginClicked() {
        log.info("login button was clicked");
        setRegistartionFormStatus(false);
      }

    return (
            <div className="login-register-wrapper">
                <div className="nav-buttons">
                    <animated.button onClick= {loginClicked} id="loginButton" style= {loginButtonProp}>Login</animated.button>
                    <animated.button onClick= {registerClicked} id="registerButton" style= {registerButtonProp}>Register</animated.button>
                </div>
                <div className="form-group">
                    <animated.form action="" id="loginform" style= {loginProps}><LoginForm />
                    </animated.form>
                    <animated.form action="" id="registerform" style= {registerProps} ><RegisterForm />
                    </animated.form>
                </div>
                <animated.div className="forgot-panel" style= {loginProps}>Forgot panel goes here</animated.div>
            </div>
        )

}
function LoginForm() {
    return (
        <React.Fragment>
            <label htmlFor="email">EMAIL</label>
            <input type="text" id="email" placeholder="email"/>
            <label htmlFor="password">PASSWORD</label>
            <input type="text" id="password" placeholder="password" />
            <input type="submit" value="submit" className="submit" />
        </React.Fragment>
    )
}
function RegisterForm() {
    return (
        <React.Fragment>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName"  placeholder="firstName" />
            <label htmlFor="LastName">Last Name</label>
            <input type="text" id="lastName" placeholder="lastName" />
            <label htmlFor="email">email</label>
            <input type="text" id="email" placeholder="email" />
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="password"  />
            <input type="submit" value="submit" class="submit" />
        </React.Fragment>
    )
}

export default App;