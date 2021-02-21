import { urlencoded } from 'body-parser';
import ReactDOM from 'react-dom';
import LoginScreen from './Login/LoginPage';
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import log from 'loglevel';
import './stylesheet.css';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage'

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
        <LoginPage/>
    )
}
function RegisterForm() {
    return (
       <RegisterPage/>
    )
}

export default App;