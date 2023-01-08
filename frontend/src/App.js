import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
import React from "react";

function App() {
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
