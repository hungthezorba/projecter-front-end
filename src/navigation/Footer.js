import React from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-link">
				<p>Email: tendermate@support.com</p>
				<p>Address: RMIT Vietnam University, 702 NVL</p>
			</div>
		</div>
	);
}

export default Footer;
