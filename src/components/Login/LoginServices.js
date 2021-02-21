import axios from "axios";


const LoginServices = (payload) => {
    axios({
        url: "http://localhost:3000/user/login",
        method: 'POST',
        data: {
            email: "robert_houston@gmail.com" , password: "example1"
        },
    })
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }

export default LoginServices;