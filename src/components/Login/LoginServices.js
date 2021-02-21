import axios from "axios";


const LoginServices = (email, password) => {
    axios({
        url: "http://localhost:3000/user/login",
        method: 'POST',
        data: {
            email: email , password: password
        }
    })
    .then(function(response){
        console.log(response)
        if(response.status == 200){
            alert("You have login successfully");
        }})
      .catch(message => {
        return alert('Login failed please try again');
        console.log(message);
      });
    }

export default LoginServices;