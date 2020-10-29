import styled from 'styled-components';

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
	background-color: #6096ba;
	box-sizing: border-box;
	border: 0;
	cursor: pointer;
	padding: 12px 12px;
	border-radius: 10px;
	margin-left: ${(props) => props.ml ? props.ml + "rem" : 0};
	&:hover {
		background-color: #2974a6;
	}
`;

export const CustomBadgeButton = styled.button`
	color: #fff;
	position: relative;
	font-family: Quicksand;
	font-size: 1em;
	font-weight: bold;
	text-decoration: none;
	background-color: ${(props) => props.bgColor ? props.bgColor : '#6096ba'};
	box-sizing: border-box;
	border: 0;
	cursor: pointer;
	padding: 12px 12px;
	border-radius: 10px;
	margin-left: ${(props) => (props.ml ? props.ml + "rem" : 0)};
	user-select: none;
	&:focus{
		outline: none;
		box-shadow: none;
	}
`;

