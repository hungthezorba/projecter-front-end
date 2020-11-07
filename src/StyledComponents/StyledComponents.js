import styled from "styled-components";

// default color: #6096ba #2974a6

export const Wrapper = styled.div`
	margin-right: auto;
	margin-left: auto;
	max-width: 1024px;
	padding-right: 10px;
	padding-left: 10px;
	@media (device-aspect-ratio: 16/10) {
		max-width: 80%;
		padding-right: 10px;
		padding-left: 10px;
	}
`;

export const CustomCmdButton = styled.button`
	color: #fff;
	position: relative;
	font-family: Quicksand;
	font-size: 1em;
	font-weight: bold;
	text-decoration: none;
	background-color: ${(props) => (props.bgColor ? props.bgColor : "#6096ba")};
	box-sizing: border-box;
	border: 0;
	cursor: pointer;
	padding: 12px 12px;
	border-radius: 15px;
	margin-left: ${(props) => (props.ml ? props.ml + "rem" : 0)};
	&:hover {
		background-color: ${(props) => (props.onHoverColor ? props.onHoverColor : "#2974a6")};
	}
	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
	}
`;

export const CustomBadgeButton = styled.button`
	color: #fff;
	position: relative;
	font-family: Quicksand;
	font-size: 1em;
	font-weight: bold;
	text-decoration: none;
	background-color: ${(props) => (props.bgColor ? props.bgColor : "#6096ba")};
	box-sizing: border-box;
	border: 0;
	cursor: pointer;
	padding: 12px 12px;
	border-radius: 10px;
	margin-left: ${(props) => (props.ml ? props.ml + "rem" : 0)};
	user-select: none;
	&:focus {
		outline: none;
		box-shadow: none;
	}
`;

export const CustomBadgeIcon = styled.img`
	max-width: 44px;
	max-height: 44px;
`;

export const ToolTipBox = styled.div`
	position: absolute;
	top: calc(100% + 10px);
	visibility: hidden;
	color: transparent;
	background-color: transparent;
	width: 150px;
	padding: 5px 5px;
	border-radius: 4px;

	transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
		padding 0.5s ease-in-out;

	&:before {
		content: "";
		width: 0;
		height: 0;
		left: 15px;
		top: -5px;
		position: absolute;

		border: 5px solid transparent;
		transform: rotate(135deg);
		transition: border 0.3s ease-in-out;
	}
`;

export const ToolTipContent = styled.div`
	width: 46px;
	height: 46px;
	cursor: pointer;
	margin: 0;
`;

export const ToolTipCard = styled.div`
	position: relative;
	display: inline-block;
	& ${ToolTipContent}:hover + ${ToolTipBox} {
		visibility: visible;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.8);
		width: auto;
		min-width: 150px;
		padding: 8px 8px;
		&:before {
			border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
		}
	}
`;

export const CustomIconButton = styled.button`
	color: #fff;
	position: relative;
	font-family: Quicksand;
	font-size: 1em;
	text-decoration: none;
	background-color: ${(props) => (props.bgColor ? props.bgColor : "#6096ba")};
	box-sizing: border-box;
	border: 0;
	cursor: pointer;
	padding: 0;
	border-radius: 10px;
	color: #000;
	margin-left: ${(props) => (props.ml ? props.ml + "rem" : 0)};
	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
	}
`;

// Tooltip generator
