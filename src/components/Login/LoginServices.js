import axios from "axios";

const LoginService = data => (
	axios.post('http://localhost:3000/user/login', data)
		.then(res => res.status)
)

export default LoginService;