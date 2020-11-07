import React from "react";
import styled from "styled-components";
import { fade, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { CustomCmdButton, CustomIconButton } from "../StyledComponents/StyledComponents";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import CloseIcon from '@material-ui/icons/Close';


const SearchWrapper = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-top: 10px;
`;
const SearchProject = styled.div`
	font-weight: 700;
	display: flex;
	justify-content: flex-start;

	min-height: 51px;
	height: auto;
	width: 100%;
	background-color: #f8f8f8;
	margin-bottom: 20px;
	padding-top: 18px;
	padding-left: 10px;
`;
const ProjectResultWrapper = styled.div`
	display: flex;
`


const useStyles = makeStyles((theme) => ({
	root: {},
	title: {
		textAlign: "center",
		padding: "0",
	},
	content: {
		color: "#000",
	},
	actions: {
		padding: "0",
		paddingRight: '10px',
		paddingTop: '8px',
	},
	search: {
		position: "relative",
		border: "1px solid black",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: 0,
			width: "auto",
			marginRight: 0,
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20vw",
		},
	},
}));

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Quicksand"].join(","),
		fontSize: "1.5em",
		h5: {
			fontWeight: 700,
		},
	},
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function InviteDialog(props) {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				maxWidth={true}
				className={classes.root}
				open={props.openDialog}
				TransitionComponent={Transition}
				keepMounted
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogActions className={classes.actions}>
					<CustomIconButton bgColor="#fff" onClick={props.handleClose}>
						<CloseIcon/>
					</CustomIconButton>
				</DialogActions>
				<SearchWrapper>
					<DialogTitle className={classes.title} id="alert-dialog-slide-title">
						<ThemeProvider theme={theme}>
							<Typography variant="h5">Search your project</Typography>
						</ThemeProvider>
					</DialogTitle>
					<DialogContent className={classes.content}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search projects..."
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</div>
						<p>
							<b>Recent projects</b>
						</p>
						<SearchProject>
							Project #1
						</SearchProject>
						<SearchProject>
							Project #2
						</SearchProject>
						<SearchProject>
							Project #3
						</SearchProject>
					</DialogContent>
				</SearchWrapper>
			</Dialog>
		</div>
	);
}
