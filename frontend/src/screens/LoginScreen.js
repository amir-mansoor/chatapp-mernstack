import { Button,Input } from '@material-ui/core';
import "./css/register.css"
import {Link} from "react-router-dom"

const LoginScreen = () => {

	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")

	return (
		<div className="auth_grid">
			<div className="auth_flex_box">
				<h3>Login To Your Account</h3>
				<Input value={email} onChange={(e) => setEmail(e.target.value)} className="form_input" placeholder="Enter Your Email" />
				<Input value={password} onChange={(e) => setPassword(e.target.value)} className="form_input" placeholder="Enter Your Password"/>
				
				<Button className="auth_btn">Login To Account</Button>
				<p className="go_back">Create New Account? <Link className="go_back_link" to="/register">Register</Link></p>
			</div>
		</div>
	)
}

export default LoginScreen