import React from "react";
import NavigationBar from "../navigation/NavigationBar.js";
import Footer from "../navigation/Footer.js";

export default class eFeatures extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	// methods here

	render() {
		return (
			<div>
				<NavigationBar></NavigationBar>
				<div className="main-content">Features loading 99%</div>
				<Footer></Footer>
			</div>
		);
	}
}
