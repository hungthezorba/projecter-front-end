import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

/* Import components and stylesheets */
import "./App.css";
import Login from "./loginForm/Login";
import Register from "./registerForm/Register";
import "./Form.css";
import NavigationBar from "./navigation/NavigationBar.js";
import Footer from "./navigation/Footer.js";
import Interesting from "./interestingField/Interesting"
import UserCard from "./userDisplay/UserCard.js";

/* Import pages */
import eFeatures from "./page/eFeatures.js";
import eHomePage from "./page/eHomepage.js"
import UserProfile from "./page/UserProfile";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="wrapper">
					<NavigationBar></NavigationBar>
					<Switch>
						<Route path="/" exact component = {eHomePage}/>
						<Route path="/features" component = {eFeatures}/>
						<Route path="/interest" component = {Interesting}/>
						<Route path="/profile" component = {UserProfile}/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
