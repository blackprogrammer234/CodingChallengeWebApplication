import axios from "axios";
import configData from "../../../config.json";

const baseUrl = configData.mongodb.host +":" +configData.mongodb.port;

const LoginService = data => (
	axios.post(baseUrl+ "/user/login", data)
		.then(res => res.status)
        .catch((error) =>{
            console.log(error.res);
        })
)

export default LoginService;