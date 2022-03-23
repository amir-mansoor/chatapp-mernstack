import {Link} from "react-router-dom"
import { Button } from '@material-ui/core';
import "./css/home.css"

const HomeScreen = () => {
	return (
		<div className="home__main__div">
			<div className="container d-flex">
				<div className="left_div">
					<h4>Whatsapp</h4>
					<p>The World Largest Community. Where people can talk with each other with full encryption</p>
				</div>

				<div className="right_div">
					<p>
						Create Your Free Account And Talk With Your Friends.
					</p>

					
					<Link to="/register"><Button className="button_home" color="primary">Register</Button></Link>
					<Link to="/login"><Button className="button_home" color="primary">Login</Button></Link>
					
				</div>

			</div>
		</div>
	)
}

export default HomeScreen