import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import './stylesheet.css';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage'

function App() {

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);

    /**
     * Move the login form to the left/right using react-spring
     */
    const shiftTheLoginForm = useSpring({
        left: registrationFormStatus ? -500 : 0,
    });
    /**
     * Move the registration form to the left/right using react-spring
     */
    const shiftTheRegisterButton = useSpring({
        left: registrationFormStatus ? 0 : 500,
    });

    const hideBorder = "solid 0px transparent";
    const showBorder = "solid 2px #1059FF"

    /**
     * Animate the border underneath login/registration tab based on if registrationFormStatus
     * is set to true/false
     */
    const loginButtonProp = useSpring({
        borderBottom: registrationFormStatus ? hideBorder
            : showBorder  //Animate bottom border of login button
    });

    const registerButtonProp = useSpring({
        borderBottom: registrationFormStatus ? showBorder
            : hideBorder  //Animate bottom border of register button
    });

    /**
     * The registerClicked() and loginClicked() are responsible for swapping between the login
     * and signup page based on the status of the setRegistartionFormStatus. This is set when  
     * the login/signup tab is click
     * 
     * For example if the user click the signup tab then the setRegistartionFormStatus would be
     * set to true
     */
    function registerButtonClicked() {
        console.log("register button was clicked");
        setRegistartionFormStatus(true);
    }

    function loginButtonClicked() {
        console.log("login button was clicked");
        setRegistartionFormStatus(false);
    }

    return (
        <div className="login-register-wrapper">
            <div className="nav-buttons">
                <animated.button onClick={loginButtonClicked} id="loginButton" style={loginButtonProp}>Login</animated.button>
                <animated.button onClick={registerButtonClicked} id="registerButton" style={registerButtonProp}>Register</animated.button>
            </div>
            <div className="form-group">
                <animated.form action="" id="loginform" style={shiftTheLoginForm}><LoginForm />
                </animated.form>
                <animated.form action="" id="registerform" style={shiftTheRegisterButton} ><RegisterForm />
                </animated.form>
            </div>
            <animated.div className="forgot-panel" style={shiftTheLoginForm}>Forgot panel goes here</animated.div>
        </div>
    )

}
function LoginForm() {
    return (
        <LoginPage />
    )
}
function RegisterForm() {
    return (
        <RegisterPage />
    )
}

export default App;