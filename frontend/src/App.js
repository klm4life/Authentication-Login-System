import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
import React, { useState, useEffect } from "react";
import { getToken, getUser, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";

const verifyTokenAPIURL = "https://noc4wfai1i.execute-api.us-east-1.amazonaws.com/prod/verify";


function App() {

	const [isAuthenticating, setAuthenticating] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (token === 'undefined' || token === undefined || token === null || !token) {
			return;
		} 

		const requestConfig = {
			headers: {
				'x-api-key': 'HcBRcNghJa3LwKQHT9GK91O9Fe3McmEy6mdNt4IU',
			}
		}
		const requestBody = {
			user: getUser(),
			token: token
		}

		axios.post(verifyTokenAPIURL, requestBody, requestConfig).then((response) => {
			setUserSession(response.data.user, response.data.token);
			setAuthenticating(false);
		}).catch(() => {
			resetUserSession();
			setAuthenticating(false);
		})

	}, []);

	const token = getToken();
	if (isAuthenticating && token) {
		return <div className="content">Authenticating...</div>
	}

	return (
    	<div className="App">
			<BrowserRouter>
			<div className="header">
				{/* <NavLink exact="true" activeClassName="active" to="/">Home</NavLink>
				<NavLink activeClassName="active" to="/register">Register</NavLink>
				<NavLink activeClassName="active" to="/login">Login</NavLink>
				<NavLink activeClassName="active" to="/premium-content">Premium Content</NavLink> */}
				<NavLink exact="true" className={({ isActive }) => isActive? "active": ''} to="/">Home</NavLink>
				<NavLink className={({ isActive }) => isActive? "active": ''} to="/register">Register</NavLink>
				<NavLink className={({ isActive }) => isActive? "active": ''} to="/login">Login</NavLink>
				<NavLink className={({ isActive }) => isActive? "active": ''} to="/premium-content">Premium Content</NavLink>
			</div>
			<div className="content">
				<Routes>
					{/* <Route exact="true" path="/" component={Home}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/premium-content" component={PremiumContent}></Route> */}
					<Route exact="true" path="/" element={<Home/>}></Route>
					<Route path="/register" element={<Register/>}></Route>
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/premium-content" element={<PremiumContent/>}></Route>
				</Routes>
			</div>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
