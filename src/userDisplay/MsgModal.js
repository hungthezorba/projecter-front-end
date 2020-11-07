import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function MsgModal(props) {
	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.isOpen}
				onClose={props.isClosed}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={props.isOpen}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Search your project</h2>
						<p id="transition-modal-description">Recent projects</p>
						<button onClick={props.isClosed}>Close</button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
