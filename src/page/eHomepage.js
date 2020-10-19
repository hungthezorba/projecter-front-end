import React from "react";
import NavigationBar from "../navigation/NavigationBar.js";
import Footer from "../navigation/Footer.js";

export default class eHomePage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	// methods here

	render() {
		return (
			<div>
				<div className="main-content">Homepage loading 99%</div>
				<Footer></Footer>
			</div>
		);
	}
}
