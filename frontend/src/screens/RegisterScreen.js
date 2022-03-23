import { Button,Input } from '@material-ui/core';
import "./css/register.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import {useEffect} from "react"

const RegisterScreen = () => {

	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password, setPassword] = useState("")

	const registerUser = ""

	useEffect(async () => {
		const config = {
			headers: {
				"Content-Type":"application/json"
			}
		}
		const {data} = await axios.get("/register",config)
	},[])
		 

	return (
		<div className="auth_grid">
			<div className="auth_flex_box">
				<h3>Register Using Your Email</h3>
				<Input value={name} onChange={(e) => setName(e.target.value)} className="form_input" placeholder="Enter Your Name" />
				<Input value={email} onChange={(e) => setEmail(e.target.value)} className="form_input" placeholder="Enter Your Email" />
				<Input value={password} onChange={(e) => setPassword(e.target.value)} className="form_input" placeholder="Enter Your Password"/>
				
				<Button onClick={registerUser} className="auth_btn">Create Account</Button>
				<p className="go_back">Already Have An Account? <Link className="go_back_link" to="/login">Login</Link></p>
			</div>
		</div>
	)
}

export default RegisterScreen