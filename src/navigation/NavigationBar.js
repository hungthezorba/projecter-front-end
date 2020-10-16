import React, { useState } from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
	return (
		<nav className="flexbox">
			<BrowserRouter>
				<div className="flexbox-left">
					<NavLink className="navtags-logo" activeClassName="logo" exact to="/">
						TenderMate
					</NavLink>
					<ul className="topNav">
						<li>
							<NavLink className="navtags" activeClassName="selected" to="/features">
								Features
							</NavLink>
						</li>
						<li>
							<NavLink className="navtags" activeClassName="selected" to="/explore">
								Explore
							</NavLink>
						</li>
						<li>
							<NavLink className="navtags" activeClassName="selected" to="/pricing">
								Pricing
							</NavLink>
						</li>
						<li>
							<NavLink className="navtags" activeClassName="selected" to="/about">
								About Us
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="flexbox-right">
					<NavLink className="navtags" activeClassName="selected" to="/signin">
						Sign in
					</NavLink>
					<NavLink className="navtags navbtn" activeClassName="selected" to="/signup">
						Sign up
					</NavLink>
				</div>
			</BrowserRouter>
		</nav>
	);
}

export default NavigationBar;
